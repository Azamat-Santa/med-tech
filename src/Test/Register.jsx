import { useFormik } from "formik";
import React from "react";
import { useState } from "react";

export default function Register() {

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "Обязательное поле";
    }
    if (!values.lastName) {
      errors.lastName = "Обязательное поле";
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
    if (!values.country) {
      errors.country = "Обязательное поле";
    }
    if (!values.city) {
      errors.city = "Обязательное поле";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Обязательное поле";
    }
    if (!values.website) {
      errors.website = "Обязательное поле";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      birthdayDate:'',
      experience:'',
      password:''
    },
    onSubmit: (user) => {
      // const id = user.id
      // dispatch(changeUserAction({id , user}))

    },
    validate,
  });
  const url = 'https://medtechteam2.herokuapp.com/'

  const register = async ()=>{
    try {
      const response = await fetch(
        "https://medtechteam2.herokuapp.com/admin/sign-ap",
        {
          method: "POST",
          body: JSON.stringify(
            {"name": "Admin",
             "password": "12345"}),
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
    console.log(response);

    } catch (error) {
      console.log(error);
    }
    
}
  
  return (
    <div>
      <input type="text" value={formik.firstName} />
      <input type="text" value={formik.lastName} />
      <input type="text" value={formik.email} />
      <input type="text" value={formik.phone} />
      <input type="text" value={formik.birthdayDate} />
      <input type="text" value={formik.experience} />
      <input type="text" value={formik.password} />
      <button onClick={()=>register()}>click</button>
    </div>
  );
}
