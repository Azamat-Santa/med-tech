import "./App.css";
import React, { useEffect } from "react";
import Calendar from "./component/Calendar/Calendar";
import { Route, Routes } from "react-router-dom";
import Authorization from "./pages/Authorization/Authorization";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Header from "./component/Header/Header";
import CheckList from "./pages/CheckList/CheckList";
import Statistics from './pages/Statistics/Statistics';
import Register from './Test/Register';
import Patients from "./pages/Patients/Patients";
import CalendarModal from "./component/CalendarModal/CalendarModal";
import PatientProfile from "./pages/PatientProfile/PatientProfile";
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthDoctor, getPatients } from "./api/doctor/AuthDoctor";

function App() {
  if(localStorage.getItem('isAuth')){
    
  }
   const isAuth = useSelector(state=>state.doctor.isAuth)
  //  const isAuth = localStorage.getItem('isAuth')
  //  const [isAuth , setIsAuth] = useState(localStorage.getItem('isAuth'))
   const dispatch = useDispatch()
  //  useEffect(() => {
  //   if(localStorage.getItem('doctorAccessTocken')){
  //     checkAuthDoctor(dispatch)
  //   }
  //  }, [])

   
   
  
  return (
    <div>
      {isAuth ? (
        <div>
          <Header/>
          <CalendarModal/>
           <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/checkList" element={<CheckList />} />
             <Route exact path="/statistics" element={<Statistics />} />
             <Route exact path="/patients" element={<Patients />} />
             <Route exact path="/register" element={<Register />} />
             <Route exact path="/patientProfile" element={<PatientProfile />} />
             
           </Routes>
        </div>
        
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={<Authorization />}
          />
          <Route
            exact
            path="/passwordRecovery"
            element={<PasswordRecovery />}
          />
            <Route
            exact
            path="/register"
            element={<Register />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
