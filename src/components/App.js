import { Route, Routes } from 'react-router-dom'
import { Main, Follow, Alert, Login, Signup, Init, MyPage, Dog, Cat, CatQuiz1, CatQuiz2, CatQuiz3,CatQuiz4,CatQuiz5, CatFinal } from '../pages/index';
import Header from './common/Header/Header';
import  {animalAll}  from '../store/actions/animalAction';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {dispatch(animalAll())}, [])
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
        <Route path="/quiz/cat" element={<Cat />} />
        <Route path="/quiz/cat/detail1" element={<CatQuiz1 />} />
        <Route path="/quiz/cat/detail2" element={<CatQuiz2 />} />
        <Route path="/quiz/cat/detail3" element={<CatQuiz3 />} />
        <Route path="/quiz/cat/detail4" element={<CatQuiz4 />} />
        <Route path="/quiz/cat/result/ok" element={<CatFinal />} />
        <Route path="/quiz/dog" element={<Dog />} />
      </Routes>
      </>
  );
}

export default App;
