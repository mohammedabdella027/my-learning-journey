import Sidebar from './components/Sidebar/Sidebar.jsx';
import ChatHeader from './components/ChatHeader/ChatHeader';

function App() {
  return (
    <>
    <div className='app'>
      <Sidebar />
      <main className='main'>
        <ChatHeader />
      </main>
    </div>
    </>
  )
}

export default App
