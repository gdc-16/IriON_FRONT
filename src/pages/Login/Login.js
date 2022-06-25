import React from 'react';
import { Link } from 'react-router-dom';

export function Login() {
  return (<div className='login_area'>
    <form>
      <input type="text" placeholder='id' />
      <input type="password" placeholder='password' />
      <input type="submit" />
    </form>
    <Link to="/signup">회원가입</Link>
    </div>)
}