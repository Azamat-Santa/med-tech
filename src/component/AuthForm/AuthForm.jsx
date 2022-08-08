import React, { useState } from "react";
import "./authForm.css";
import logo from "../../img/LogoWhite.png";
import { Link } from "react-router-dom";
import Title from "../Title/Title";
import Input from "../Input/Input";
import AuthButton from "../AuthButton/AuthButton";
import { useFormik } from "formik";
import { authDoctor, AuthDoctor } from "../../api/doctor/AuthDoctor";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { authDoctorFailure } from "../../redux/reducers/doctor";

export default function AuthForm() {
  const [isShowPassword,setIsShowPassword] = useState(false)
  const isLoading = useSelector(state=>state.doctor.isLoading)
  const dispatch = useDispatch()
 
  const validate = (values) => {
    let errors = {};
    if (!values.password) {
      errors.password = "Обязательное поле";
    } else if (values.password.length <= 5 ) {
      errors.password = "Пароль должен быть не меньше 6";
    }else if (values.password.length >= 12){
      errors.password = "Пароль должен быть не больше 12";

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
  const error = useSelector(state => state.doctor.isError)
  console.log(error);
  
  return (
    <div className="auth__form-wrapper">
      <div className="auth__form-logo">
        <img src={logo} alt="" className="logo" />
        <p className="logo-title">Беременность</p>
      </div>
      <div className="auth__form">
        <Title text="Авторизация" />
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
        {formik.errors.email && formik.touched.email && (
          <div className='validate-error'>{formik.errors.email}</div>
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
        {formik.errors.password && formik.touched.password && (
          <div className='validate-error'>{formik.errors.password}</div>
        )}
        <div onClick={() => authDoctor(dispatch,formik.values.email,formik.values.password)}>
          <AuthButton text="Войти" isLoading={isLoading}/>
        </div>
        <Link to={"/passwordRecovery"}>Забыли пароль?</Link>
      </div>
    </div>
  );
}
