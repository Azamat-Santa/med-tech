import React, { useState } from "react";
import MedFileBlockTwoItem from "./ComponentMedFile/MedFileBlockTwoItem";
import "./medFile.css";
import closeModal from "../../img/X.png";
import AuthButton from "../AuthButton/AuthButton";
export default function MedFile() {
  const [val, setVal] = useState("");
  // console.log(val);
  const valu = (e) => {
    setVal();
    // console.log(e.target.outerText);
  };

  const [modal, setModal] = useState(false);
  const [tablePregnancy, ыуеTablePregnancy] = useState([
    {
      year: 2009,
      outcomeOfPregnancy: "Аборт ,Искусственный",
      child: "-",
      featuresPregnancy: "",
    },
  ]);
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
      <div className="med-file__block__one">
        <div className="med-file__block__one__left">
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Группа крови
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Резус - принадлежность беременной
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Резус - принадлежность мужа/партнера
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Титр резус - антител в 24 нед. беременности
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
        </div>
        <div className="med-file__block__one__right">
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">Кровь на RW</div>
            <div className="med-file__block__one__item__left med-file__block__one__item__left__two__input">
              <div className="med-file__block__one__item__two">
                <input type="text" className="med-file__input" />
              </div>
              <div className="">
                <input type="text" className="med-file__input" />
              </div>
            </div>
          </div>
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Кровь на ВИЧ
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Кровь на ВИЧ партнера
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
        </div>
      </div>
      <div className="med-file__block__two">
        <MedFileBlockTwoItem text="Дата визита на учет" />

        <div className="med-file__block__two__item">
          <div className="med-file__block__two__item__left">
            Прибыла из другой мед. организации
          </div>
          <div className="med-file__block__two__item__right ">
            <input type="radio" className="med-file__input" name="other" />
            <input type="radio" className="med-file__input" name="other" />
          </div>
        </div>
        <MedFileBlockTwoItem text="Указать откуда" />
        <MedFileBlockTwoItem text="ФИО*" />
        <MedFileBlockTwoItem text="Дата рождения*" />
        <MedFileBlockTwoItem text="Территория страхования*" />
        <MedFileBlockTwoItem text="Гражданство*" />
        <MedFileBlockTwoItem text="Категория пациента" />
        <MedFileBlockTwoItem text="Постоянное место жительства" />
        <MedFileBlockTwoItem text="Телефон*" />
        <MedFileBlockTwoItem text="Место работы, должность, телефон" />
        <MedFileBlockTwoItem text="Условия работы" />
        <MedFileBlockTwoItem text="ФИО мужа*" />
      </div>
      <div className="med-file__block__three">
        <div className="med-file__block__three__item">
          <div className="med-file__block__three__item__left">
            Семейное положение
          </div>
          <div className="med-file__block__three__item__right">
            <label
              htmlFor="familyOne"
              onClick={(e) => valu(e)}
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="family" id="familyOne" />
              Да
            </label>
            <label
              htmlFor="familyTwo"
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="family" id="familyTwo" />
              Нет
            </label>
            <label
              htmlFor="familyThree"
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="family" id="familyThree" />
              Гражданский брак
            </label>
          </div>
        </div>
        <div className="med-file__block__three__item">
          <div className="med-file__block__three__item__left">Образование</div>
          <div className="med-file__block__three__item__right med-file__block__three__item__right__edu">
            <label
              htmlFor="educationOne"
              onClick={(e) => valu(e)}
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="education" id="educationOne" />
              Начальное
            </label>
            <label
              htmlFor="educationTwo"
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="education" id="educationTwo" />
              Среднее
            </label>
            <label
              htmlFor="educationThree"
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="education" id="educationThree" />
              Сред. специальное
            </label>
            <label
              htmlFor="educationFour"
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="education" id="educationFour" />
              Высшее
            </label>
            <label
              htmlFor="educationFive"
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="education" id="educationFive" />
              Нет образования
            </label>
            <label
              htmlFor="educationSix"
              className="med-file__block__three__item__right__family"
            >
              <input type="radio" name="education" id="educationSix" />
              Не оконченно среднее
            </label>
          </div>
        </div>
      </div>
      <div className="med-file__block__one">
        <div className="med-file__block__one__left">
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Беременность (которая)
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              Срок беременности по последним месячным*
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
        </div>
        <div className="med-file__block__one__right">
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">
              роды (которые)
            </div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
          <div className="med-file__block__one__item">
            <div className="med-file__block__one__item__right">нед./по УЗИ</div>
            <div className="med-file__block__one__item__left">
              <input type="text" className="med-file__input" />
            </div>
          </div>
        </div>
      </div>
      <div className="med-file__block__four">
        <div className="med-file__block__four__left">
          Если взята на учет в сроке беременности свыше 12-недель - указать
          причины
        </div>
        <div className="med-file__block__four__right">
          <label
            htmlFor="blockFourRadioOne"
            className="med-file__block__three__item__right__family"
          >
            <input type="radio" name="blockFourRadio" id="blockFourRadioOne" />
            Отдельность мед. организации
          </label>
          <label
            htmlFor="blockFourRadioTwo"
            className="med-file__block__three__item__right__family"
          >
            <input type="radio" name="blockFourRadio" id="blockFourRadioTwo" />
            Отсутствие постоянного источника дохода
          </label>
          <label
            htmlFor="blockFourRadioThree"
            className="med-file__block__three__item__right__family"
          >
            <input
              type="radio"
              name="blockFourRadio"
              id="blockFourRadioThree"
            />
            Отсутствие документов
          </label>
          <label
            htmlFor="blockFourRadioFour"
            className="med-file__block__three__item__right__family"
          >
            <input type="radio" name="blockFourRadio" id="blockFourRadioFour" />
            Отсутсвие прописки
          </label>
          <label
            htmlFor="blockFourRadioFive"
            className="med-file__block__three__item__right__family"
          >
            <input type="radio" name="blockFourRadio" id="blockFourRadioFive" />
            По незнанию
          </label>
          <label
            htmlFor="blockFourRadioSix"
            className="med-file__block__three__item__right__family"
          >
            <input type="radio" name="blockFourRadio" id="blockFourRadioSix" />
            Другая причина
          </label>
          <input
            type="text"
            className="med-file__input"
            placeholder="Введите если другая причина"
          />
        </div>
      </div>
      <div className="med-file__block__one med-file__block__five">
        <div className="med-file__block__five__left">Дан отпуск</div>
        <div className="med-file__block__five__right">
          <div className="med-file__block__five__right__left">
            c <input type="date" name="" id="" />
          </div>
          <div className="med-file__block__five__right__right">
            до <input type="date" name="" id="" />
          </div>
        </div>
      </div>
      <div className="med-file__block__two ">
        <MedFileBlockTwoItem text="Номер листка не трудноспособности" />
        <div className="med-file__block__two__item">
          <div className="med-file__block__two__item__left">Дата осмотра</div>
          <div className="med-file__block__two__item__right">
            <input type="date" name="" id="" />
          </div>
        </div>
      </div>
      <div className="med-file__block">
        <div className="med-file__block__left">
          ЖАЛОБЫ при первичном осмотре
        </div>
        <div className="med-file__block__right">
          <textarea
            name="lament"
            id=""
            cols="30"
            rows="10"
            className="med-file__lament__textarea"
          ></textarea>
        </div>
      </div>
      <div className="med-file__anemnez__title">АНЕМНЕЗ</div>
      <div className="med-file__block">
        <div className="med-file__block__left">
          Индивидуальная переносмость лекарственных средств
        </div>
        <div className="med-file__block__right">
          <label
            htmlFor="blockFourRadioOne"
            className="med-file__block__three__item__right__family"
          >
            <input type="radio" name="blockFourRadio" id="blockFourRadioOne" />
            Да
          </label>
          <label
            htmlFor="blockFourRadioTwo"
            className="med-file__block__three__item__right__family"
          >
            <input type="radio" name="blockFourRadio" id="blockFourRadioOne" />
            Нет
          </label>
        </div>
      </div>
      <MedFileBlockTwoItem text="Указать какие " />
      <p className="past-illnesses-title">
        Перенесенные заболевания<span>*</span>
      </p>
      <MedFileBlockTwoItem text="Общие " />
      <MedFileBlockTwoItem text="Гинекологические" />
      <MedFileBlockTwoItem text="Операции" />
      <div className="med-file__pregnancy__table">
        <h4 className="pregnancy-title">Беременность</h4>
        <div className="med-file__pregnancy__table__title">
          <div className="med-file__pregnancy__table__title__item">
            <div>№ п/п</div>
            <div>Год</div>
            <div>Исход беременности</div>
            <div>Ребенок</div>
            <div>Особенности течения беременности, родов</div>
          </div>
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
      </div>
      <div className="med-file__block">
        <div className="med-file__block__left">
          ПЕРВОЕ ОБСЛЕДОВАНИЕ БЕРЕМЕННОЙ
        </div>
        <div className="med-file__block__right med-file__block__first-examination">
          <div>
            <p>Рост (см)</p>
            <input type="text" className="med-file__input" />
          </div>
          <div>
            <p>Вес (кг)</p>
            <input type="text" className="med-file__input" />
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
        <div className="med-file__block__right "></div>
      </div>
    </div>
  );
}
