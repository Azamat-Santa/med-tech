import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAppointmentAll } from "./../../api/appointment/appointment";
import "./shedule.css";
import calendarImg from "../../img/calendarImg.png";
import moment from "moment";
import Spinner from './../../component/Spin/Spinner';
import { sheduleAppoinment1, sheduleAppoinment2, sheduleAppoinment3, sheduleAppoinment4, sheduleAppoinment5, sheduleAppoinment6 } from "./scheduleData";

export default function Schedule() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getAppointmentAll(dispatch);
  // }, []);

  // const appointment = useSelector((state) => state.appoinment.appoinment);

  const sheduleDoctors = [
    {
      name: "Азамат Мирланов",
      post: "Врач-акушер",
      img: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    },
    {
      name: "Гульмира Нагызбаева",
      post: "Семейный врач",
      img: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    },
    {
      name: "Миргуль Токтогазиева",
      post: "Врач-акушер",
      img: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    },
    {
      name: "Назгул Сегизбаева",
      post: "Семейный врач",
      img: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    },
    {
      name: "Алмадай Буркутова",
      post: "Врач-акушер",
      img: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    },
    {
      name: "Айдай Бурулсунова",
      post: "Семейный врач",
      img: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
    },
  ];

  
  const date = moment().format("LL");

  return (
    <div>
      

      <div className="table__doctors__wrapper">
      <div className="table__doctors__navigate">
        <div className="table__doctors__navigate__left">{date}</div>
        <div className="table__doctors__navigate__middle">
          <input 
          type="text" 
          className="search-patient"
          placeholder="Введите ФИО пациента"
          />
        </div>
        <div className="table__doctors__navigate__right">
          <img src={calendarImg} alt="" />
          Календарь
        </div>
      </div>
        <div className="table__doctors__line__wrapper">
          <div className="" style={{ width: "4%" }}>
            {" "}
          </div>
          <div className="table__doctors__line">
            {sheduleDoctors.map((doctor) => (
              <div className="table__doctors__item">
                <img src={doctor.img} alt="" />
                <div>{doctor.name}</div>
                <div>{doctor.post}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="table__doctors__line__wrapper">
          <div className="table__doctors__line__wrapper__time">09:00</div>
          <div className="table__doctors__line table__doctors__line__patient">
            {sheduleAppoinment1.map((doctor) => (
              <div
                className={
                  !doctor.name
                    ? "table__doctors__item table__doctors__item__patient table__doctors__item__none"
                    : "table__doctors__item table__doctors__item__patient"
                }
              >
                <div className="table__doctors__item__patient__time">
                  {doctor.time}
                </div>
                <div className="table__doctors__item__patient__name">
                  {doctor.name}
                </div>
                <div className="table__doctors__item__patient__phone">
                  {doctor.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="table__doctors__line__wrapper">
          <div className="table__doctors__line__wrapper__time">10:00</div>
          <div className="table__doctors__line table__doctors__line__patient">
            {sheduleAppoinment2.map((doctor) => (
              <div
                className={
                  !doctor.name
                    ? "table__doctors__item table__doctors__item__patient table__doctors__item__none"
                    : "table__doctors__item table__doctors__item__patient"
                }
              >
                <div className="table__doctors__item__patient__time">
                  {doctor.time}
                </div>
                <div className="table__doctors__item__patient__name">
                  {doctor.name}
                </div>
                <div className="table__doctors__item__patient__phone">
                  {doctor.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="table__doctors__line__wrapper">
          <div className="table__doctors__line__wrapper__time">11:00</div>
          <div className="table__doctors__line table__doctors__line__patient">
            {sheduleAppoinment3.map((doctor) => (
              <div
                className={
                  !doctor.name
                    ? "table__doctors__item table__doctors__item__patient table__doctors__item__none"
                    : "table__doctors__item table__doctors__item__patient"
                }
              >
                <div className="table__doctors__item__patient__time">
                  {doctor.time}
                </div>
                <div className="table__doctors__item__patient__name">
                  {doctor.name}
                </div>
                <div className="table__doctors__item__patient__phone">
                  {doctor.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="table__doctors__line__wrapper">
          <div className="table__doctors__line__wrapper__time">13:00</div>
          <div className="table__doctors__line table__doctors__line__patient">
            {sheduleAppoinment4.map((doctor) => (
              <div
                className={
                  !doctor.name
                    ? "table__doctors__item table__doctors__item__patient table__doctors__item__none"
                    : "table__doctors__item table__doctors__item__patient"
                }
              >
                <div className="table__doctors__item__patient__time">
                  {doctor.time}
                </div>
                <div className="table__doctors__item__patient__name">
                  {doctor.name}
                </div>
                <div className="table__doctors__item__patient__phone">
                  {doctor.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="table__doctors__line__wrapper">
          <div className="table__doctors__line__wrapper__time">14:00</div>
          <div className="table__doctors__line table__doctors__line__patient">
            {sheduleAppoinment1.map((doctor) => (
              <div
                className={
                  !doctor.name
                    ? "table__doctors__item table__doctors__item__patient table__doctors__item__none"
                    : "table__doctors__item table__doctors__item__patient"
                }
              >
                <div className="table__doctors__item__patient__time">
                  {doctor.time}
                </div>
                <div className="table__doctors__item__patient__name">
                  {doctor.name}
                </div>
                <div className="table__doctors__item__patient__phone">
                  {doctor.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="table__doctors__line__wrapper">
          <div className="table__doctors__line__wrapper__time">15:00</div>
          <div className="table__doctors__line table__doctors__line__patient">
            {sheduleAppoinment5.map((doctor) => (
              <div
                className={
                  !doctor.name
                    ? "table__doctors__item table__doctors__item__patient table__doctors__item__none"
                    : "table__doctors__item table__doctors__item__patient"
                }
              >
                <div className="table__doctors__item__patient__time">
                  {doctor.time}
                </div>
                <div className="table__doctors__item__patient__name">
                  {doctor.name}
                </div>
                <div className="table__doctors__item__patient__phone">
                  {doctor.phone}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="table__doctors__line__wrapper">
          <div className="table__doctors__line__wrapper__time">16:00</div>
          <div className="table__doctors__line table__doctors__line__patient">
            {sheduleAppoinment6.map((doctor) => (
              <div
                className={
                  !doctor.name
                    ? "table__doctors__item table__doctors__item__patient table__doctors__item__none"
                    : "table__doctors__item table__doctors__item__patient"
                }
              >
                <div className="table__doctors__item__patient__time">
                  {doctor.time}
                </div>
                <div className="table__doctors__item__patient__name">
                  {doctor.name}
                </div>
                <div className="table__doctors__item__patient__phone">
                  {doctor.phone}
                </div>
              </div>
            ))}
          </div>
          
        </div>
        <div className="table__doctors__btn__wrapper">
        <div className="med-file__submit">
          <button type="submit">
            {false ? <Spinner color="white" /> : "Добавить"}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
