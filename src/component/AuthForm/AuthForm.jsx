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
import { role } from "./role";
import roleImg from '../../img/roleImg.png'
// import { authDoctorFailure } from "../../redux/reducers/doctor";
import * as Yup from "yup";
import { authAdmin } from "../../api/admin/authAdmin";
import { Spin } from "antd";
import Spinner from './../Spin/Spinner';

export default function AuthForm() {
  const [isShowPassword,setIsShowPassword] = useState(false)
  const [isShowRoleWrapper,setIsShowRoleWrapper] = useState(false)
  const [roleUser,setroleUser] = useState('Доктор')
  const isLoading = useSelector(state=>state.doctor.isLoading)
  const isLoadingAdmin = useSelector(state=>state.admin.isLoading)
  const dispatch = useDispatch()
 
  const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Обязательное поле"),
    email: Yup.string()
      .email("Некоректный email!")
      .required("Обязательное поле"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit:
    (user) => {
      if(roleUser === 'Доктор') authDoctor(dispatch,user.email,user.password)
      if(roleUser === 'Админ') authAdmin(dispatch,user.email,user.password);
      if(roleUser === 'Менеджер') console.log('менеджер');
    },
  });
  // const error = useSelector(state => state.doctor.isError)
  const showRole = () => setIsShowRoleWrapper(!isShowRoleWrapper)
  const handlerRole = (role)=>{
    setIsShowRoleWrapper(false)
    setroleUser(role)
  }
  
  return (
    <div className="auth__form-wrapper">
    <div className="auth__form__role">
      <div
      onClick={showRole}
      >{roleUser} <img src={roleImg} alt="" />
      </div>
      <div className ={isShowRoleWrapper ? "auth__form__role__item__wrapper active" : 'auth__form__role__item__wrapper'}>
      {isShowRoleWrapper && 
        role.map(role =>(
          <div
           className="auth__form__role__item"
           onClick={()=>handlerRole(role.role)}
           >{role.role}</div>
        ))
      }
      </div>
     
    </div>
      <div className="auth__form-logo">
        <img src={logo} alt="" className="logo" />
        <p className="logo-title">Беременность</p>
      </div>
    <div className="auth__form">
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit">
           {isLoading || isLoadingAdmin ? <Spinner size='20px' color='white'/> : 'Войти'}
        </button>
     
        <Link to={"/auth/passwordRecovery"}>Забыли пароль?</Link>
      </form>
       
      </div>
    </div>
  );
}
