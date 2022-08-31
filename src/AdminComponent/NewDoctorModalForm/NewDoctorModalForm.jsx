import React from 'react'
import * as Yup from "yup";
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import Spinner from './../../component/Spin/Spinner';
import close from "../../img/closeModal.png";
import { postNewDoctor } from '../../api/admin/doctors';
import DatePicker from '../../component/DatePicker/DatePicker';
import { FormikProvider } from 'formik';
import { Form } from 'formik';


export default function NewDoctorModalForm({moadalForm,setNewDoctorModal}) {
    const dispatch = useDispatch()
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().required("Обязательное поле"),
        lastName: Yup.string().required("Обязательное поле"),
        phone: Yup.string().required("Обязательное поле"),
        birthdayDate: Yup.string().required("Обязательное поле"),
        password: Yup.string().required("Обязательное поле"),
        experience: Yup.number().required("Обязательное поле"),
        email: Yup.string()
          .email("Некоректный email!")
          .required("Обязательное поле"),
      });
      const postNewDoctorLoading = useSelector(state=>state.adminDoctor.newDoctorRegister.isLoading)

      const formik = useFormik({
        initialValues: {
          firstName:"",
          lastName:"",
          email: "",
          phone: "",
          birthdayDate: "",
          password: "",
          experience: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (doctor) => {
            postNewDoctor(dispatch, doctor);
            console.log(doctor);
        },
      });





  return (
    <div
    className={
      moadalForm
        ? "modal-wrapper active"
        : "modal-wrapper"
    }
    onClick={() => setNewDoctorModal(false)}
  >
    <div
      className={moadalForm ? "patient-add-modal__content active": 'patient-add-modal__content'}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="patient-add-modal__header">
        Добавить доктора
        <img src={close} alt="" />
      </div>
      <div className="patient-add__form">
      <FormikProvider value={formik} onSubmit={formik.handleSubmit}>
        <Form>
          <div className="patient-add__item">
            <p>Имя</p>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Введите имя"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.errors.firstName && formik.touched.firstName && (
              <div style={{ color: "red" }}>{formik.errors.firstName}</div>
            )}
          </div>
          <div className="patient-add__item">
            <p>Фамилия</p>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Введите фамилию"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && formik.touched.lastName && (
              <div style={{ color: "red" }}>{formik.errors.lastName}</div>
            )}
          </div>

          <div className="patient-add__item">
            <p>Дата рождения</p>
            <DatePicker
               name="birthdayDate" 
             />
            {/* <input
              id="birthdayDate"
              name="birthdayDate"
              type="text"
              placeholder="Введите дату рождения"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birthdayDate}
            /> */}
            {formik.errors.birthdayDate && formik.touched.birthdayDate && (
              <div style={{ color: "red" }}>{formik.errors.birthdayDate}</div>
            )}
          </div>

          <div className="patient-add__item">
            <p>Почта</p>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Ведите свою почту"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
          </div>
          <div className="patient-add__item">
            <p>Телефон</p>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Ведите номер телефона"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone && (
              <div style={{ color: "red" }}>{formik.errors.phone}</div>
            )}
          </div>
          <div className="patient-add__item">
            <p>Пароль</p>
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Введите пароль"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>
          <div className="patient-add__item">
            <p>Опыт работы</p>
            <input
              id="experience"
              name="experience"
              type="number"
              placeholder="В годах"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.experience}
            />
            {formik.errors.experience &&
              formik.touched.experience && (
                <div style={{ color: "red" }}>
                  {formik.errors.experience}
                </div>
              )}
          </div>
          <button type="submit" >
           {postNewDoctorLoading ?  <Spinner/> : 'Сохранить'}
            
          </button>
        </Form>
        </FormikProvider>

    
      </div>
    </div>
  </div>
  )
}
