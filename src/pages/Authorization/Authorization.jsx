import React from "react";
import "./index.css";
import logo from "../../img/Logo.png";
import { Link, Route, Router } from "react-router-dom";
import meditation from "../../img/doctor_med.png";
import AuthForm from "../../component/AuthForm/AuthForm";
import doctorsShadow from "../../img/Shadow-PNG-Image-File.png";

export default function Authorization() {



  return (
    <div className="auth">
      <div className="doctor__animation__wrapper">
        <div className="doctor__animation">
          <img src={meditation} alt="" className="doctor__animation__img" />
          <img
            src={doctorsShadow}
            alt=""
            className="doctor__animation__shadow"
          />
        </div>
      </div>

      <div className="white-wave-img"></div>
      <div className="auth-baby-img"></div>
      <AuthForm/>
    </div>
  );
}
