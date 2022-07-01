import React, { useEffect, useState } from "react";
import "./home.css";
import handlerToday from "../../img/handlerToday.png";
import { calendarList } from "./calanderList";
import { dayTimeList } from "./dayTimeList";
import Calendar from "../../component/Calendar/Calendar";
import moment from 'moment';
import CalendarModal from "../../component/CalendarModal/CalendarModal";
export default function Home() {
  const [today, setToday] = useState(moment());
  const [entries, setEntries] = useState([]);
  const [show, setShow] = useState({
    modal: false,
    pacient: [],
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
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const showModal = (day, copyEntrie) => {
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
  const enrieOne = 3;
  const enrieTwo = 5;

  return (
    <div className="home">
      <CalendarModal day={day} show={show} setShow={setShow} />

      <div className="calendar">
        <div className="calendar__wrapper">
          <div className="calendar-navigate">
            <div className="calendar-navigate-left">
              <img src={handlerToday} alt="" className="navigate__img_left" />
              Сегодня
              <img src={handlerToday} alt="" className="navigate__img_right" />
            </div>
            <div className="calendar-navigate_middle">
              Июнь 18, 2022 Пятница
            </div>
            <div className="calendar-navigate_right">
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
            </div>
          </div>
          {calendarNavigate.day ? (
            <div className="calendar-day">
              {dayTimeList.map((time, index) => (
                <div className="calendar-day__item" key={index}>
                  <div className="calendar-day__item-time">{time}</div>
                  {enrieOne === index || enrieTwo === index ? (
                    <div className="calendar-day__item-entrie">
                      Гульмира Атаханова (Неделя 35)
                    </div>
                  ) : (
                    <div className="calendar-day__item-name"></div>
                  )}
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
        </div>
      </div>
    </div>
  );
}
