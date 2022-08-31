import React, { useState } from "react";
import { Spin } from "antd";
import Spinner from "../../component/Spin/Spinner";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { postNewDoctor } from "../../api/admin/doctors";
import NewManagerFormModal from "./../NewManagerFormModal/NewManagerFormModal";
import NewDoctorModalForm from "../NewDoctorModalForm/NewDoctorModalForm";

export default function EmployeesTable({
  dataList,
  loading,
  showModal,
  title,
  deleteEmployee,
  setEmployeeId,
}) {

  const [newDoctorModal,setNewDoctorModal] = useState(false)
  return (
    <div className="employees-table">
      <NewDoctorModalForm
        moadalForm={newDoctorModal}
        setNewDoctorModal ={setNewDoctorModal}
       />

      <div className="employees-table__title">{title}</div>
      <div className="employees-table__item__wrapper">
        <div className="employees-table__item employees-table__column">
          <div></div>
          <div>ФИО</div>
          <div>Телефон</div>
          <div>Почта</div>
          <div>Расписание</div>
          <div></div>
        </div>

        {loading === false && dataList && dataList.map((doctor, index) => (
          <div className="employees-table__item" key={index}>
            <div>{index + 1}</div>
            <div>
              {doctor.firstName || "-"} {doctor.lastName}
            </div>
            <div>{doctor.phone || "-"}</div>
            <div>{doctor.email}</div>
            <div>Пн-Сб: 09:00-17:00</div>
            <div
              className="employees-table__item__delete"
              onClick={() => {
                showModal();
                setEmployeeId(doctor.id);
              }}
            >
              x
            </div>
          </div>
        ))}
        {loading && (
          <div className="employees-table__loading">
            <Spinner />
          </div>
        )}
      </div>
      <div className="med-file__submit__wrapper">
        <div className="med-file__submit">
          <button onClick={()=>setNewDoctorModal(true)}>
            {false ? <Spinner color="white" /> : "Добавить"}
          </button>
        </div>
      </div>
    </div>
  );
}
