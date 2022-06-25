import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, Follow, Alert } from '../pages/index';
import { Login } from '../pages/Login/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/follow" element={<Follow />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
