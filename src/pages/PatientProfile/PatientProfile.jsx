import React, { useState } from "react";
import "./patientProfile.css";
import download from "../../img/download.png";
import avatar from "../../img/avatarPatient.png";
import PatientProfileTable from './../../component/PtientProfileTable/PatientProfileTable';
import AuthButton from './../../component/AuthButton/AuthButton';
import { checkList } from "../../component/PtientProfileTable/checklList";
export default function PatientProfile() {
  const [isChecked, setChecked] = React.useState(false);
  const [activeMonth , setActiveMonth] = useState(2)
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
                Акматова Айнагуль Мамазакировна
              </div>
            </div>
            <div className="patient-profile__date__inn">
              <h5>ИИН:</h5> 8956686045860
            </div>
            <div className="patient-profile__date__birthday">
              <div>
                <h5>ДАТА РОЖДЕНИЯ:</h5>
                <div>21. 09. 1995</div>
              </div>
              <div>
                <h5>ВОЗРАСТ:</h5>
                <div>26 лет</div>
              </div>
            </div>
            <div className="patient-profile__date__item">
              <h5>МЕСТО ЖИТЕЛЬСТВО:</h5>
              <p>г.Бишкек</p>
            </div>
            <div className="patient-profile__date__item">
              <h5>ТЕЛЕФОН:</h5>
              <p>0702 000000</p>
            </div>
            <div className="patient-profile__date__item">
              <h5>БЕРЕМЕННОСТЬ:</h5>
              <p>7 беременность, 24 неделя</p>
            </div>
            <div className="patient-profile__date__button">Мед. карта</div>
            <div className="patient-profile__date__button patient-profile__date__button__active">
              Чек лист
            </div>
          </div>
          <div className="patient-profile__months">
            {monthList.map((month, index) => (
              <div
                className={
                  index === activeMonth
                    ? "patient-profile__date__button patient-profile__months__button patient-profile__months__button_active"
                    : "patient-profile__date__button patient-profile__months__button"
                }
                onClick={()=>setActiveMonth(index) }
              >
                {month}
              </div>
            ))}
          </div>
        </div>
        <div className="patient-profile__right">
          <PatientProfileTable
            data={checkList.complaints}
            title="Жалобы"
          />
          <PatientProfileTable
            data={checkList.fetus}
            title="Плод"
            text='Беспокоит бессонница'
          />
          <PatientProfileTable
            data={checkList.diagnosis}
            title="Диагноз"
          />
          <PatientProfileTable
            data={checkList.treatment}
            title="Лечение"
          />
           <PatientProfileTable
            data={checkList.consulting}
            title="Консультирование"
          />

          <div className="patient-profile__right__item">
            <div className="patient-profile__right__item__header">
               Рекомендации
            </div>
            <div className="patient-profile__right__item__rec">
               У вас уже начался таксикоз? А настроение часто меняется? На этом этапе мамочки часто испытывают тошноту и перемены настроения. Питайтесь часто, но маленькими порциями, и больше отдыхайте.
            </div>
          </div>
          <div className="patient-profile__right__btn__wrapper">
          <div className="patient-profile__right__btn">
            <AuthButton text='Сохранить'/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
