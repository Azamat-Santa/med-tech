import React from 'react'
import './input.css'
export default function Input({value, placeholder, type}) {
  return (
    <div className='authInput'>
      <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      />
    </div>
  )
}
