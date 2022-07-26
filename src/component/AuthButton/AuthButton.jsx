import React from 'react'
import './authButton.css'
export default function AuthButton({text, back, isLoading}) {
  return (
    <button className={back?'auth-button_back':'auth-button'}>{isLoading ? 'Loading...' : text}</button>
  )
}
