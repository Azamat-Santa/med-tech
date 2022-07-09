import "./App.css";
import React from "react";
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

function App() {
  const isSavedUser = localStorage.getItem('isAuth')
  const [isAuth, setIsAuth] = useState(isSavedUser);

  return (
    <div>
      {isAuth ? (
        <div>
          <Header/>
           <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/checkList" element={<CheckList />} />
             <Route exact path="/statistics" element={<Statistics />} />
             <Route exact path="/patients" element={<Patients />} />
             
           </Routes>
        </div>
        
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={<Authorization isAuth={isAuth} setIsAuth={setIsAuth} />}
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
