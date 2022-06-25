import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/header.css'
import searchIcon from '../../../assets/icons/search.png'
import followIcon from '../../../assets/icons/empty_heart.png'
import alertIcon from '../../../assets/icons/alert.png'
import quizIcon from '../../../assets/icons/quiz.png'

export default function Header(){
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <Link to="/"><p>LOGO</p></Link>
          <div className="input-wrap">
            <input className="content" type="search" />
            <div className="search-icon"><img className="search-icon" src={searchIcon} alt="" width="24px" height="24px" /></div>
          </div>
          <div className="header-nav-items">
            <Link to="/follow"><div className="item"><img className="follow-icon" src={followIcon} alt="" /></div></Link>
            <Link to="/alert"><div className="item"><img className="alert-icon" src={alertIcon} alt=""/></div></Link>
            <Link to="/quiz"><div className="item"><img className="quiz-icon" src={quizIcon} alt="" /></div></Link>
            <Link to="/login"><div className='profile'></div></Link>
          </div>
        </nav>
      </header>
    </>
  )
}