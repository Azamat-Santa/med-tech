import React from "react";
import "./medFile.css";
export default function MedFile() {
  return (
    <div className="med-file">
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
            <div className="med-file__block__one__item__left">
              <div className="med-file__block__one__item__left__two__input">
                <input type="text" className="med-file__input" />
              </div>
              <div className="med-file__block__one__item__left__two__input">
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
    </div>
  );
}
