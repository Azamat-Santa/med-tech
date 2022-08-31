import React from "react";
import { navigateList } from "./navigateList";
import "./employees.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteDoctorId, getDoctorsAll, postNewDoctor } from "../../api/admin/doctors";
import EmployeesTable from "../../AdminComponent/EmployeesTable/EmployeesTable";
import { getAdmins } from "../../api/admin/authAdmin";
import { deleteManagerId, getManagerAll } from "../../api/admin/adminManager";
import Spinner from "../../component/Spin/Spinner";
import { postNewManager } from './../../api/admin/adminManager';
import  jwt_decode  from 'jwt-decode';
import download from '../../img/download.png'
import { getExcel } from "../../api/admin/excel";


export default function Employees() {
  const [activeNavigateItem, setActiveNavigateItem] = useState(0);
  const [employeeId, setEmployeeId] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [employeesHandler, setEmployeesHandler] = useState({
    doctor: true,
    admin: false,
    manager: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    getDoctorsAll(dispatch);
    getAdmins(dispatch);
    getManagerAll(dispatch);
  }, []);

  const doctors = useSelector((state) => state.adminDoctor.doctorAll.data);
//   const adminList = useSelector((state) => state.admin.getAllAdmin.data);
  const managerList = useSelector(
    (state) => state.adminManager.managerAll.data
  );
  const doctorsLoading = useSelector(
    (state) => state.adminDoctor.doctorAll.isLoading
  );
//   const adminListLoading = useSelector((state) => state.admin.getAllAdmin.isLoading);
  const managerListLoading = useSelector(
    (state) => state.adminManager.managerAll.isLoading
  );
  const deleteDoctorLoading = useSelector(
    (state) => state.adminDoctor.deleteDoctor.isLoading
  );
  const deleteManagerLoading = useSelector(
    (state) => state.adminManager.deleteManager.isLoading
  );
  const handlerActiveEmployees = (index, role) => {
    setActiveNavigateItem(index);
    role === "Врачи" &&
      setEmployeesHandler({
        doctor: true,
        admin: false,
        manager: false,
      });
    role === "Суперадмин" &&
      setEmployeesHandler({
        doctor: false,
        admin: true,
        manager: false,
      });
    role === "Менеджер" &&
      setEmployeesHandler({
        doctor: false,
        admin: false,
        manager: true,
      });
  };

  const showModal = ()=> setDeleteModal(true)
  const closeModal = ()=> setDeleteModal(false)
  const eventStop = (e)=> e.stopPropagation()
  const deleteEmployee  = async () => {
    setDeleteModal(false)
    employeesHandler.doctor && await deleteDoctorId(dispatch, employeeId);
    employeesHandler.manager && await deleteManagerId(dispatch, employeeId)
    employeesHandler.doctor && await getDoctorsAll(dispatch)
    employeesHandler.manager && await getManagerAll(dispatch)
  }

  
  const deconde =  jwt_decode(localStorage.getItem('tockenAcs'))

  const getExcelDataBase =(dispatch)=>{
    getExcel(dispatch)
  }
  return (
    <div>
      <div className="patient-wrapper">
        <div
          className={
            deleteModal
              ? "delete-modal__wrapper"
              : "delete-modal__wrapper__none"
          }
          onClick={closeModal}
        >
          <div 
          className="delete-modal__content"
          onClick={eventStop}
          >
            Уверены, что хотите <br /> архивировать сотрудника?
            <div className="delete-modal__buttons">
              <button 
              className="button__delete_no"

              >Нет</button>
              <button 
              className="button__delete_yes"
              onClick={deleteEmployee}
              >Да</button>
            </div>
          </div>
        </div>

        <div className="employees-navigate">
          <p>Сотрудники</p>
          <div className="employees-navigate__wrapper">
            {navigateList.map((role, idx) => (
              <div
                key={role.role}
                className={
                  activeNavigateItem === idx
                    ? "employees-navigate__item employees-navigate__item_active"
                    : "employees-navigate__item"
                }
                onClick={() => handlerActiveEmployees(idx, role.role)}
              >
                {role.role}
              </div>
            ))}
            <div className="download-button"
              onClick={getExcelDataBase}
            >
            <img src={download} alt="" /> Скачать БД
          </div>
          </div>
        </div>
        
        {  doctorsLoading || deleteDoctorLoading && (
          <div className="checkList-wrapper__loading">
            <Spinner size="44px" />
          </div>
        )}
        { managerListLoading ||  deleteManagerLoading && (
          <div className="checkList-wrapper__loading">
            <Spinner size="44px" />
          </div>
        )}


        {employeesHandler.doctor && (
          <EmployeesTable 
            dataList={doctors} 
            loading={doctorsLoading} 
            showModal={showModal}
            title='Врачи'
            deleteEmployee = {deleteEmployee}
            setEmployeeId={setEmployeeId}
            addEmployee = {postNewDoctor}
          />
        )}
        {/* {employeesHandler.admin && (
          <EmployeesTable 
          dataList={adminList} 
          loading={adminListLoading} 
          showModal={showModal}
          title='Админы'
          deleteEmployee = {deleteEmployee}
          setEmployeeId={setEmployeeId}
          />
        )} */}
        {employeesHandler.manager && (
          <EmployeesTable 
             dataList={managerList} 
             loading={managerListLoading} 
             showModal={showModal}
             title='Менеджеры'
             deleteEmployee = {deleteEmployee}
             setEmployeeId={setEmployeeId}
             addEmployee={postNewManager}
          />
        )}
      </div>
    </div>
  );
}
