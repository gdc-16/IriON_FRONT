import React, {useState, useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import useInputState from '../../components/common/input/useInputState';
import { logIn, logOut } from '../../store/actions/authAction';
// import { signinWithToken } from '../../store/actions/tokenAction.js';
import storage from '../../services/store';
import { Link } from 'react-router-dom';
import '../../assets/css/login.css'

export function Login() {
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.auth);
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeId = useCallback((val) => {
    setId(val);
  })

  const handleChangePassword = useCallback((val) => {
    setPassword(val);
  })

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    storage.set("user", {id: id})
    window.location.replace("/")
  })

  return (<div className="login-wrap"><div className="login-inner">
  <h2>로그인</h2>
  <p>아이디를 입력하세요</p>
  <form>
    <input name="id" placeholder="ID" type="text" value={id} onChange={(event) => handleChangeId(event.target.value)}/>
    <input name="password" placeholder="Password" type="password" value={password} onChange={(event) => handleChangePassword(event.target.value)} />
  <div className="button-flex">
      <button type="button">아이디 저장</button>
      <button type="button">아이디 / 비밀번호 찾기</button>
  </div>
  <button type="submit" className="login-button" onClick={handleSubmit}>로그인</button>
  </form>
  <p className="or">또는</p>
  <div className="link-button-wrap">
      <button className="link-button"></button>
      <button className="link-button google"></button>
      <button className="link-button facebook"></button>
  </div>
  <p className="or">또는</p>
  <Link to="/signup" style={{color: 'black'}}><button className="login-button sign-up" type="button">회원가입 후 우리아이 만나기</button></Link>
</div>
</div>)
}