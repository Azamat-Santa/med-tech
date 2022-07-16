import React, { useEffect, useState } from "react";
import "./home.css";
import handlerToday from "../../img/handlerToday.png";
import { calendarList } from "./calanderList";
import { dayTimeList } from "./dayTimeList";
import Calendar from "../../component/Calendar/Calendar";
import moment from "moment";
import CalendarModal from "../../component/CalendarModal/CalendarModal";
import edit from "../../img/edit.png";
export default function Home() {
  const [today, setToday] = useState(moment());
  const [entries, setEntries] = useState([]);
  const [show, setShow] = useState({
    modal: false,
    pacient: {},
  });
  const [calendarNavigate, setCalendarNavigate] = useState({
    day: true,
    week: false,
    month: false,
  });
  const [toggleNavigate, setToggleNavigate] = useState(0);
  useEffect(() => {
    fetch(`${url}/entries?date_gte=${startDayQuery}&date_lte=${endDayQuery}`)
      .then((res) => res.json())
      .then((res) => {
        setEntries(res);
        // console.log(res);
      });
  }, [today]);
  const startDay = today.clone().startOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");
  const url = "http://localhost:3000";
  const startDayQuery = startDay.clone().format("X");
  const endDayQuery = startDay.clone().add(42, "days").format("X");

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
        week: false,
        month: false,
      });
    }
    if (handlerCalendar === "Неделя") {
      setCalendarNavigate({
        day: false,
        week: true,
        month: false,
      });
    }
    if (handlerCalendar === "Месяц") {
      setCalendarNavigate({
        day: false,
        week: false,
        month: true,
      });
    }
  };

  return (
    <div className="home">
      <CalendarModal show={show} setShow={setShow} />

      <div className="calendar">
        <div className="calendar__wrapper">
          <div className="calendar-navigate">
            <div className="calendar-navigate-left">
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
              <div>
                <img src={handlerToday} alt="" className="navigate__img_left" 
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
              {dayTimeList.map((patient, index) => (
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
                    <div> {patient.name}</div>
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
              ))}
            </div>
          ) : calendarNavigate.month ? (
            <Calendar
              daysMap={daysMap}
              isCurrentDay={isCurrentDay}
              entries={entries}
              isSelectedMonth={isSelectedMonth}
              moment={moment}
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
