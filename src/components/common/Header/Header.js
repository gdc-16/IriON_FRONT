import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import storage from '../../../services/store';
import '../../../assets/css/header.css'
import searchIcon from '../../../assets/icons/search.png'
import followIcon from '../../../assets/icons/empty_heart.png'
import alertIcon from '../../../assets/icons/alert.png'
import quizIcon from '../../../assets/icons/quiz.png'
import circleIcon from '../../../assets/icons/circle.png'
import Logo from '../Logo/Logo';

export default function Header(){
  const [isUser, setIsUser] = useState(storage.get("user"))

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <Link to="/"><p><Logo data={1} /></p></Link>
          <div className="input-wrap">
            <input className="content" type="search" />
            <div className="search-icon"><img className="search-icon" src={searchIcon} alt="" width="24px" height="24px" /></div>
          </div>
          <div className="header-nav-items">
            <Link to="/follow"><div className="item"><img className="follow-icon" src={followIcon} alt="" /></div></Link>
            <Link to="/alert"><div className="item"><img className="alert-icon" src={alertIcon} alt=""/></div></Link>
            <Link to="/quiz"><div className="item"><img className="quiz-icon" src={quizIcon} alt="" /></div></Link>
            {isUser? <Link to="/mypage"><div className='item'>
                <img src={circleIcon} alt=""  />
              </div></Link>:
            <Link to="/login"><div className='profile'/></Link>}
          </div>
        </nav>
      </header>
    </>
  )
}