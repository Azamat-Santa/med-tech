import React, { useEffect, useState } from "react";
import "./patients.css";
import statusArrow from "../../img/Polygon 1.png";
import { columes, patientSaurse } from "./patientData";
import { Link } from "react-router-dom";
import { getPatient } from "../../api/patient/patient";
import { useDispatch, useSelector } from "react-redux";
import { moment } from "moment";
import Spinner from './../../component/Spin/Spinner';
export default function Patients() {
  const listStatus = ["Все", "В ожидании", "Родившие"];
  const [status, setStatus] = useState("Статус");
  const [statusActive, setStatusActive] = useState(false);
  const [activeStatus, setActiveSatus] = useState(0);
  const statusOptionIsActive = (e) => {
    e.stopPropagation();
    setStatusActive(!statusActive);
  };
  const dispatch = useDispatch();
  useEffect(() => {
   getPatient(dispatch)
  }, [])
  
  const [searchName, setSearchName] = useState("");
  const patientList = useSelector((state) => {
    if (!searchName) return state.patient.patientAll.data;
    return state.patient.patientAll.data.filter((user) => {
      const firstLastName = user.firstName + " " + user.lastName;
      return firstLastName.toLowerCase().includes(searchName.toLowerCase());
    });
  });
  const pendingPatientList = useSelector((state) => {
    if (!searchName) return state.patient.patientAll.pending;
    return state.patient.patientAll.pending.filter((user) => {
      const firstLastName = user.firstName + " " + user.lastName;
      return firstLastName.toLowerCase().includes(searchName.toLowerCase());
    });
  });
  const whoGaveBirthPatientList = useSelector(state=> {
    if (!searchName) return state.patient.patientAll.whoGaveBirth;
    return state.patient.patientAll.whoGaveBirth.filter((user) => {
      const firstLastName = user.firstName + " " + user.lastName;
      return firstLastName.toLowerCase().includes(searchName.toLowerCase());
    });
  });
  const [patientDataHandler, setPatientDataHandler] = useState({
    patientList: true,
    patientPending: false,
    patientWhoGaveBirth: false,
  });

  const isLoading = useSelector(state=>state.patient.patientAll.isLoading)
 
  const handlerStatus = (option, idx) => {
    setStatus(option);
    setActiveSatus(idx);
    if (option === "В ожидании") {
      setPatientDataHandler({
        patientList: false,
        patientPending:true,
        patientWhoGaveBirth:false
      });
    }
    if (option === "Родившие") {
      setPatientDataHandler({
        patientList: false,
        patientPending:false,
        patientWhoGaveBirth:true
      });
    }
    if (option === "Все") {
      setPatientDataHandler({
        patientList: true,
        patientPending:false,
        patientWhoGaveBirth:false
      });
    }
  };
 
  const search = (e)=>{
    setSearchName(e.target.value)
  }
  return (
    <div>
      <div className="patient-wrapper" onClick={() => setStatusActive(false)}>
        <div className="patientsFilter" onBlur={() => setStatusActive(false)}>
          <div
            className="status-select"
            onClick={(e) => statusOptionIsActive(e)}
          >
            <div className="status-select__header">
              {status}
              <img src={statusArrow} alt="" />
            </div>
            <div className="status-select__wrapper">
              {statusActive &&
                listStatus.map((option, index) => (
                  <div
                   key={option.id}
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
              value={searchName}
              onChange={(e) => search(e) }
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
          <div className= {patientList.length !==0  ? 'patient-table__data ' :'patient-table__data__loading'}>
            {patientDataHandler.patientList &&
              patientList.map((patient, index) => {
                const options = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                };
                const registerDate = new Date(patient.createdAt).toLocaleString(
                  "ru",
                  options
                );
                const today = new Date().toLocaleString("ru", options);
                const dateOfBirth = new Date(patient.createdAt);
                dateOfBirth.setMonth(dateOfBirth.getMonth() + 9);
                dateOfBirth.setDate(0);

                return (
                  <div className="patient-table__data_item">
                    <div>{index + 1}</div>
                    <Link to={'/patientProfile/' + patient.id}>
                      <div className="patient-table__data_item__name">
                        {patient.firstName} {patient.lastName}
                      </div>
                    </Link>
                    <div>{today < dateOfBirth ? "Родившие" : "В ожидании"}</div>
                    <div> {registerDate} </div>
                    <div>{dateOfBirth.toLocaleString("ru", options)}</div>
                  </div>
                );
              })}
            {patientDataHandler.patientPending &&
              pendingPatientList.map((patient, index) => {
                const options = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                };
                const registerDate = new Date(patient.createdAt).toLocaleString(
                  "ru",
                  options
                );
                const today = new Date().toLocaleString("ru", options);
                const dateOfBirth = new Date(patient.createdAt);
                dateOfBirth.setMonth(dateOfBirth.getMonth() + 9);
                dateOfBirth.setDate(0);

                return (
                  <div className="patient-table__data_item">
                    <div>{index + 1}</div>
                    <Link to="/patientProfile">
                      <div className="patient-table__data_item__name">
                        {patient.firstName} {patient.lastName}
                      </div>
                    </Link>
                    <div>{today < dateOfBirth ? "Родившие" : "В ожидании"}</div>
                    <div> {registerDate} </div>
                    <div>{dateOfBirth.toLocaleString("ru", options)}</div>
                  </div>
                );
              })}
            {patientDataHandler.patientWhoGaveBirth &&
                whoGaveBirthPatientList.map((patient, index) => {
                const options = {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                };
                const registerDate = new Date(patient.createdAt).toLocaleString(
                  "ru",
                  options
                );
                const today = new Date().toLocaleString("ru", options);
                const dateOfBirth = new Date(patient.createdAt);
                dateOfBirth.setMonth(dateOfBirth.getMonth() + 9);
                dateOfBirth.setDate(0);

                return (
                  <div className="patient-table__data_item">
                    <div>{index + 1}</div>
                    <Link to="/patientProfile">
                      <div className="patient-table__data_item__name">
                        {patient.firstName} {patient.lastName}
                      </div>
                    </Link>
                    <div>{today < dateOfBirth ? "Родившие" : "В ожидании"}</div>
                    <div> {registerDate} </div>
                    <div>{dateOfBirth.toLocaleString("ru", options)}</div>
                  </div>
                );
              })}
              {
                isLoading && <Spinner  />
              }
          </div>
        </div>
      </div>
    </div>
  );
}
