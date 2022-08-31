import "./App.css";
import React, { useEffect } from "react";
import Calendar from "./component/Calendar/Calendar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Header from "./component/Header/Header";
import Patients from "./pages/Patients/Patients";
import CalendarModal from "./component/CalendarModal/CalendarModal";
import PatientProfile from "./pages/PatientProfile/PatientProfile";
import { useSelector, useDispatch } from "react-redux";
import { checkAuthDoctor } from "./api/doctor/AuthDoctor";
import jwt_decode from "jwt-decode";
import { menu, menuAdmin } from "./component/Header/menuList";
import Schedule from "./adminPages/Schedule/Schedule";
import Employees from "./adminPages/Employees/Employees";
import { checkAuthAdmin, getAdminOne } from "./api/admin/authAdmin";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getDoctorId } from "./api/admin/doctors";

function App() {
  const isAuth = useSelector((state) => state.doctor.isAuth);
  const isAuthAdmin = useSelector((state) => state.admin.isAuth);
  const isLoading = useSelector((state) => state.doctor.isLoading);
  const dispatch = useDispatch();
  const location = useLocation();
  const doctorData = useSelector(state=>state.adminDoctor.doctorId.data)
  const adminData = useSelector(state=>state.admin.getOneAdmin.data)

  let decode;
  if (localStorage.getItem("tockenAcs")) {
    decode = jwt_decode(localStorage.getItem("tockenAcs"));
  }

  useEffect(() => {
    if (
      localStorage.getItem("tockenAcs") &&
      decode.role &&
      decode.role === "DOCTOR"
    ) {
      checkAuthDoctor(dispatch);
      getDoctorId(dispatch,decode.sub)
    }
    if (
      localStorage.getItem("tockenAcs") &&
      decode.role &&
      decode.role === "ADMIN"
    ) {
      checkAuthAdmin(dispatch);
      getAdminOne(dispatch,decode.sub)
    }
  }, []);

  return (
    <div className={isLoading ? "app__loading" : "app"}>
      {isAuth && decode.role && decode.role === "DOCTOR" ? (
        <div>
          <Header menuList={menu} account={doctorData} doctorMenu={true} />
          <CalendarModal />
          <TransitionGroup component={null}>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes>
                {/* {routesDoctor.map(({ path, Element }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition>
                  
                    <Element />
                  
                  </CSSTransition>
                )}
              </Route>
            ))} */}

                <Route exact path="/" element={<Home />}/>
                <Route exact path="/patients" element={<Patients />} />
                <Route
                  exact
                  path="/patientProfile/:patientId"
                  element={<PatientProfile />}
                />
                <Route path="*" element={<Home />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      ) : isAuthAdmin && decode.role && decode.role === "ADMIN" ? (
        <div>
          <Header menuList={menuAdmin} account={adminData}/>
          <Routes>
            <Route exact path="/admin" element={<Schedule />} />
            <Route exact path="/admin/employees" element={<Employees />} />
            <Route exact path="/admin/patients" element={<Patients />} />
            <Route
              exact
              path="/patientProfile/:patientId"
              element={<PatientProfile />}
            />
            <Route path="*" element={<Schedule />} />
          </Routes>
        </div>
      ) : (!localStorage.getItem("tockenAcs") && !isAuth && !isAuthAdmin) ? (
        <Routes>
          <Route exact path="/auth" element={<Authorization />} />
          <Route
            exact
            path="/auth/passwordRecovery"
            element={<PasswordRecovery />}
          />
          <Route path="*" element={<Authorization />} />
        </Routes>
      ):null}
    </div>
  );
}

export default App;
