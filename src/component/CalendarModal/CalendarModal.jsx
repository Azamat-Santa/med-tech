import React, { useEffect, useState } from "react";
import "./calendarModal.css";
import Input from "./../Input/Input";
import closeModal from "../../img/closeModal.png";
import AuthButton from "../AuthButton/AuthButton";
import handlerToday from "../../img/handlerToday.png";
import calendarImg from "../../img/calendarImg.png";
import { TimePicker } from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { newAppointment } from "../../api/appointment/appointment";
import { getAppointmentAll } from "./../../api/appointment/appointment";
import { useRef } from "react";
import { dateList } from "./dateList";
import clock from "../../img/bx_time.png";
import Spinner from "../Spin/Spinner";
export default function CalendarModal({ show = {}, setShow }) {
  const [today, setToday] = useState(moment());
  const [patientId, setPatientid] = useState(null);
  const [date, setDate] = useState(moment().format("YYYY.MM.DD"));
  const [endTime, setEndTime] = useState("09:00");
  const [startTime, setStartTime] = useState("09:00");
  const [selectDate, setSelectDate] = useState({
    startTime: "09:00",
    endTime: "09:40",
  });

  const [selectDateActive, setselectDateActive] = useState(false);
  const [activePatientList, setActivePatientList] = useState(false);
  const [activeSelectDate, setActiveSelectDate] = useState(0);
  const [miniCalendar, setMiniCalendar] = useState(false);
  const [modalNewAppointment, setModalNewAppointment] = useState(false);
  const [searchName, setSearchName] = useState("");

  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));
  const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));
  const startDay = today.clone().startOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");
  const showMiniCalendar = (e) => {
    e.stopPropagation();
    setMiniCalendar(true);
  };

  const ref = useRef();
  let startTimePost;
  let endTimePost;
  const searchNameOnchange = (e) => {
    setSearchName(e.target.value);
    setActivePatientList(true);
    console.log(searchName);
  };
  // const patientList = useSelector((state) => {
  //   return state.patient.patientAll.data
  //   // if (!searchName) return [];
  //   // return state.patient.patientAll.data.filter((user) => {
  //   //   const firstLastName = user.firstName + " " + user.lastName;
  //   //   return firstLastName.toLowerCase().includes(searchName.toLowerCase());
  //   // });
  // });
  const patientList = useSelector((state) =>state.patient.patientAll.data);

  const newAppointmentLoading = useSelector(
    (state) => state.appoinment.isLoadingPost
  );
  const dispatch = useDispatch();
  const dateEntry = (day) => {
    setMiniCalendar(false);
    setDate(day.format("YYYY.MM.DD"));
    startTimePost = moment(day.format("YYYY-MM-DD") + " " + startTime).format(
      "YYYY-MM-DD HH:mm"
    );
    endTimePost = moment(day.format("YYYY-MM-DD") + " " + endTime).format(
      "YYYY-MM-DD HH:mm"
    );
  };
  const handlerActiveDate = (option, idx) => {
    setSelectDate({
      startTime: option.startTime,
      endTime: option.endTime,
    });
    setActiveSelectDate(idx);
    setselectDateActive(false);
  };
  const patientHandler = (name, lastName, patientId) => {
    console.log(name, lastName, patientId);
    setPatientid(patientId);
    setSearchName(name + " " + lastName);
    setActivePatientList(false);
  };
  const createNewAppoinment = async () => {
    const doctorId = localStorage.getItem("doctorId");
    startTimePost = moment(date + " " + selectDate.startTime).format("X");
    endTimePost = moment(date + " " + selectDate.endTime).format("X");
    await newAppointment(dispatch, {
      patientId: patientId,
      doctorId: doctorId,
      startTime: startTimePost,
      endTime: endTimePost,
      description: "some text",
    });
    setShow({
      modal: false,
    });
    await getAppointmentAll(dispatch);
    setSearchName("");
  };
  const daysMap = [...Array(42)].map(() => day.add(1, "day").clone());

  return (
    <div
      className={
        show.modal
          ? "calendar__modal-wrapper active"
          : "calendar__modal-wrapper"
      }
      onClick={() => setShow(false)}
    >
      <div
        className={
          show.modal
            ? "calendar__modal-content active"
            : "calendar__modal-content"
        }
        onClick={(e) => {
          e.stopPropagation();
          setMiniCalendar(false);
          setselectDateActive(false);
        }}
      >
        <div
          className={miniCalendar ? "mini-calendar" : "mini-calendar__none"}
          onClick={() => setMiniCalendar(false)}
        >
          <div>
            <div className="mini-calendar__navigate">
              <img
                src={handlerToday}
                alt=""
                className="navigate__img_left"
                onClick={prevHandler}
              />
              {today.format("MMMM")}
              <img
                src={handlerToday}
                alt=""
                className="navigate__img_right"
                onClick={nextHandler}
              />
            </div>
          </div>
          <div className="mini-calendar__day_wrapper">
            {[...Array(7)].map((_, i) => {
              return (
                <div className="calendar-month__days-week" key={"mini" + i}>
                  {moment()
                    .day(i + 1)
                    .locale("ru")
                    .format("ddd")}
                </div>
              );
            })}
          </div>
          <div className="mini-calendar_grid">
            {daysMap.map((day, idx) => {
              return (
                <div key={day + idx}>
                  {isCurrentDay(day) ? (
                    <div
                      className="mini-calendar__day mini-calendar__current__day"
                      onClick={() => dateEntry(day)}
                    >
                      {day.format("D")}
                    </div>
                  ) : (
                    <div
                      className={
                        isSelectedMonth(day)
                          ? "mini-calendar__day"
                          : "mini-calendar__day mini-calendar__day__out"
                      }
                      onClick={() => dateEntry(day)}
                    >
                      {day.format("D")}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="calendar__modal-content__header">
          <div>Добавить запись </div>
          <img src={closeModal} alt="" onClick={() => setShow(false)} />
        </div>
        <div className="calendar__modal-content__form__wrapper">
          <div className="calendar__modal-content__form">
            <div className="calendar__modal-content__form__item">
              <div>ФИО</div>
              <div className="calendar__modal-content__search search-patient"
              onClick={()=>setActivePatientList(!activePatientList)}
              >
              Список моих пациентов
                {/* <input
                  type="text"
                  value={searchName}
                  onChange={searchNameOnchange}
                  className="search-patient"
                  placeholder="Ведите имя пациентки"
                  onBlur={()=>setActivePatientList(true)}
                /> */}
                {activePatientList &&
                <div className="calendar__modal-content__search__list">
                 
                    {patientList.map((patient, idx) => (
                      <div
                        className="calendar__modal-content__search__item"
                        onClick={() =>
                          patientHandler(
                            patient.firstName,
                            patient.lastName,
                            patient.id
                          )
                        }
                        key={patient.firstName + idx}
                      >
                        {patient.firstName} {patient.lastName} 
                        
                      </div>
                    ))}
                </div>
              }
              </div>
            </div>
            <div className="calendar__modal-content__form__item">
              <div>Дата</div>
              <div className="calendar__modal-content__form__date">
                <div>
                  <input type="text" value={date} />
                  <img
                    src={calendarImg}
                    alt=""
                    className="calendar__modal__img"
                    onClick={showMiniCalendar}
                  />
                </div>
                <div className="calendar-modal__select__date">
                  <div>
                    <input
                      type="text"
                      value={selectDate.startTime + " - " + selectDate.endTime}
                      
                    />
                    <img
                      ref={ref}
                      src={clock}
                      alt=""
                      className="calendar__modal__img"
                      onClick={(e) => {
                        if (e.target !== ref.current.className) {
                          e.stopPropagation();
                          console.log("kk");
                        }
                        setselectDateActive(!selectDateActive);
                      }}
                    />
                  </div>
                  <div className="status-select__wrapper calendar-modal__wrapper">
                    {selectDateActive &&
                      dateList.map((date, idx) => (
                        <div
                          className={
                            activeSelectDate === idx
                              ? "status-select__item status-select__item_active"
                              : "status-select__item"
                          }
                          onClick={() => handlerActiveDate(date, idx)}
                          key={date.startTime + idx}
                        >
                          {date.startTime} - {date.endTime}
                        </div>
                      ))}
                  </div>
                </div>
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
            <div onClick={createNewAppoinment}>
              <button>
                {newAppointmentLoading ? (
                  <Spinner color="white" />
                ) : (
                  "Сохранить"
                )}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
