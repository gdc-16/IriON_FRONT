import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, Follow, Alert } from '../pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/follow" element={<Follow />} />
        <Route path="/alert" element={<Alert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
