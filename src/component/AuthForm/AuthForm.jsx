import React, { useState } from "react";
import "./authForm.css";
import logo from "../../img/LogoWhite.png";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import Input from "../Input/Input";
import AuthButton from "../AuthButton/AuthButton";
import { useFormik } from "formik";

export default function AuthForm({ isAuth, setIsAuth }) {
  const [isShowPassword,setIsShowPassword] = useState(false)
  const handleAuth = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "Обязательное поле";
    } else if (values.password.length <= 6 || values.password.length >= 12) {
      errors.password = "Пароль должно быть больше 6 меньше 12";
    }
    if (!values.email) {
      errors.email = "Обязательное поле";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Некорректная почта!";
    }
    
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (user) => {},
    validate,
  });
  return (
    <div className="auth__form-wrapper">
      <div className="auth__form-logo">
        <img src={logo} alt="" className="logo" />
        <p className="logo-title">Беременность</p>
      </div>
      <div className="auth__form">
        <Title text="Авторизация" />
        {formik.errors.email && formik.touched.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}
        <div className="auth__form-input">
          <Input
            type="text"
            placeholder="Введите Email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
        <div className="auth__form-input auth__form-input__show-password__wrapper">
           <div className="auth__form-input__show-password" onClick={()=>setIsShowPassword(!isShowPassword)}>

           </div>
          <Input
            type= {isShowPassword ? 'text' : 'password' }
            placeholder="Введите пароль"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        <div onClick={() => handleAuth()}>
          <AuthButton text="Войти" />
        </div>
        <Link to={"/passwordRecovery"}>Забыли пароль?</Link>
      </div>
    </div>
  );
}
