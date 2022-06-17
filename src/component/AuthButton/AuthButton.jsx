import React from 'react'
import './authButton.css'
export default function AuthButton({text, back}) {
  return (
    <button className={back?'auth-button_back':'auth-button'}>{text}</button>
  )
}
