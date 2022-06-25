import { Route, Routes } from 'react-router-dom'
import { Main, Follow, Alert, Login, Signup, Init, MyPage } from '../pages/index';
import Header from './common/Header/Header';

function App() {
  return (<>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/follow" element={<Follow />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Init />} />
      </Routes>
      </>
  );
}

export default App;
