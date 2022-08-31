import React from 'react'
import Checkbox from 'antd/lib/checkbox/Checkbox';

export default function PatientProfileTableLine({  name ,formikValue,handleCheckbox,number,inputName,inputId,onChange,onBlur}) {
  const onChangeCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="patient-profile__table__line">
    <div>{number}</div>
    <div className="patient-profile__table__line__name">
      {name}
    </div>
    <div className="patient-profile__table__line__checkbox">
    <Checkbox 
    onChange={onChangeCheckbox}
    onClick={(e) => handleCheckbox(e, inputName)}
    >

    </Checkbox>
      
    </div>
    <div className="patient-profile__table__line__input">
      <input
        type="text"
        name={inputName}
        id={inputId}
        value={formikValue}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  </div>
  )
}
