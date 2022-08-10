import React from "react";
import AuthButton from "../AuthButton/AuthButton";
import close from "../../img/closeModal.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postNewPatient } from "../../api/patient/patient";
import { useDispatch } from "react-redux";
export default function NewPatientForm({ moadalForm, setModalForm }) {
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("Обязательное поле"),
    lastName: Yup.string().required("Обязательное поле"),
    phoneNumber: Yup.string().required("Обязательное поле"),
    dateOfBirth: Yup.string().required("Обязательное поле"),
    password: Yup.string().required("Обязательное поле"),
    gestationalAge: Yup.string().required("Обязательное поле"),
    email: Yup.string()
      .email("Некоректный email!")
      .required("Обязательное поле"),
  });

  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      password: "",
      gestationalAge: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (patient) => {
      console.log(patient);
      postNewPatient(dispatch, patient);
    },
  });

  return (
    <div
      className={
        moadalForm
          ? "modal-wrapper patient-add-modal"
          : "patient-add-modal__none"
      }
      onClick={() => setModalForm(false)}
    >
      <div
        className="patient-add-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="patient-add-modal__header">
          Добавить пациента
          <img src={close} alt="" />
        </div>
        <div className="patient-add__form">
          <form onSubmit={formik.handleSubmit}>
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
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="text"
                placeholder="Введите дату рождения"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dateOfBirth}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <div style={{ color: "red" }}>{formik.errors.fullName}</div>
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
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="Ведите номер телефона"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
              />
              {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
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
              <p>Срок беременности</p>
              <input
                id="gestationalAge"
                name="gestationalAge"
                type="text"
                placeholder="В неделях"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.gestationalAge}
              />
              {formik.errors.gestationalAge &&
                formik.touched.gestationalAge && (
                  <div style={{ color: "red" }}>
                    {formik.errors.gestationalAge}
                  </div>
                )}
            </div>
            <button type="submit" formButton={true}>
              Сохранить
            </button>
          </form>

      
        </div>
      </div>
    </div>
  );
}
