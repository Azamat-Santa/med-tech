import React, { useState } from "react";
import "./patients.css";
import statusArrow from "../../img/Polygon 1.png";
import { columes, patientSaurse } from "./patientData";
export default function Patients() {
  const listStatus = ["Все", "В ожидании", "Родившие", "В архиве"];
  const [status, setStatus] = useState("Статус");
  const [statusActive, setStatusActive] = useState(false);
  const [activeStatus, setActiveSatus] = useState(0);
  const handlerStatus = (option, idx) => {
    setStatus(option);
    setActiveSatus(idx);
  };
  const statusOptionIsActive = (index) => {
    setStatusActive(!statusActive);
  };


  

  return (
    <div>
    <div className="patient-wrapper">
    <div className="patientsFilter" onBlur={() => setStatusActive(false)}>
        <div>
          <div className="status-select" onClick={() => statusOptionIsActive()}>
            {status}
            <img src={statusArrow} alt="" />
          </div>
          <div className="status-select__wrapper">
            {statusActive &&
              listStatus.map((option, index) => (
                <div
                  className={
                    activeStatus === index
                      ? "status-select__item status-select__item_active"
                      : "status-select__item"
                  }
                  onClick={() => handlerStatus(option, index)}
                >
                  {option}
                </div>
              ))}
          </div>
        </div>
        <div>
          <input
            type="text"
            className="search-patient"
            placeholder="Введите ФИО пациента"
          />
        </div>
      </div>
     
      <div className="patient-table">
        <div className="patient-table__title">Список пациенток</div>
        <div className="patient-table__columes">
          {columes.map((columeName) => (
            <div className="patient-table__columes_item">{columeName}</div>
          ))}
        </div>
        <div className="patient-table__data">
        {
            patientSaurse.map((patient, index)=>(
                <div className="patient-table__data_item">
                <div>{index +1 }</div>
                <div>{patient.name}</div>
                <div>{patient.pregnancyЫtatus + ' ' + 'беременность'}</div>
                <div>22.02.22</div>
                <div>24.06.23</div>
            </div>
            ))
        }
            
        </div>


      </div>
    </div>
      
    </div>
  );
}
