import React, { useEffect, useState } from "react";
import "./patientProfile.css";
import download from "../../img/download.png";
import avatar from "../../img/avatarPatient.png";
import PatientProfileTable from "./../../component/PtientProfileTable/PatientProfileTable";
import AuthButton from "./../../component/AuthButton/AuthButton";
import { checkList } from "../../component/PtientProfileTable/checklList";
import MedFile from "../../component/MedFile/MedFile";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPatientId } from "../../api/patient/patient";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCheckListId } from "../../api/checkList/checkList";
import { postCheckList } from './../../api/checkList/checkList';
export default function PatientProfile() {
  const [isChecked, setChecked] = React.useState(false);
  const [activeMonth, setActiveMonth] = useState(0);
  const [checkListMonth, setCheckListMonth] = useState(1);
  const [checkMedFileActive, setCheckMedFileActive] = useState({
    medFile: true,
    checkList: false,
  });
  
const dispatch = useDispatch()

  const patientId = useParams().patientId;
 
  useEffect(() => {
    getPatientId( dispatch, patientId)
  }, [])
  useEffect(() => {
    getCheckListId(dispatch, checkListMonth)
  }, [checkListMonth])

  const patientProfileDate = useSelector(state=>state.patient.patientId.data)
  console.log(patientId);
  console.log(patientProfileDate);
  useEffect(() => {
    postCheckList(dispatch)
  }, [])
  useEffect(() => {
    getCheckListId(dispatch)
  }, [])
  
  
  const toggleCheck = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked || !isChecked);
  };
  const monthList = [
    "1 месяц",
    "2 месяц",
    "3 месяц",
    "4 месяц",
    "5 месяц",
    "6 месяц",
    "7 месяц",
    "8 месяц",
    "9 месяц",
  ];
  const handleCheckMed = (value) => {
    if(value === 'check')setCheckMedFileActive({
       medFile:false,
       checkList:true
     })
     if(value === 'med')setCheckMedFileActive({
      medFile:true,
      checkList:false
     })
  }
  const agePatient =  parseInt(new Date().getFullYear(),10) - parseInt(patientProfileDate.birthdayDate?.substring(0 , 4),10)

  // console.log(checkList);
  return (
    <div className="patient-profile">
      <div className="patient-profile__wrapper">
        <div className="patient-profile__left">
          <div className="download-button">
            <img src={download} alt="" /> Скачать
          </div>
          <div className="patient-profile__date">
            <div className="patient-profile__avatar">
              <div className="patient-profile__avatar__img">
                <img src={avatar} alt="" />
              </div>
              <div className="patient-profile__avatar__name">
              {patientProfileDate.firstName}  {patientProfileDate.lastName}
              </div>
            </div>
            {/* <div className="patient-profile__date__inn">
              <h5>ИИН:</h5> 8956686045860
            </div> */}
            <div className="patient-profile__date__birthday">
              <div>
                <h5>ДАТА РОЖДЕНИЯ:</h5>
                <div>{patientProfileDate.birthdayDate}</div>
              </div>
              <div>
                <h5>ВОЗРАСТ:</h5>
                <div>{agePatient} лет</div>
              </div>
            </div>
            {/* <div className="patient-profile__date__item">
              <h5>МЕСТО ЖИТЕЛЬСТВО:</h5>
              <p>г.Бишкек</p>
            </div> */}
            <div className="patient-profile__date__item">
              <h5>ТЕЛЕФОН:</h5>
              <p>{patientProfileDate.phone}</p>
            </div>
            <div className="patient-profile__date__item">
              <h5>БЕРЕМЕННОСТЬ:</h5>
              <p>{patientProfileDate.weekOfPregnancy}</p>
            </div>
            <div 
            className={checkMedFileActive.medFile? 'patient-profile__date__button patient-profile__date__button__active': 'patient-profile__date__button'}
            onClick={()=>handleCheckMed('med')}
            >Мед. карта</div>
            <div 
            className={checkMedFileActive.checkList? 'patient-profile__date__button patient-profile__date__button__active': 'patient-profile__date__button'}
            onClick={()=>handleCheckMed('check')}

            >
              Чек лист
            </div>
          </div>
          <div className="patient-profile__months">
            {monthList.map((month, index) => (
              <div
                key={month}
                className={
                  index === activeMonth
                    ? "patient-profile__date__button patient-profile__months__button patient-profile__months__button_active"
                    : "patient-profile__date__button patient-profile__months__button"
                }
                onClick={() => setActiveMonth(index)}
              >
                {month}
              </div>
            ))}
          </div>
        </div>

        {checkMedFileActive.checkList && (
          <div className="patient-profile__right">
            <PatientProfileTable data={checkList.complaints} title="Жалобы" />
            <PatientProfileTable
              data={checkList.fetus}
              title="Плод"
              text="Беспокоит бессонница"
            />
            <PatientProfileTable data={checkList.diagnosis} title="Диагноз" />
            <PatientProfileTable data={checkList.treatment} title="Лечение" />
            <PatientProfileTable
              data={checkList.consulting}
              title="Консультирование"
            />

            <div className="patient-profile__right__item">
              <div className="patient-profile__right__item__header">
                Рекомендации
              </div>
              <div className="patient-profile__right__item__rec">
                У вас уже начался таксикоз? А настроение часто меняется? На этом
                этапе мамочки часто испытывают тошноту и перемены настроения.
                Питайтесь часто, но маленькими порциями, и больше отдыхайте.
              </div>
            </div>
            <div className="patient-profile__right__btn__wrapper">
              <div className="patient-profile__right__btn">
                <AuthButton text="Сохранить" />
              </div>
            </div>
          </div>
        )}
        {
          checkMedFileActive.medFile && <MedFile />
        }
      </div>
    </div>
  );
}
