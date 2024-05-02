import React from 'react'
import './LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginsighup">
      <div className="loginsignup-container">
        <h1>Зарегестрироваться</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Ваше имя'/>
          <input type='email' placeholder='Ваша почта'/>
          <input type='password' placeholder='Пароль'/>
        </div>
        <button>Продолжить</button>
        <p className='loginsignup-login'>У вас уже есть аккаунт?  <span>Войдите сюда</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup
