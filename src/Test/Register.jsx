// import { useFormik } from "formik";
// import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../redux/reducers/userReducer";
// import jwt_decode from "jwt-decode";


// export default function Register() {
//   const validate = (values) => {
//     let errors = {};
//     if (!values.firstName) {
//       errors.firstName = "Обязательное поле";
//     }
//     if (!values.lastName) {
//       errors.lastName = "Обязательное поле";
//     }
//     if (!values.email) {
//       errors.email = "Обязательное поле";
//     } else if (
//       !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         values.email
//       )
//     ) {
//       errors.email = "Некорректная почта!";
//     }
//     if (!values.country) {
//       errors.country = "Обязательное поле";
//     }
//     if (!values.city) {
//       errors.city = "Обязательное поле";
//     }
//     if (!values.phoneNumber) {
//       errors.phoneNumber = "Обязательное поле";
//     }
//     if (!values.website) {
//       errors.website = "Обязательное поле";
//     }
//     return errors;
//   };
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       birthdayDate: "",
//       experience: "",
//       password: "",
//     },
//     onSubmit: (user) => {
//       // const id = user.id
//       // dispatch(changeUserAction({id , user}))
//     },
//     validate,
//   });
 
//   const url = "https://medtechteam2.herokuapp.com/";
//   const token = localStorage.getItem('tockenAcs');
//   const decoded = jwt_decode(token);
//    console.log(localStorage.getItem('tockenAcs'));
//   console.log(decoded);
//   const register = async () => {
//     try {
//       const response = await fetch(
//         "https://medtechteam-2.herokuapp.com/auth/admin/sign-in",
//         {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({email:'azamat@gmail.ru', password:'123456789'}),
//         }
//       );
//       const data = await response.json()
//       console.log(response);
//       console.log(data);
//       localStorage.setItem('tockenRef', JSON.stringify(data.refreshToken))
//       localStorage.setItem('tockenAcs', JSON.stringify(data.accessToken))
 

//       // --------------------------------- oooo --------------------------------- //
//       // const tocken =  localStorage.getItem('tockenAcs')
//       // const kav = tocken.substring(1,tocken.length-1)
//       // console.log(tocken)
//       // const response = await fetch(
//       //   "https://medtechteam-2.herokuapp.com/doctor",
//       //   {
//       //     method: "POST",
//       //     headers: {
//       //       'Content-Type': 'application/json',
//       //       Authorization:  `bearer ${kav}`,
//       //     },
//       //     body: JSON.stringify({ 
//       //         "firstName": "доктор",
//       //         "lastName": "доктор",
//       //         "birthdayDate": "2022-07-04",
//       //         "experience": 4,
//       //         "email": "satybaldievazamat08@gmail.com",
//       //         "phone": "+996706530843",
//       //         "password": "123456789"
//       //      }),
           
//       //   }
//       // );
//       // const data = await response.json()
//       // console.log(tocken);
//       // console.log(response, data);


//       // ------------------------------  ----------------------- //


//       // const response = await fetch(
//       //   "https://medtechteam-2.herokuapp.com/auth/refresh",
//       //   {
//       //     method:'POST',
//       //     headers: {
//       //       'Content-Type': 'application/json',
//       //     },
//       //     body: JSON.stringify({ 
//       //         refreshToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0OGZlZGNkNC1jMzdkLTRiZDgtYmU2NC01ODcyOWYyYWNjNzgiLCJyb2xlIjoiRE9DVE9SIiwiaWF0IjoxNjU4Mjk4MTM3LCJleHAiOjE2NjQyOTgxMzcsImF1ZCI6Im1lZHRlY2h0ZWFtMiIsImlzcyI6Im1lZHRlY2h0ZWFtMiJ9.6WG7LE3PK3-hLGCuq1SbDZ-l0Xowjc3bVR-y6iJuc2o",
//       //         oldAccessToken: "de39987ff1c3eaa8d5c31140c1f25848501d7145e34dc41ed144f3c6629a06ef2bb95ccff0b7d4fdd2885a10f22eb398fc38ea9a0d8f87c4e8458a31291209a8"
//       //      }),
           
//       //   }
//       // );
//       // console.log(localStorage.getItem('tockenAcs'));
//       // const data = response.json()
//       // console.log(response, data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <input type="text" value={formik.firstName} />
//       <input type="text" value={formik.lastName} />
//       <input type="text" value={formik.email} />
//       <input type="text" value={formik.phone} />
//       <input type="text" value={formik.birthdayDate} />
//       <input type="text" value={formik.experience} />
//       <input type="text" value={formik.password} />
//       <button onClick={() => register()}>click</button>
//     </div>
//   );
// }
