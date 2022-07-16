import React from "react";
import check from "../../img/check.png";
import { useState } from "react";

export default function PatientProfileTable({ data, title ,text}) {
  const [dateTable, setDateTable] = useState(data);
  
  const toggleCheck=(id)=>{
    const newTodo=[...dateTable]
    if(newTodo[id-1].isChecked===true){
      newTodo[id -1].isChecked=false
    }else if(newTodo[id-1].isChecked===false){
      newTodo[id -1].isChecked=true
    }
    setDateTable(newTodo)
  }
  return (
    <div className="patient-profile__right__item">
      <div className="patient-profile__right__item__header">{title}</div>
      <div className="patient-profile__table">
        {data ?
          dateTable.map((el) => (
            <div className="patient-profile__table__line" key={el.id}>
              <div>{el.id}</div>
              <div className="patient-profile__table__line__name">{el.name}</div>
              <div className="patient-profile__table__line__checkbox">
                <div onClick={() => toggleCheck(el.id)}>
                  {el.isChecked && <img src={check} alt="" />}
                </div>
              </div>
              <div className="patient-profile__table__line__input">
                <input type="text" />
              </div>
            </div>
          )):'loading'}
      </div>
    </div>
  );
}
