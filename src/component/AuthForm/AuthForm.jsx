import React from 'react'
import './authForm.css'
import logo from '../../img/LogoWhite.png'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
import Input from '../Input/Input'
import AuthButton from '../AuthButton/AuthButton'

export default function AuthForm({isAuth, setIsAuth}) {
    const handleAuth =()=>{
        setIsAuth(true)
        localStorage.setItem('isAuth', true)
    }
  return (
    <div className="auth__form-wrapper">
        <div className="auth__form-logo">
            <img src={logo} alt="" className='logo'/>
            <p className='logo-title'>Беременность</p>
        </div>
        <div className="auth__form">
          <Title text='Авторизация'/>
          <div className="auth__form-input">
            <Input
                type="text" 
                placeholder='Введите Email'
            />
          </div>
          <div className="auth__form-input">
            <Input
                type="password" 
                placeholder='Введите пароль'
            />
              
          </div>
          <div onClick={()=>handleAuth()}>
          <AuthButton text='Войти'/>

          </div>
          <Link to={'/passwordRecovery'}>Забыли пароль?</Link>

        </div>
      </div> 
  )
}
