import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/reducers/userReducer";

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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthdayDate: "",
      experience: "",
      password: "",
    },
    onSubmit: (user) => {
      // const id = user.id
      // dispatch(changeUserAction({id , user}))
    },
    validate,
  });
 
  const url = "https://medtechteam2.herokuapp.com/";
  // name:'testName',
  // password:'12345678'
  const register = async () => {
    const ref = JSON.parse(localStorage.getItem('doctorTocken')).refreshToken
    console.log(ref);
    try {
      // const response = await fetch(
      //   "https://medtechteam2.herokuapp.com/admin/sign-in",
      //   {
      //     method: "POST",
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({name:'adminazamat',password:'123456789'}),
      //   }
      // );
      // const data = await response.json()
      // console.log(response);
      // console.log(data);
      // localStorage.setItem('tocken', JSON.stringify(data.refreshToken))
      // localStorage.setItem('tockenAcs', JSON.stringify(data.accessToken))

      // --------------------------------- oooo --------------------------------- //
      // const tocken =  localStorage.getItem('tockenAcs')
      // const response = await fetch(
      //   "https://medtechteam2.herokuapp.com/doctor/sign-up",
      //   {
      //     method: "POST",
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: `Bearer ${tocken}`
      //     },
      //     body: JSON.stringify({ 
      //         "firstName": "тестимя",
      //         "lastName": "тестфам",
      //         "birthdayDate": "2022-07-04T04:35:12.462Z",
      //         "experience": 4,
      //         "email": "satybaldievazamat08@gmail.com",
      //         "phone": "+996706530843",
      //         "password": "123456789"
      //      }),
           
      //   }
      // );
      // console.log(response);


      // ------------------------------  ----------------------- //
const tocken =  localStorage.getItem('tocken')
console.log(tocken);
      const response = await fetch(
        "https://medtechteam2.herokuapp.com/doctor/refresh",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${tocken}`
          },
          body: JSON.stringify({ 
            "refreshToken": tocken
           }),
           
        }
      );

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input type="text" value={formik.firstName} />
      <input type="text" value={formik.lastName} />
      <input type="text" value={formik.email} />
      <input type="text" value={formik.phone} />
      <input type="text" value={formik.birthdayDate} />
      <input type="text" value={formik.experience} />
      <input type="text" value={formik.password} />
      <button onClick={() => register()}>click</button>
    </div>
  );
}
