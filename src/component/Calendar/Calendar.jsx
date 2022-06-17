import React from 'react'
import "./calendar.css";
import moment from "moment";
import "moment/locale/ru";
import { useEffect, useState } from "react";
import monthHandler from "../../img/monthLeft.png";
import CalendarModal from "../../component/CalendarModal/CalendarModal";
export default function Calendar() {
    const [today, setToday] = useState(moment());
    const [entries, setEntries] = useState([]);
    const [show, setShow] = useState({
      modal:false,
      pacient:[]
    });
    const startDay = today.clone().startOf("month").startOf("week");
    const day = startDay.clone().subtract(1, "day");
    const url = "http://localhost:3000";
    const startDayQuery = startDay.clone().format("X");
    const endDayQuery = startDay.clone().add(42, "days").format("X");
   
    useEffect(() => {
  
      fetch(`${url}/entries?date_gte=${startDayQuery}&date_lte=${endDayQuery}`)
        .then((res) => res.json())
        .then((res) => {
          setEntries(res);
          // console.log(res);
        });
    }, [today]);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const daysMap = [...Array(42)].map(() => day.add(1, "day").clone());
    const isCurrentDay = (day) => moment().isSame(day, "day");
    const isSelectedMonth = (day) => today.isSame(day, "month");
    const prevHandler = () =>setToday((prev) => prev.clone().subtract(1, "month"));
    const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));
    const capitalizeFirstLetter = (string) =>string.charAt(0).toUpperCase() + string.slice(1);
   
    const showModal = ( day , copyEntrie) => {
        setShow({
          modal:true,
          pacient: copyEntrie
        })
    };
  return (
    <div >
         <CalendarModal day={day} show={show} setShow={setShow}/>
      <div className="calendar-month">
        <div className="calendar-month_header">
          <img src={monthHandler} alt="" onClick={prevHandler} />
          <div className="calendar-month__month">
            {capitalizeFirstLetter(today.format("MMMM"))} {today.format("YYYY")}
          </div>
          <img
            src={monthHandler}
            alt=""
            className="monthHandler"
            onClick={nextHandler}
          />
        </div>

        <div className="calendar-month_grid">
          {[...Array(7)].map((_, i) => {
            return (
              <div className="calendar-month__day" key={i}>
                {moment()
                  .day(i + 1)
                  .locale("ru")
                  .format("ddd")}
              </div>
            );
          })}
          {daysMap.map((day) => {
            return (
              <>
                {isCurrentDay(day) ? (
                  <div className="calendar-month__day">
                    <div className="calendar-month__current-day">
                      {day.format("D")}
                    </div>
                    {entries
                      .filter(
                        (event) =>
                          event.date >= day.format("X") &&
                          event.date <= day.clone().endOf("day").format("X")
                      )
                      .map((event) => (
                        <div className="calendar-month__isEntrie">{event.title}</div>
                      ))}
                  </div>
                ) : (

                  <div
                    className={
                      isSelectedMonth(day)
                        ? "calendar-month__day "
                        : "calendar-month__notCurent-month"
                    }
                    onClick={() => { 
                        const copyEntries= entries.filter(entrie => entrie.date >= day.format("X") && entrie.date <= day.clone().endOf("day").format("X"))
                        return showModal(day, copyEntries)
                      }}
                  >
                    {day.format("D")}
                    <div
                      className={
                        entries.filter(entrie => entrie.date >= day.format("X") && entrie.date <= day.clone().endOf("day").format("X")).length !==0 
                          ? "calendar-month__isEntrie"
                          : ""
                      }
                      onClick={() => { 
                        const copyEntries= entries.filter(entrie => entrie.date >= day.format("X") && entrie.date <= day.clone().endOf("day").format("X"))
                        return showModal(day, copyEntries)
                      }}
                    ></div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  )
}
