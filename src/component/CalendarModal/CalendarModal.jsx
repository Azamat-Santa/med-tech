import React, { useState } from "react";
import "./calendarModal.css";
import Input from "./../Input/Input";
import statusArrow from "../../img/Polygon 1.png";
import closeModal from "../../img/closeModal.png";
import AuthButton from "../AuthButton/AuthButton";
export default function CalendarModal({ show = {}, setShow }) {
  const [selectRecord, setSelectRecord] = useState({
    recordName: "Выберите тип встречи",
    activeRecord: 0,
  });
  const [recordActive, setRecordActive] = useState(false);
  const recordList = ["Осмотр", "Совещание", "Другое", "Выходной"];

  const handlerRecord = (option, idx) => {
    setSelectRecord({
      recordName: option,
      activeRecord: idx,
    });
  };
  const recordOptionIsActive = (e) => {
    e.stopPropagation();
    setRecordActive(!recordActive);
  };
  // const statusOptionIsActive = (e) => {
  //   e.stopPropagation()
  //   setStatusActive(!statusActive);
  // };
  //   const convertTime = function(timestamp, separator) {
  //     const pad = function(input) {return input < 10 ? "0" + input : input;};
  //     const date = timestamp ? new Date(timestamp * 1000) : new Date();
  //     return [
  //         pad(date.getHours()),
  //         pad(date.getMinutes()),

  //     ].join(typeof separator !== 'undefined' ?  separator : ':' );
  // }

  return (
    <div
      className={
        show.modal ? "calendar__modal-wrapper" : "calendar__modal-wrapper_none"
      }
      onClick={() => setShow(false)}
    >
      <div
        className="calendar__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="calendar__modal-content__header">
          <div>Добавить запись </div>
          <img src={closeModal} alt="" onClick={()=>setShow(false)}/>
        </div>
        <div className="calendar__modal-content__form__wrapper">
          <div className="calendar__modal-content__form">
            <div className="calendar__modal-content__form__item">
              <div>ФИО</div>
              <Input
                typeClass={"editUserInput"}
                placeholder="Введите имя пациента"
              />
            </div>

            <div className="calendar__modal-content__form__item">
              <div>Дата</div>
              <div className="calendar__modal-content__form__date">
                <input type="date" />
                <input type="time" />
              </div>
            </div>

            <div className="calendar__modal-content__form__item">
              <div>Описание</div>
              <textarea
                name="description"
                id="1"
                cols="10"
                rows="10"
                placeholder="Дополнительное сообщение"
              ></textarea>
            </div>
            <AuthButton text='Сохранить' />
          </div>
        </div>

        {/* {show?.pacient?.name} */}
      </div>
    </div>
  );
}
