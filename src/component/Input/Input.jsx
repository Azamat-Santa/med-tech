import React from 'react'
import './input.css'

const inputTypes = {
  editType: 'edit-user-input',
  createType: 'create-user-input'
}

export default function Input({id,value, placeholder, type, typeClass = 'editType',name,onChange,onBlur}) {
  return (
    <div >
      <input 
      id={id}
      type={type} 
      placeholder={placeholder}
      value={value}
      className={typeClass ==='editUserInput' ? 'authInput edit-user-input': 'authInput'}
      // className={`authInput ${inputTypes[typeClass]}`}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      />
      
    </div>
  )
}
