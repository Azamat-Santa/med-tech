import React from 'react'
import './input.css'
export default function Input({id,value, placeholder, type, typeClass,name,onChange,onBlur}) {
  return (
    <div >
      <input 
      id={id}
      type={type} 
      placeholder={placeholder}
      value={value}
      className={typeClass ==='editUserInput' ? 'authInput edit-user-input': 'authInput'}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      />
    </div>
  )
}
