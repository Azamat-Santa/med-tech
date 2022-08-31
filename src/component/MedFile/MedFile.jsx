import React, { useEffect, useState } from "react";
import MedFileBlockTwoItem from "./ComponentMedFile/MedFileBlockTwoItem";
import "./medFile.css";
import closeModal from "../../img/X.png";
import AuthButton from "../AuthButton/AuthButton";
import MedFileBlockFour from "./ComponentMedFile/MedFileBlockFour";
import { FormikProvider, useFormik } from "formik";
import { Field, Form } from "formik";
import RadioButtons from "../RadioButtons/RadioButtons";
import {
  cameFromAnotherOrganization,
  complaintsDuringTheInitialExamination,
  destination,
  education,
  ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons,
  imt,
  individualToleranceOfDrugs,
  maritalStatus,
} from "./optionsData";
import DatePicker from "../DatePicker/DatePicker";
import { getMedFileId, postMedFile } from "./../../api/medFile/medFile";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spin/Spinner";

export default function MedFile({ patientId }) {
  const [modal, setModal] = useState(false);
  const [tablePregnancy, ыуеTablePregnancy] = useState([
    {
      year: 2009,
      outcomeOfPregnancy: "Аборт ,Искусственный",
      child: "-",
      featuresPregnancy: "",
    },
  ]);
  const dispatch = useDispatch();

  const medFile = useSelector((state) => state.medFile.getMedFileId.data);
  console.log(medFile);
  const postMedFileLoading = useSelector(
    (state) => state.medFile.postMedFile.isLoading
  );

  const formik = useFormik({
    initialValues: {
      bloodType: medFile.bloodType || "",
      RhesusBelongingToAPregnantWoman:
        medFile.RhesusBelongingToAPregnantWoman || "",
      rhAffiliationOfThePartner: medFile.rhAffiliationOfThePartner || "",
      rhAntibodyTiterAt28WeeksPregnancy:
        medFile.rhAntibodyTiterAt28WeeksPregnancy || "",
      bloodOnRW: medFile.bloodOnRW || "",
      BloodForHIV: medFile.BloodForHIV || "",
      bloodForHIVPartner: medFile.bloodForHIVPartner || "",
      registrationDate: medFile.registrationDate || "",
      cameFromAnotherOrganization: medFile.cameFromAnotherOrganization || "",
      nameOfOrganization: medFile.nameOfOrganization || "",
      fullName: medFile.fullName || "",
      dateOfBirth: medFile.dateOfBirth || "",
      territoryOfInsurance: medFile.territoryOfInsurance || "",
      citizenship: medFile.citizenship || "",
      patientCategory: medFile.patientCategory || "",
      permanentPlaceOfResidenceCityVillage:
        medFile.permanentPlaceOfResidenceCityVillage || "",
      telephone: medFile.telephone || "",
      placeOfWorkPositionPhone: medFile.placeOfWorkPositionPhone || "",
      workingConditions: medFile.workingConditions || "",
      fullNameOfPartner: medFile.fullNameOfPartner || "",
      maritalStatus: medFile.maritalStatus || "",
      education: medFile.education || "",
      pregnancy: medFile.pregnancy || "",
      childbirth: medFile.childbirth || "",
      pregnancyByLastMenstrualPeriod:
        medFile.pregnancyByLastMenstrualPeriod || "",
      weekOnUltrasound: medFile.weekOnUltrasound || "",
      ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons:
        medFile.ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons ||
        "",
      maternityLeaveGiven: medFile.maternityLeaveGiven || "",
      sickLeaveNumber: medFile.sickLeaveNumber || "",
      dateOfInspection: medFile.dateOfInspection || "",
      complaintsDuringTheInitialExamination:
        medFile.complaintsDuringTheInitialExamination || "",
      individualToleranceOfDrugs: medFile.individualToleranceOfDrugs || "",
      indicateWhich: medFile.indicateWhich || "",
      pastIllnesses: medFile.pastIllnesses || "",
      general: medFile.general || "",
      gynecological: medFile.gynecological || "",
      operations: medFile.operations || "",
      heigthPregant: medFile.heigthPregant || "",
      weightPregant: medFile.weightPregant || "",
      imt: medFile.imt || "",
      skinAndMucousMembranes: medFile.skinAndMucousMembranes || "",
      thyroid: medFile.thyroid || "",
      peripheralLymphNodes: medFile.peripheralLymphNodes || "",
      breathingAids: medFile.breathingAids || "",
      cardiacVascularSystem: medFile.cardiacVascularSystem || "",
      digestiveSystem: medFile.digestiveSystem || "",
      urinarySystem: medFile.urinarySystem || "",
      edema: medFile.edema || "",
      bonePelvis: medFile.bonePelvis || "",
      uterineFundusHeight: medFile.uterineFundusHeight || "",
      fetalHeartbeat: medFile.fetalHeartbeat || "",
      externalGenitalia: medFile.externalGenitalia || "",
      examinationOfTheCervixInTheMirrors:
        medFile.examinationOfTheCervixInTheMirrors || "",
      bimanualStudy: medFile.bimanualStudy || "",
      vaginalDischarge: medFile.vaginalDischarge || "",
      provisionalDiagnosis: medFile.provisionalDiagnosis || "",
      destination: medFile.destination || "",
      extraDestination: medFile.extraDestination || "",
      nextAppearanceDate: medFile.nextAppearanceDate || "",
    },
    enableReinitialize: true,
    displayName: "patientProfileMedFile",
    onSubmit: (patient) => {
      postMedFile({
        dispatch,
        patient,
        patientId,
      });
      console.log(patient);
    },
  });

  return (
    <div className="med-file">
      
    
      <div
        className={
          modal ? "modal-pregnansy-wrapper" : "modal-pregnansy-wrapper_none"
        }
        onClick={() => setModal(false)}
      >
        <div
          className="modal-pregnansy-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-pregnansy__header">
            <div>История беременности</div>
            <img src={closeModal} alt="" />
          </div>
          <div className="modal-pregnansy-content__wrapper">
            <div className="modal-pregnansy__block">
              <div className="modal-pregnansy__block__left">Год</div>
              <div className="modal-pregnansy__block__right modal-pregnansy__block__right_year">
                <input
                  type="text"
                  className="med-file__input modal-pregnansy__input"
                />
              </div>
            </div>
            <div className="modal-pregnansy__block">
              <div className="modal-pregnansy__block__left">
                Исход беременности
              </div>
              <div className="modal-pregnansy__block__right modal-pregnansy__block__two">
                <label
                  htmlFor="modal-pregnansy__one"
                  className="med-file__block__three__item__right__family"
                >
                  <input
                    type="radio"
                    name="modal-pregnansy"
                    id="modal-pregnansy__one"
                  />
                  Роды в срок
                </label>
                <label
                  htmlFor="modal-pregnansy__two"
                  className="med-file__block__three__item__right__family"
                >
                  <input
                    type="radio"
                    name="modal-pregnansy"
                    id="modal-pregnansy__two"
                  />
                  Преждевременные роды
                </label>
                <label
                  htmlFor="modal-pregnansy__three"
                  className="med-file__block__three__item__right__family"
                >
                  <input
                    type="radio"
                    name="modal-pregnansy"
                    id="modal-pregnansy__three"
                  />
                  Самопроизвольный аборт
                </label>
                <label
                  htmlFor="modal-pregnansy__four"
                  className="med-file__block__three__item__right__family"
                >
                  <input
                    type="radio"
                    name="modal-pregnansy"
                    id="modal-pregnansy__four"
                  />
                  Искусственный абборт
                </label>
              </div>
            </div>
            <div className="modal-pregnansy__block">
              <div className="modal-pregnansy__block__left">Ребенок</div>
              <div className="modal-pregnansy__block__right modal-pregnansy__block__right_year">
                <label
                  htmlFor="modal-pregnansy__child__one"
                  className="med-file__block__three__item__right__family"
                >
                  <input
                    type="radio"
                    name="modal-pregnansy__child"
                    id="modal-pregnansy__child__one"
                  />
                  Родился живой
                </label>
                <label
                  htmlFor="modal-pregnansy__child__two"
                  className="med-file__block__three__item__right__family"
                >
                  <input
                    type="radio"
                    name="modal-pregnansy__child"
                    id="modal-pregnansy__child__two"
                  />
                  Мертвый
                </label>
                <label
                  htmlFor="modal-pregnansy__child__three"
                  className="med-file__block__three__item__right__family"
                >
                  <input
                    type="radio"
                    name="modal-pregnansy__child"
                    id="modal-pregnansy__child__three"
                  />
                  Живорожденный (умер в течении 0-27 суток после рождения)
                </label>
              </div>
            </div>
            <div className="modal-pregnansy__block">
              <div className="modal-pregnansy__block__left">Вес</div>
              <div className="modal-pregnansy__block__right modal-pregnansy__block__right__flex">
                <input
                  type="text"
                  className="med-file__input modal-pregnansy__input "
                />{" "}
                <span>грамм</span>
              </div>
            </div>
            <div className="modal-pregnansy__block">
              <div className="modal-pregnansy__block__left">
                Особенности течения беременности, родов
              </div>
              <div className="modal-pregnansy__block__right modal-pregnansy__block__right__flex">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="med-file__lament__textarea"
                ></textarea>
              </div>
            </div>
            <div className="modal-pregnansy__btn">
              <AuthButton text="Сохранить" />
            </div>
          </div>
        </div>
      </div>
      <div className="med-documentation">
        <div className="med-documentation__right">
          <div>Код ЛПО</div>
          <div>Код ГСВ</div>
        </div>
        <div className="med-documentation__left">
          <div className="med-documentation__left__wrapper">
            <div className="med-documentation__title">
              МЕДИЦИНСКАЯ ДОКУМЕНТАЦИЯ
            </div>
            <div>Форма №111 - у</div>
            <div>
              Удтверждена Приказом Минздрава Кыргызской Республики №134 от 25
              марта 2013 года
            </div>
          </div>
        </div>
      </div>
      <div className="med-file__title">ИНДИВИДУАЛЬНАЯ КАРТА</div>
      <FormikProvider value={formik} onSubmit={formik.handleSubmit}>
        <Form>
          <div className="med-file__block__one">
            <div className="med-file__block__one__left">
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Группа крови
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.bloodType}
                    name="bloodType"
                    id="bloodType"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Резус - принадлежность беременной
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.RhesusBelongingToAPregnantWoman}
                    name="RhesusBelongingToAPregnantWoman"
                    id="RhesusBelongingToAPregnantWoman"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Резус - принадлежность мужа/партнера
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.rhAffiliationOfThePartner}
                    name="rhAffiliationOfThePartner"
                    id="rhAffiliationOfThePartner"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Титр резус - антител в 24 нед. беременности
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.rhAntibodyTiterAt28WeeksPregnancy}
                    name="rhAntibodyTiterAt28WeeksPregnancy"
                    id="rhAntibodyTiterAt28WeeksPregnancy"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
            <div className="med-file__block__one__right">
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Кровь на RW
                </div>
                <div className="med-file__block__one__item__left med-file__block__one__item__left__two__input">
                  <div className="med-file__block__one__item__two">
                    <input
                      type="text"
                      className="med-file__input"
                      value={formik.values.bloodOnRW}
                      name="bloodOnRW"
                      id="bloodOnRW"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>
              </div>
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Кровь на ВИЧ
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.BloodForHIV}
                    name="BloodForHIV"
                    id="BloodForHIV"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Кровь на ВИЧ партнера
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.bloodForHIVPartner}
                    name="bloodForHIVPartner"
                    id="bloodForHIVPartner"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="med-file__block__two">
            {/* <MedFileBlockTwoItem
              text="Дата визита на учет"
              value={formik.values.registrationDate}
              inputName="registrationDate"
              inputId="registrationDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            /> */}
         
            <div className="med-file__block__two__item">
              <div className="med-file__block__two__item__left">
                Прибыла из другой мед. организации
              </div>
              <div className="med-file__block__two__item__right ">
                <RadioButtons
                  label="radio options"
                  name="cameFromAnotherOrganization"
                  options={cameFromAnotherOrganization}
                  className="radio__wrapper"
                />
              </div>
            </div>

            <MedFileBlockTwoItem
              text="Указать откуда"
              value={formik.values.nameOfOrganization}
              inputName="nameOfOrganization"
              inputId="nameOfOrganization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="ФИО*"
              value={formik.values.fullName}
              inputName="fullName"
              inputId="fullName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Дата рождения*"
              value={formik.values.dateOfBirth}
              inputName="dateOfBirth"
              inputId="dateOfBirth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Территория страхования*"
              value={formik.values.territoryOfInsurance}
              inputName="territoryOfInsurance"
              inputId="territoryOfInsurance"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Гражданство*"
              value={formik.values.citizenship}
              inputName="citizenship"
              inputId="citizenship"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Категория пациента"
              value={formik.values.patientCategory}
              inputName="patientCategory"
              inputId="patientCategory"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Постоянное место жительства"
              value={formik.values.permanentPlaceOfResidenceCityVillage}
              inputName="permanentPlaceOfResidenceCityVillage"
              inputId="permanentPlaceOfResidenceCityVillage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Телефон*"
              value={formik.values.telephone}
              inputName="telephone"
              inputId="telephone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Место работы, должность, телефон"
              value={formik.values.placeOfWorkPositionPhone}
              inputName="placeOfWorkPositionPhone"
              inputId="placeOfWorkPositionPhone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="Условия работы"
              value={formik.values.workingConditions}
              inputName="workingConditions"
              inputId="workingConditions"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <MedFileBlockTwoItem
              text="ФИО мужа*"
              value={formik.values.fullNameOfPartner}
              inputName="fullNameOfPartner"
              inputId="fullNameOfPartner"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="med-file__block">
            <div className="med-file__block__left">Семейное положение</div>
            <div className="med-file__block__right">
              <RadioButtons
                name="maritalStatus"
                options={maritalStatus}
                className="radio__wrapper"
              />
            </div>
          </div>
          <div className="med-file__block">
            <div className="med-file__block__left">Образование</div>
            <div className="med-file__block__right">
              <RadioButtons
                name="education"
                options={education}
                className="radio__wrapper radio__wrapper__edu"
              />
            </div>
          </div>
          <div className="med-file__block__one">
            <div className="med-file__block__one__left">
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Беременность (которая)
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.pregnancy}
                    name="pregnancy"
                    id="pregnancy"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  Срок беременности по последним месячным*
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.pregnancyByLastMenstrualPeriod}
                    name="pregnancyByLastMenstrualPeriod"
                    id="pregnancyByLastMenstrualPeriod"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
            <div className="med-file__block__one__right">
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  роды (которые)
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.childbirth}
                    name="childbirth"
                    id="childbirth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="med-file__block__one__item">
                <div className="med-file__block__one__item__right">
                  нед./по УЗИ
                </div>
                <div className="med-file__block__one__item__left">
                  <input
                    type="text"
                    className="med-file__input"
                    value={formik.values.weekOnUltrasound}
                    name="weekOnUltrasound"
                    id="weekOnUltrasound"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="med-file__block">
            <div className="med-file__block__left">
              Если взята на учет в сроке беременности свыше 12-недель - указать
              причины
            </div>
            <div className="med-file__block__right">
              <div className="med-file__block__right__direction">
                <RadioButtons
                  name="ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons"
                  options={
                    ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons
                  }
                  className="radio__wrapper__direction"
                />
                <div className="med-file__block__right__another">
                  Другая причина:
                </div>
                <input
                  type="text"
                  className="med-file__input"
                  placeholder="Введите если другая причина"
                  value={
                    formik.values
                      .ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons
                  }
                  name="ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons"
                  id="ifRegisteredAtAGestationalAgeOfMoreThan12WeeksIndicateTheReasons"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          </div>
          {/* <div className="med-file__block__one med-file__block__five">
            <div className="med-file__block__five__left">Дан отпуск</div>
            <div className="med-file__block__five__right">
              <div className="med-file__block__five__right__left">
                c 
                <input 
                type="date" 
                name="" 
                id="" />

              </div>
        
              <div className="med-file__block__five__right__right">
                до 
                <input 
                type="date" 
                name="" 
                id="" />
              </div>
            </div>
          </div> */}

          <div className="med-file__block__two ">
            <MedFileBlockTwoItem
              text="Номер листка не трудноспособности"
              value={formik.values.sickLeaveNumber}
              inputName="sickLeaveNumber"
              inputId="sickLeaveNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {/* <div className="med-file__block__two__item">
              <div className="med-file__block__two__item__left">
                Дата осмотра
              </div>
              <div className="med-file__block__two__item__right">
                <input type="text" name="dateOfInspection" />
                <DatePicker name="dateOfInspection" />
              </div>
            </div> */}
          </div>

          {/* 7777777777777 ---------------------------------------------------------------------*/}

          <div className="med-file__block">
            <div className="med-file__block__left">
              ЖАЛОБЫ при первичном осмотре
            </div>
            <div className="med-file__block__right">
              <textarea
                name="complaintsDuringTheInitialExamination"
                id="complaintsDuringTheInitialExamination"
                cols="30"
                rows="10"
                className="med-file__lament__textarea"
                value={formik.values.complaintsDuringTheInitialExamination}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
          </div>
          <div className="med-file__anemnez__title">АНЕМНЕЗ</div>
          <div className="med-file__block">
            <div className="med-file__block__left">
              Индивидуальная переносмость лекарственных средств
            </div>
            <div className="med-file__block__right">
              <RadioButtons
                name="individualToleranceOfDrugs"
                options={individualToleranceOfDrugs}
                className="radio__wrapper"
              />
            </div>
          </div>
          <MedFileBlockTwoItem
            text="Указать какие "
            value={formik.values.indicateWhich}
            inputName="indicateWhich"
            inputId="indicateWhich"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p className="past-illnesses-title">
            Перенесенные заболевания<span>*</span>
          </p>
          <MedFileBlockTwoItem
            text="Общие "
            value={formik.values.general}
            inputName="general"
            inputId="general"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <MedFileBlockTwoItem
            text="Гинекологические"
            value={formik.values.gynecological}
            inputName="gynecological"
            inputId="gynecological"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <MedFileBlockTwoItem
            text="Операции"
            value={formik.values.operations}
            inputName="operations"
            inputId="operations"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/* <div className="med-file__pregnancy__table">
            <h4 className="pregnancy-title">Беременность</h4>
            <div className="med-file__pregnancy__table__title">
              <div className="med-file__pregnancy__table__title__item">
                <div>№ п/п</div>
                <div>Год</div>
                <div>Исход беременности</div>
                <div>Ребенок</div>
                <div>Особенности течения беременности, родов</div>
              </div>
            </div>
            <div onClick={() => setModal(true)}>
              <AuthButton text="Добавить " />
            </div>
          </div> */}
          <div className="med-file__block">
            <div className="med-file__block__left">
              ПЕРВОЕ ОБСЛЕДОВАНИЕ БЕРЕМЕННОЙ
            </div>
            <div className="med-file__block__right med-file__block__first-examination">
              <div>
                <p>Рост (см)</p>
                <input
                  type="text"
                  className="med-file__input"
                  value={formik.values.heigthPregant}
                  name="heigthPregant"
                  id="heigthPregant"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <p>Вес (кг)</p>
                <input
                  type="text"
                  className="med-file__input"
                  value={formik.values.weightPregant}
                  name="weightPregant"
                  id="weightPregant"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          </div>
          <div className="med-file__block">
            <div className="med-file__block__left med-file__block__IMT">
              <div>ИМТ=</div>
              <div>
                <div className="med-file__block__IMT__border">вес (кг)</div>
                <div>рост (м)</div>
              </div>
            </div>

            <div className="med-file__block__right med-file__block__right__flex-direction">
              <RadioButtons
                name="imt"
                options={imt}
                className="radio__wrapper__direction"
              />
            </div>
          </div>

          {/*  */}
          <MedFileBlockFour
            title="Кожанные покровы и слизистые"
            value={formik.values.skinAndMucousMembranes}
            formik={formik}
            name="skinAndMucousMembranes"
            inputId="skinAndMucousMembranes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />
          <MedFileBlockFour
            title="Щитоводная железа"
            value={formik.values.thyroid}
            formik={formik}
            name="thyroid"
            inputId="thyroid"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />
          <MedFileBlockFour
            title="Периферические лимфатические узлы"
            value={formik.values.peripheralLymphNodes}
            formik={formik}
            name="peripheralLymphNodes"
            inputId="peripheralLymphNodes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />
          <MedFileBlockFour
            title="Дыхательные средства"
            value={formik.values.breathingAids}
            formik={formik}
            name="breathingAids"
            inputId="breathingAids"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />
          <MedFileBlockFour
            title="Сердечно - сосудистая система"
            value={formik.values.cardiacVascularSystem}
            formik={formik}
            name="cardiacVascularSystem"
            inputId="cardiacVascularSystem"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />

          <MedFileBlockFour
            title="Пищеварительная система"
            value={formik.values.digestiveSystem}
            formik={formik}
            name="digestiveSystem"
            inputId="digestiveSystem"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />

          <MedFileBlockFour
            title="Мочевыделительная система"
            value={formik.values.urinarySystem}
            formik={formik}
            name="urinarySystem"
            inputId="urinarySystem"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />

          <MedFileBlockFour
            title="Отеки"
            value={formik.values.edema}
            formik={formik}
            name="edema"
            inputId="edema"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />

          <MedFileBlockFour
            title="Костный таз"
            value={formik.values.bonePelvis}
            formik={formik}
            name="bonePelvis"
            inputId="bonePelvis"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />

          <div className="med-file__block">
            <div className="med-file__block__left">Высота дна матки</div>
            <div className="med-file__block__right med-file__block__first-examination">
              <div>
                <input
                  type="text"
                  className="med-file__input"
                  value={formik.values.uterineFundusHeight}
                  name="uterineFundusHeight"
                  id="uterineFundusHeight"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <p>Сердцебиение плода</p>
                <input
                  type="text"
                  className="med-file__input"
                  value={formik.values.fetalHeartbeat}
                  name="fetalHeartbeat"
                  id="fetalHeartbeat"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          </div>
          <MedFileBlockFour
            title="Наружные половые органы"
            value={formik.values.externalGenitalia}
            formik={formik}
            name="externalGenitalia"
            inputId="externalGenitalia"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />

          <MedFileBlockFour
            title="Осмотр шейки матки в зеркалах"
            value={formik.values.examinationOfTheCervixInTheMirrors}
            formik={formik}
            name="examinationOfTheCervixInTheMirrors"
            inputId="examinationOfTheCervixInTheMirrors"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />

          <MedFileBlockTwoItem
            text="Бимануальное исследование:"
            value={formik.values.bimanualStudy}
            inputName="bimanualStudy"
            inputId="bimanualStudy"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <MedFileBlockFour
            title="Выделения из влагалища"
            value={formik.values.vaginalDischarge}
            formik={formik}
            name="vaginalDischarge"
            inputId="vaginalDischarge"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            classNameRadio="radio__wrapper__direction"
          />
          <div className="med-file__block">
            <div className="med-file__block__left">ПРЕДВАРИТЕЛЬНЫЙ ДИАГНОЗ</div>
            <div className="med-file__block__right">
              <textarea
                name="provisionalDiagnosis"
                id="provisionalDiagnosis"
                cols="30"
                rows="10"
                className="med-file__lament__textarea"
                value={formik.values.provisionalDiagnosis}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
          </div>
          <div className="med-file__block">
            <div className="med-file__block__left">Назначения</div>
            <div className="med-file__block__right">
              <RadioButtons
                name="destination"
                options={destination}
                className="radio__wrapper__direction"
              />
            </div>
          </div>
          {/* <div className="med-file__block">
            <div className="med-file__block__left">Дата следующей явки</div>
            <div className="med-file__block__right">
              <DatePicker
               name="nextAppearanceDate" 
             />
            </div>
          </div> */}
          <div className="med-file__submit__wrapper">
          
          <div className="med-file__submit">
            <button type="submit">
              {postMedFileLoading ? <Spinner color="white" /> : "Сохранить"}
            </button>
          </div>
          </div>
         
        </Form>
      </FormikProvider>
    </div>
  );
}
