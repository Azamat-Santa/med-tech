import React, { useEffect, useState } from "react";
import "./patientProfile.css";
import avatar from "../../img/avatarPatient.png";
import { checkList } from "../../component/PtientProfileTable/checklList";
import MedFile from "../../component/MedFile/MedFile";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCheckListId } from "../../api/checkList/checkList";
import { postCheckList } from "./../../api/checkList/checkList";
import { useFormik } from "formik";
import PatientProfileTableLine from "../../component/PatientProfileTableLine/PatientProfileTableLine";
import { getPatientId } from "../../api/patient/patient";
import Spinner from "./../../component/Spin/Spinner";
import { getMedFileId } from "../../api/medFile/medFile";
import { getExcel } from "../../api/admin/excel";
import  jwt_decode  from 'jwt-decode';


export default function PatientProfile() {
  const [activeMonth, setActiveMonth] = useState(0);
  const [checkListMonth, setCheckListMonth] = useState(1);
  const [checkMedFileActive, setCheckMedFileActive] = useState({
    medFile: true,
    checkList: false,
  });


  const dispatch = useDispatch();
  const patientId = useParams().patientId;
  useEffect(() => {
    getPatientId(dispatch, patientId);
  }, []);
  useEffect(() => {
    getCheckListId(dispatch, patientId, checkListMonth);
  }, [checkListMonth]);
  useEffect(() => {
    getMedFileId(dispatch, patientId);
  }, [patientId]);

  const checklist = useSelector((state) => state.checkList.getCheckList.data);
  const checklistIsLoading = useSelector(
    (state) => state.checkList.getCheckList.isLoading
  );
  const patientProfileDate = useSelector(
    (state) => state.patient.patientId.data
  );

  const formik = useFormik({
    initialValues: {
      сomplaints: checkList.сomplaints || "",
      arterialPressure: checkList.arterialPressure || "",
      weigth: checkList.weigth ? checklist.weigth : "",
      thePresenceOfProteinInRheUrine: checkList.thePresenceOfProteinInRheUrine
        ? checkList.thePresenceOfProteinInRheUrine
        : "",
      hemoglobinLevel: checklist.hemoglobinLevel
        ? checklist.hemoglobinLevel
        : "",
      fundalHeightCm: checklist.fundalHeightCm ? checklist.fundalHeightCm : "",
      thePresenceOfEdema: checklist.thePresenceOfEdema
        ? checklist.thePresenceOfEdema
        : "",
      positionAt36Weeks: checklist.positionAt36Weeks
        ? checklist.positionAt36Weeks
        : "",
      presentatiOnAt36Weeks: checklist.presentatiOnAt36Weeks
        ? checklist.presentatiOnAt36Weeks
        : "",
      heartbeat: checklist.heartbeat ? checklist.heartbeat : "",
      stirring: checklist.stirring ? checklist.stirring : "",
      gestationalAge: checklist.gestationalAge ? checklist.gestationalAge : "",
      diagnosis: checklist.diagnosis ? checklist.diagnosis : "",
      icdCode: checklist.icdCode ? checklist.icdCode : "",
      examinationLaboratoryAndInstrumental:
        checklist.examinationLaboratoryAndInstrumental
          ? checklist.examinationLaboratoryAndInstrumental
          : "",
      treatment: checklist.treatment ? checklist.treatment : "",
      sentToTrainingSchoolToChildbirth:
        checklist.sentToTrainingSchoolToChildbirth
          ? checklist.sentToTrainingSchoolToChildbirth
          : "",
      physiologicalChangesDuringPregnancy:
        checklist.physiologicalChangesDuringPregnancy
          ? checklist.physiologicalChangesDuringPregnancy
          : "",
      mutritionForPregnantWomen: checklist.mutritionForPregnantWomen
        ? checklist.mutritionForPregnantWomen
        : "",
      modeAndHygiene: checklist.modeAndHygiene ? checklist.modeAndHygiene : "",
      warningSignsDuringPregnancy: checklist.warningSignsDuringPregnancy
        ? checklist.warningSignsDuringPregnancy
        : "",
      birthApproachPartnershipBirthAndFillingOutTheBirthPlan:
        checklist.birthApproachPartnershipBirthAndFillingOutTheBirthPlan
          ? checklist.birthApproachPartnershipBirthAndFillingOutTheBirthPlan
          : "",
      postpartumPeriodAndPostpartumContraception:
        checklist.postpartumPeriodAndPostpartumContraception
          ? checklist.postpartumPeriodAndPostpartumContraception
          : "",
      newbornCareAndBreastfeedingFeeding:
        checklist.newbornCareAndBreastfeedingFeeding
          ? checklist.newbornCareAndBreastfeedingFeeding
          : "",
      other: checklist.other ? checklist.other : "",
      recommendations: checklist.recommendations
        ? checklist.recommendations
        : "",
    },
    enableReinitialize: true,
    displayName: "patientProfile",
    onSubmit: (patient) => {
      postCheckList(dispatch, patient, patientId, checkListMonth);
    },
  });

  const monthList = [
    "1 месяц",
    "2 месяц",
    "3 месяц",
    "4 месяц",
    "5 месяц",
    "6 месяц",
    "7 месяц",
    "8 месяц",
    "9 месяц",
  ];
  
  const handleCheckMed = (value) => {
    if (value === "check")
      setCheckMedFileActive({
        medFile: false,
        checkList: true,
      });
    if (value === "med")
      setCheckMedFileActive({
        medFile: true,
        checkList: false,
      });
  };
  const agePatient =
    parseInt(new Date().getFullYear(), 10) -
    parseInt(patientProfileDate.birthdayDate?.substring(0, 4), 10);

  const handleCheckbox = (e, nameInpit) => {
    e.target.checked
      ? formik.setFieldValue(nameInpit, "норма")
      : formik.setFieldValue(nameInpit, "");
  };

  
 

  return (
    <div className="patient-profile">
      <div className="patient-profile__wrapper">
        {checklistIsLoading && checkMedFileActive.checkList && (
          <div className="checkList-wrapper__loading">
            <div className="loaderr"></div> 
          </div>
        )}
        <div className="patient-profile__left">
        
          
          <div className="patient-profile__date">
            <div className="patient-profile__avatar">
              <div className="patient-profile__avatar__img">
                <img src={avatar} alt="" />
              </div>
              <div className="patient-profile__avatar__name">
                {patientProfileDate.firstName} {patientProfileDate.lastName}
              </div>
            </div>
            <div className="patient-profile__date__birthday">
              <div>
                {/* <div>id {patientProfileDate.id}</div> */}
                <h5>ДАТА РОЖДЕНИЯ:</h5>
                <div>{patientProfileDate.birthdayDate}</div>
                <div>{patientProfileDate.id}</div>
              </div>
              <div>
                <h5>ВОЗРАСТ:</h5>
                <div>{agePatient} лет</div>
              </div>
            </div>
            {/* <div className="patient-profile__date__item">
              <h5>МЕСТО ЖИТЕЛЬСТВО:</h5>
              <p>г.Бишкек</p>
            </div> */}
            <div className="patient-profile__date__item">
              <h5>ТЕЛЕФОН:</h5>
              <p>{patientProfileDate.phone}</p>
            </div>
            <div className="patient-profile__date__item">
              <h5>БЕРЕМЕННОСТЬ:</h5>
              <p>{patientProfileDate.weekOfPregnancy} неделя</p>
            </div>
            <div
              className={
                checkMedFileActive.medFile
                  ? "patient-profile__date__button patient-profile__date__button__active"
                  : "patient-profile__date__button"
              }
              onClick={() => handleCheckMed("med")}
            >
              Мед. карта
            </div>
            <div
              className={
                checkMedFileActive.checkList
                  ? "patient-profile__date__button patient-profile__date__button__active"
                  : "patient-profile__date__button"
              }
              onClick={() => handleCheckMed("check")}
            >
              Чек лист
            </div>
          </div>
          <div className="patient-profile__months">
            {monthList.map((month, index) => (
              <div
                key={month}
                className={
                  index === activeMonth
                    ? "patient-profile__date__button patient-profile__months__button patient-profile__months__button_active"
                    : "patient-profile__date__button patient-profile__months__button"
                }
                onClick={() => {
                  setActiveMonth(index);
                  setCheckListMonth(index + 1);
                }}
              >
                {month}
              </div>
            ))}
          </div>
        </div>

        {checkMedFileActive.checkList && (
          <div className="patient-profile__right">
            <form onSubmit={formik.handleSubmit}>
              <div className="patient-profile__right__item">
                <div className="patient-profile__right__item__header">
                  Жалобы
                </div>
                <div className="patient-profile__table">
                  <PatientProfileTableLine
                    name="Жалобы"
                    formikValue={formik.values.сomplaints}
                    handleCheckbox={handleCheckbox}
                    number="1"
                    inputName="сomplaints"
                    inputId="сomplaints"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {/* -------------------- */}
                  <PatientProfileTableLine
                    name="Артериальное давление"
                    formikValue={formik.values.arterialPressure}
                    handleCheckbox={handleCheckbox}
                    number="2"
                    inputName="arterialPressure"
                    inputId="arterialPressure"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Вес (при ИМТ менее 18,5)"
                    formikValue={formik.values.weigth}
                    handleCheckbox={handleCheckbox}
                    number="3"
                    inputName="weigth"
                    inputId="weigth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Наличие белка в моче"
                    formikValue={formik.values.thePresenceOfProteinInRheUrine}
                    handleCheckbox={handleCheckbox}
                    number="4"
                    inputName="thePresenceOfProteinInRheUrine"
                    inputId="thePresenceOfProteinInRheUrine"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Уровень гемоглобина"
                    formikValue={formik.values.hemoglobinLevel}
                    handleCheckbox={handleCheckbox}
                    number="5"
                    inputName="hemoglobinLevel"
                    inputId="hemoglobinLevel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Высота стояния дна матки (см)"
                    formikValue={formik.values.fundalHeightCm}
                    handleCheckbox={handleCheckbox}
                    number="6"
                    inputName="fundalHeightCm"
                    inputId="fundalHeightCm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Наличие отеков (генераллизованных, быстровозникающих)"
                    formikValue={formik.values.thePresenceOfEdema}
                    handleCheckbox={handleCheckbox}
                    number="7"
                    inputName="thePresenceOfEdema"
                    inputId="thePresenceOfEdema"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {/* ----------------------- */}
                </div>
              </div>

              {/* 000000000000000000000000000000000000000 */}
              
              <div className="patient-profile__right__item">
                <div className="patient-profile__right__item__header">Плод</div>
                <div className="patient-profile__table">
                  <PatientProfileTableLine
                    name="Положение (в 36 нед.)"
                    formikValue={formik.values.positionAt36Weeks}
                    handleCheckbox={handleCheckbox}
                    number="1"
                    inputName="positionAt36Weeks"
                    inputId="positionAt36Weeks"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {/* -------------------- */}
                  <PatientProfileTableLine
                    name="Предлежание (в 36 нед.)"
                    formikValue={formik.values.presentatiOnAt36Weeks}
                    handleCheckbox={handleCheckbox}
                    number="2"
                    inputName="presentatiOnAt36Weeks"
                    inputId="presentatiOnAt36Weeks"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Сердцебиение"
                    formikValue={formik.values.heartbeat}
                    handleCheckbox={handleCheckbox}
                    number="3"
                    inputName="heartbeat"
                    inputId="heartbeat"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <PatientProfileTableLine
                    name="Шевеление"
                    formikValue={formik.values.stirring}
                    handleCheckbox={handleCheckbox}
                    number="4"
                    inputName="stirring"
                    inputId="stirring"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Срок беременности"
                    formikValue={formik.values.gestationalAge}
                    handleCheckbox={handleCheckbox}
                    number="5"
                    inputName="gestationalAge"
                    inputId="gestationalAge"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {/* ----------------------- */}
                </div>
              </div>

              {/* 0000000000000000000000000000000000000000000 */}
              <div className="patient-profile__right__item">
                <div className="patient-profile__right__item__header">
                  Диагноз
                </div>
                <div className="patient-profile__table">
                  <PatientProfileTableLine
                    name="Диагноз"
                    formikValue={formik.values.diagnosis}
                    handleCheckbox={handleCheckbox}
                    number="1"
                    inputName="diagnosis"
                    inputId="diagnosis"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <PatientProfileTableLine
                    name="Код по МКБ -10"
                    formikValue={formik.values.icdCode}
                    handleCheckbox={handleCheckbox}
                    number="2"
                    inputName="icdCode"
                    inputId="icdCode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Обследование (лабораторное и инструментальное)"
                    formikValue={
                      formik.values.examinationLaboratoryAndInstrumental
                    }
                    handleCheckbox={handleCheckbox}
                    number="3"
                    inputName="examinationLaboratoryAndInstrumental"
                    inputId="examinationLaboratoryAndInstrumental"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              {/* 00000000000000000000000000000000000000000000000000000000000000000000000 */}
              <div className="patient-profile__right__item">
                <div className="patient-profile__right__item__header">
                  Лечение
                </div>
                <div className="patient-profile__table">
                  <PatientProfileTableLine
                    name="Лечение"
                    formikValue={formik.values.treatment}
                    handleCheckbox={handleCheckbox}
                    number="1"
                    inputName="treatment"
                    inputId="treatment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <PatientProfileTableLine
                    name="Направлена в школу подготовки к родам"
                    formikValue={formik.values.sentToTrainingSchoolToChildbirth}
                    handleCheckbox={handleCheckbox}
                    number="2"
                    inputName="sentToTrainingSchoolToChildbirth"
                    inputId="sentToTrainingSchoolToChildbirth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {/* 00000000000000000000000000000000000000000000000000000000000000000 */}
              <div className="patient-profile__right__item">
                <div className="patient-profile__right__item__header">
                  Консультирование
                </div>
                <div className="patient-profile__table">
                  <PatientProfileTableLine
                    name="Физиологические изменения во время беременнсти"
                    formikValue={
                      formik.values.physiologicalChangesDuringPregnancy
                    }
                    handleCheckbox={handleCheckbox}
                    number="1"
                    inputName="physiologicalChangesDuringPregnancy"
                    inputId="physiologicalChangesDuringPregnancy"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <PatientProfileTableLine
                    name="Питание беременных женщин"
                    formikValue={formik.values.mutritionForPregnantWomen}
                    handleCheckbox={handleCheckbox}
                    number="2"
                    inputName="mutritionForPregnantWomen"
                    inputId="mutritionForPregnantWomen"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <PatientProfileTableLine
                    name="Режим и гигиена"
                    formikValue={formik.values.modeAndHygiene}
                    handleCheckbox={handleCheckbox}
                    number="3"
                    inputName="modeAndHygiene"
                    inputId="modeAndHygiene"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <PatientProfileTableLine
                    name="Тревожные признаки во время беременности"
                    formikValue={formik.values.warningSignsDuringPregnancy}
                    handleCheckbox={handleCheckbox}
                    number="4"
                    inputName="warningSignsDuringPregnancy"
                    inputId="warningSignsDuringPregnancy"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Подход в родах партнерские роды и заполнение плана родов"
                    formikValue={
                      formik.values
                        .birthApproachPartnershipBirthAndFillingOutTheBirthPlan
                    }
                    handleCheckbox={handleCheckbox}
                    number="5"
                    inputName="birthApproachPartnershipBirthAndFillingOutTheBirthPlan"
                    inputId="birthApproachPartnershipBirthAndFillingOutTheBirthPlan"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Послеродовый период и послеродовая контрацепция"
                    formikValue={
                      formik.values.postpartumPeriodAndPostpartumContraception
                    }
                    handleCheckbox={handleCheckbox}
                    number="6"
                    inputName="postpartumPeriodAndPostpartumContraception"
                    inputId="postpartumPeriodAndPostpartumContraception"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Уход за новорожденным и грудное вскармливание"
                    formikValue={
                      formik.values.newbornCareAndBreastfeedingFeeding
                    }
                    handleCheckbox={handleCheckbox}
                    number="7"
                    inputName="newbornCareAndBreastfeedingFeeding"
                    inputId="newbornCareAndBreastfeedingFeeding"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <PatientProfileTableLine
                    name="Другое"
                    formikValue={formik.values.other}
                    handleCheckbox={handleCheckbox}
                    number="8"
                    inputName="other"
                    inputId="other"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {/* 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}

              <div className="patient-profile__right__item">
                <div className="patient-profile__right__item__header">
                  Рекомендации
                </div>
                <div className="patient-profile__right__item__rec">
                  <textarea
                    name="recommendations"
                    id="recommendations"
                    cols="30"
                    rows="10"
                    value={formik.values.recommendations}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
              </div>
              <div className="patient-profile__right__btn__wrapper">
                <div className="patient-profile__right__btn">
                  <button type="submit" className="button">
                    Сохранить
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {checkMedFileActive.medFile && <MedFile patientId = {patientId}/>}
      </div>
    </div>
  );
}
