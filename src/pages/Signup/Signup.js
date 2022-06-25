import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/signup.css'

export function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [pwcheck, setPwcheck] = useState("");
  return (<div class="login-wrap"><div className="login-inner">
  <h2>회원가입</h2>
  <p>가입 방법을 결정해주세요</p>
  <input placeholder="ID" type="text" />
  <input placeholder="Password" type="password" />
  <div className="button-flex">
      <button type="button">아이디 저장</button>
      <button type="button">아이디 / 비밀번호 찾기</button>
  </div>
  <button className="login-button" type="button">로그인</button>
  <p className="or">또는</p>
  <div className="link-button-wrap">
      <button className="link-button"></button>
      <button className="link-button google"></button>
      <button className="link-button facebook"></button>
  </div>
  <p className="or">또는</p>
  <button className="login-button sign-up" type="button">회원가입 후 우리아이 만나기</button>
</div>
</div>)
}