import React, { useEffect, useState } from "react";
import "./home.css";
import handlerToday from "../../img/handlerToday.png";
import { calendarList } from "./calanderList";
import { dayTimeList } from "./dayTimeList";
import Calendar from "../../component/Calendar/Calendar";
import moment from "moment";
import CalendarModal from "../../component/CalendarModal/CalendarModal";
import edit from "../../img/edit.png";
import { getAppointmentId } from "../../api/appointment/appointment";
import { useDispatch, useSelector } from 'react-redux';
import { getAppointmentAll } from './../../api/appointment/appointment';
import { getPatient } from "../../api/patient/patient";
export default function Home() {
  const [today, setToday] = useState(moment());
  const appoinment = useSelector(state=>state.appoinment.appoinment)
  const [entries, setEntries] = useState([]);
  const [show, setShow] = useState({
    modal: false,
    pacient: {},
  });
  const [calendarNavigate, setCalendarNavigate] = useState({
    day: false,
    month: true,
  });
  const [dayCalendar, setTodayCalendar] = useState([])

  useEffect(() => {
     const  copyAppitntment = async () =>{
      const copy = await appoinment.filter(entrie => entrie.startTime >= today.format("X") 
      && entrie.startTime <= today.clone().endOf("day").format("X"))
      setTodayCalendar(copy)
     }
     copyAppitntment()
    
  }, [])
  
  const [toggleNavigate, setToggleNavigate] = useState(0);
  const dispatch =useDispatch()
  useEffect(() => {
    getAppointmentAll(dispatch)
    getPatient(dispatch)
  }, [])
  
  
  const startDay = today.clone().startOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const daysMap = [...Array(42)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");
  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));
  const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  const showModal = (copyEntrie) => {
    setShow({
      modal: true,
      pacient: copyEntrie,
    });
  };


  const toggleNavigateDays = (index, handlerCalendar) => {
    setToggleNavigate(index);
    if (handlerCalendar === "День") {
      setCalendarNavigate({
        day: true,
        month: false,
      });
    }
    if (handlerCalendar === "Месяц") {
      setCalendarNavigate({
        day: false,
        month: true,
      });
    }
  };
 

  return (
    <div className="home">
      <CalendarModal show={show} setShow={setShow} />
      <div className="calendar">
        <div className="calendar__wrapper">
        <div className="calendar-navigate_right-wrapper">
                {calendarList.map((toggle, index) => (
                  <div
                    className={
                      toggleNavigate === index
                        ? `${toggle.className} calendar-navigate-right_active `
                        : toggle.className
                    }
                    onClick={() => toggleNavigateDays(index, toggle.text)}
                    key={toggle.text}
                  >
                    {toggle.text}
                  </div>
                ))}
              </div>
          <div className="calendar-navigate">
            <div className="calendar-navigate-left">
              <div>
                <img 
                src={handlerToday} 
                alt="" 
                className="navigate__img_left" 
                  onClick={prevHandler}
                />
                {calendarNavigate.month ? today.format('MMMM'):'Сегодня'}
                <img
                  src={handlerToday}
                  alt=""
                  className="navigate__img_right"
                  onClick={nextHandler}

                />
              </div>
            </div>
            <div className="calendar-navigate_middle">
            {`${today.format('MMMM')} ${today.format('DD')} ${today.format('YYYY')} ${today.format('dddd')}`}
            </div>
            <div className="calendar-navigate_right" onClick={() => showModal()}>+ Добавить запись</div>
          </div>
          {calendarNavigate.day ? (
            <div className="calendar-day">
              {/* {appoinment && appoinment.length !== 0 && appoinment.filter(entrie => entrie.startTime >= today.format("X") 
               && entrie.startTime <= today.clone().endOf("day").format("X")).map((patient, index) => (
                <div
                  className={
                    patient.type === "свободно"
                      ? "calendar-day__item calendar-day__item_free"
                      : patient.type === "осмотр"
                      ? "calendar-day__item calendar-day__item_inspection"
                      : patient.type === "занят"
                      ? "calendar-day__item calendar-day__item_busy"
                      : "calendar-day__item calendar-day__item_meeting"
                  }
                  key={index}
                >
                  <div className="calendar-day__item-time">{patient.time}</div>
                  <div className="calendar-day__item_right">
                    <div> {patient.firstName}</div>
                    {patient.type === "осмотр" ? (
                      <div
                        className="calendar-day__item_edit"
                      >
                        <img src={edit} alt="" />
                        Редактировать
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))} */}
            </div>
          ) : calendarNavigate.month ? (
            <Calendar
              daysMap={daysMap}
              isCurrentDay={isCurrentDay}
              appoinment={appoinment}
              isSelectedMonth={isSelectedMonth}
              moment={moment}
              today={today}
            />
          ) : null}
          <div className="calendar__footer">
            <div className="calendar__footer__left">
            Записи
            </div>
            <div className="calendar__footer__middle">
            Собрание
            </div>
            <div className="calendar__footer__right">
            Занят/Выходной день
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
