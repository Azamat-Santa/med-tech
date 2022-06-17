import React, { useState } from "react";
import "./home.css";
import handlerToday from "../../img/handlerToday.png";
import { calendarList } from "./calanderList";
import { dayTimeList } from "./dayTimeList";
import Calendar from "react-calendar";
export default function Home() {
  const [calendarNavigate, setCalendarNavigate] = useState({
    day: true,
    week: false,
    month: false,
  });
  const [toggleNavigate, setToggleNavigate] = useState(0);
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
      <div className="calendar">
        <div className="calendar__wrapper">
          <div className="calendar-navigate">
            <div className="calendar-navigate-left">
              <img src={handlerToday} alt="" className="navigate__img_left" />
              Сегодня
              <img src={handlerToday} alt="" className="navigate__img_right" />
            </div>
            <div className="calendar-navigate_middle">
              Июнь 17, 2022 Пятница
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
                <div className="calendar-day__item">
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
            <Calendar />
          ) : null}
        </div>
      </div>
    </div>
  );
}
