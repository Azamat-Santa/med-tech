import React from "react";
import "./calendar.css";
import "moment/locale/ru";
export default function Calendar({daysMap, isCurrentDay, entries, isSelectedMonth, moment}) {
  localStorage.setItem('isTocken', false)
  return (
    <div>
      <div className="calendar-month">
        {/* <div className="calendar-month_header">
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
        </div> */}
        <div className="calendar-month__day_wrapper">
          {[...Array(7)].map((_, i) => {
            return (
              <div className="calendar-month__days-week" key={i}>
                {moment()
                  .day(i + 1)
                  .locale("ru")
                  .format("ddd")}
              </div>
            );
          })}
        </div>

        <div className="calendar-month_grid">
          {daysMap.map((day) => {
            return (
              <>
                {isCurrentDay(day) ? (
                  <div className="calendar-month__day calendar-month__current-day">
                    {day.format("D")}
                    {entries
                      .filter(
                        (event) =>
                          event.date >= day.format("X") &&
                          event.date <= day.clone().endOf("day").format("X")
                      )
                      .map((event,index) => (
                        <div className="calendar-month__isEntrie" key={index}>
                          {event.title}
                        </div>
                      ))}
                  </div>
                ) : (
                  <div
                    className={
                      isSelectedMonth(day)
                        ? "calendar-month__day "
                        : "calendar-month__notCurent-month"
                    }
                    // onClick={() => {
                    //     const copyEntries= entries.filter(entrie => entrie.date >= day.format("X") && entrie.date <= day.clone().endOf("day").format("X"))
                    //     return showModal(day, copyEntries)
                    //   }}
                  >
                    {day.format("D")}
                    <div
                      className={
                        entries.filter(
                          (entrie) =>
                            entrie.date >= day.format("X") &&
                            entrie.date <= day.clone().endOf("day").format("X")
                        ).length !== 0
                          ? "calendar-month__isEntrie"
                          : ""
                      }
                      // onClick={() => {
                      //   const copyEntries= entries.filter(entrie => entrie.date >= day.format("X") && entrie.date <= day.clone().endOf("day").format("X"))
                      //   return showModal(day, copyEntries)
                      // }}
                    ></div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
