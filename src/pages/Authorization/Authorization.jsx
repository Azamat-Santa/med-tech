import React from 'react'
import './index.css'
import logo from '../../img/Logo.png'
import { Link, Route, Router } from 'react-router-dom'
import AuthForm from '../../component/AuthForm/AuthForm'
export default function Authorization() {
  return (
  
    <div className='auth'>
      <div className='white-wave-img'></div>
      <div className="auth-baby-img"></div>
      <AuthForm />
    </div>
  )
}
