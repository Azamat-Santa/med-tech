import React from "react";
import { moment } from "moment";
import './calendarModal.css'
export default function CalendarModal({ show = [], setShow }) {
  console.log(show);
  const convertTime = function(timestamp, separator) {
    const pad = function(input) {return input < 10 ? "0" + input : input;};
    const date = timestamp ? new Date(timestamp * 1000) : new Date();
    return [
        pad(date.getHours()),
        pad(date.getMinutes()),
        
    ].join(typeof separator !== 'undefined' ?  separator : ':' );
}


  return (
    <div
      className={
        show.modal ? "calendar__modal-wrapper" : "calendar__modal-wrapper_none"
      }
      onClick={() => setShow(false)}
    >
      <div className="calendar__modal-content" onClick={(e)=>e.stopPropagation()}>
        {show.pacient !== undefined &&
          show.pacient.map((day) => (
            <>
              <div className="calendar-modal__time">{convertTime(day.date)}</div>
              <div className="calendar-modal__name">{day.name} </div>
            </>
          ))}
        {show.pacient?.length === 0 && <div className="calendar-modal__not-entries">Нет записей</div>}
      </div>
    </div>
  );
}
