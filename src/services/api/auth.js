import { post, get } from './instance'

//로그인 및 회원가입 API
export const logIn = (info) =>
  post('user/login', info).catch((error) => {
    console.log(error)
    alert('아이디나 비밀번호를 잘못 입력하셨습니다 !')
  })
export const signUp = (info) =>
  post('user/register', info).catch((error) => {
    console.log(error)
  })
// 이메일 인증
export const authEmail = (info) =>
  post('user/verify', info).catch((error) => {
    console.log(error)
  })

// test
export const test = () =>
  get('user/test').catch((error) => {
    console.log(error)
  })
