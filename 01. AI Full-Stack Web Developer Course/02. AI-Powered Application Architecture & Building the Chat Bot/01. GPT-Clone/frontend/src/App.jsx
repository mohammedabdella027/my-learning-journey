import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import ChatHeader from './components/ChatHeader/ChatHeader';
import MessageList from './components/MessageList/MessageList';
import ChatInput from './components/ChatInput/ChatInput';
import './index.css';

const API_BASE_URL = 'http://localhost:3000/api';

function App() {
  const [conversations, setConversations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Initial fetch on mount
  useEffect(() => {
    fetchConversations();
  }, []);

  // Auto-scroll when messages update or loading state changes
  useEffect(() => {
    scrollToBottom();
  }, [conversations, isLoading]);

  const fetchConversations = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/chat/conversations`);
      
      if (response.data.success) {
        // Fallback to empty array if the resolved key doesn't yield an array
        const fetchedData = response.data.data?.conversations || response.data.data;
        setConversations(Array.isArray(fetchedData) ? fetchedData : []);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
      setConversations([]); 
    }
  };

  const handleSendMessage = async (question) => {
    const tempUserMessage = {
      id: Date.now(),
      role: 'user',
      content: question,
    };

    // Optimistically add user message immediately
    setConversations((prev) => [...prev, tempUserMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/chat/conversations`, { question });
      
      if (response.data.success) {
        const { userConversation, assistantConversation } = response.data.data;

        // Swap out the temporary message container with real, database-backed ones
        setConversations((prev) => {
          const filtered = prev.filter((msg) => msg.id !== tempUserMessage.id);
          return [...filtered, userConversation, assistantConversation];
        });
      }
    } catch (error) {
      console.error('Error posting conversation:', error);

      const errorMessage = error.response?.data?.message || 'There was an error generating a response.';
      const errorConversation = {
        id: Date.now() + 1,
        role: 'assistant',
        content: errorMessage,
      };

      setConversations((prev) => [...prev, errorConversation]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='app'>
      <Sidebar />

      <main className='main'>
        <ChatHeader />

        <MessageList
          conversations={conversations}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        />

        <ChatInput
          handleSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default App;
