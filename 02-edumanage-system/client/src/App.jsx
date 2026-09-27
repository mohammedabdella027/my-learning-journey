import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;