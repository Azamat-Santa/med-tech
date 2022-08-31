import React, { useState } from "react";
import "./calendar.css";
import "moment/locale/ru";
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Spinner from "../Spin/Spinner";
import { timeConverter } from "../../helpers/timeConverter";
import PatientListModal from "../PatientListModal/PatientListModal";
export default function Calendar({daysMap,today, isCurrentDay, appoinment, isSelectedMonth, moment}) {
  const [appointmentDay , setAppointmentDay] = useState([])
  const [modalPatientList, setModalPatientList] = useState({
    modal:false,
    date:moment()
  })
  const closeModalPatientList =()=>setModalPatientList({
    modal:false,
    date:moment()
  })
  
  return (
    <div>
   <PatientListModal
    modalPatientList={modalPatientList}
    closeModalPatientList={closeModalPatientList}
    appointmentDay={appointmentDay}
   />
      <div className="calendar-month">
        <div className="calendar-month__day_wrapper">
          {[...Array(7)].map((_, i) => {
            return (
              <div className="calendar-month__days-week" key={'month'+i}>
                {moment()
                  .day(i + 1)
                  .locale("ru")
                  .format("ddd")}
              </div>
            );
          })}
        </div>
        <div className={true ? 'calendar-month_grid calendar-month_grid__loading' : "calendar-month_grid"} >
       
          {daysMap.map((day,idx) => {
            return (
              <div key={'day'+idx}>
                {isCurrentDay(day) ? (
                  <div className="calendar-month__day calendar-month__current-day"
                  onClick={() => {
                        const copyEntries= appoinment.filter(entrie => entrie.startTime >= day.format("X") && entrie.startTime <= day.clone().endOf("day").format("X"))
                        setAppointmentDay(copyEntries)
                        setModalPatientList({
                          modal:true,
                          date:day
                        })
                      }}
                      
                  >
                    {day.format("D")}
                    {appoinment
                      .filter(
                        (event) =>
                          event.startTime >= day.format("X") &&
                          event.startTime <= day.clone().endOf("day").format("X")
                      ).length !== 0 &&
                        <div className="calendar-month__isEntrie" >
                        </div>
                      }
                  </div>
                ) : (
                  <div
                    className={
                      isSelectedMonth(day)
                        ? "calendar-month__day "
                        : "calendar-month__notCurent-month"
                    }
                    onClick={() => {
                        const copyEntries= appoinment.filter(entrie => entrie.startTime >= day.format("X") && entrie.startTime <= day.clone().endOf("day").format("X"))
                        setAppointmentDay(copyEntries)
                        setModalPatientList({
                          modal:true,
                          date:day
                        })

                      }}
                  >
                    {day.format("D")}
                    {appoinment
                      .filter(
                        (event) =>
                          event.startTime >= day.format("X") &&
                          event.startTime <= day.clone().endOf("day").format("X")
                      ).length !== 0 &&
                        <div className="calendar-month__isEntrie" >
                        </div>
                      }
                   
                  </div>
                )}
              </div>
            );
          })
          }
        </div>
      </div>
    </div>
  );
}
