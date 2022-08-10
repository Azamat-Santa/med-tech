import "./App.css";
import React, { useEffect } from "react";
import Calendar from "./component/Calendar/Calendar";
import { Navigate, Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Header from "./component/Header/Header";
import CheckList from "./pages/CheckList/CheckList";
import Statistics from "./pages/Statistics/Statistics";
import Patients from "./pages/Patients/Patients";
import CalendarModal from "./component/CalendarModal/CalendarModal";
import PatientProfile from "./pages/PatientProfile/PatientProfile";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthDoctor } from "./api/doctor/AuthDoctor";
import { getPatient } from "./api/patient/patient";
import { Spin } from 'antd';
import  LoadingOutlined  from '@ant-design/icons';

function App() {
  const isAuth = useSelector((state) => state.doctor.isAuth);
  const isLoading = useSelector((state) => state.doctor.isLoading);
  const dispatch = useDispatch();
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 94,
      }}
      
    />
  );
  useEffect(() => {
    if (localStorage.getItem("doctorAccessTocken")) {
      checkAuthDoctor(dispatch);
    }
  }, []);
  if (isLoading) {
    return <div>loading</div>;
  }
 

  return (
    <div className= {isLoading ? "app__loading" : "app" }>
    {
      isAuth ? <div>
          <Header />
          <CalendarModal />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkList" element={<CheckList />} />
            <Route exact path="/statistics" element={<Statistics />} />
            <Route exact path="/patients" element={<Patients />} />
            <Route exact path="/patientProfile/:patientId" element={<PatientProfile />} />
            <Route
              path="*"
              element={<Authorization />}  
            />
          </Routes>
        </div>
        :
        <Routes>
          <Route exact path="/" element={<Authorization />} />
          <Route
            exact
            path="/passwordRecovery"
            element={<PasswordRecovery />}
          />
          <Route
              path="*"
              element={<Authorization />}  
            />
        </Routes>
    }  
    </div>
  );
}

export default App;
