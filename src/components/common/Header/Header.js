import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/header.css'
import searchIcon from '../../../assets/icons/search.png'
import followIcon from '../../../assets/icons/empty_heart.png'
import alertIcon from '../../../assets/icons/alert.png'

export default function Header(){
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <p>LOGO</p>
          <div className="input-wrap">
            <input className="input-content" id="input" type="search" />
            <button type="submit">
              <img className="search-icon" src={searchIcon} alt="" width="24px" height="24px" />
            </button>
          </div>
          <div className="header-nav-items">
            <Link to="/follow"><img className="follow-icon" src={followIcon} alt="" width="24px" height="24px" /></Link>
            <Link to="/alert"><img className="alert-icon" src={alertIcon} alt="" width="24px" height="24px" /></Link>
            <img className="circle-icon" src={searchIcon} alt="" width="24px" height="24px" />
            <div className='profile'></div>
          </div>
        </nav>
      </header>
    </>
  )
}