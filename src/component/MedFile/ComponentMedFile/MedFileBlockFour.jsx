import Checkbox from "antd/lib/checkbox/Checkbox";
import React from "react";
import RadioButtons from "../../RadioButtons/RadioButtons";

export default function MedFileBlockFour({
  title,
  value,
  name,
  inputId,
  onChange,
  onBlur,
  formik
}) {
  const handleCheckbox = (e, nameInpit) => {
    e.target.checked
      ? formik.setFieldValue(nameInpit, "В норме")
      : formik.setFieldValue(nameInpit, "");
  };
  const onChangeCheckbox = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };


  return (
    <div className="med-file__block">
      <div className="med-file__block__left ">{title}</div>
      <div className="med-file__block__right med-file__block__right__flex-direction">
      <div className="checkbox__wrapper">
        <Checkbox
          onChange={onChangeCheckbox}
          onClick={(e) => handleCheckbox(e, name)}
          id={name}
        >
        В норме
      </Checkbox>
      </div>

        <div className="med-file-input-two-wrapper">
          <input 
            type="text" 
            className="med-file__input" 
            value={value}
            name={name}
            id={inputId}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
    </div>
  );
}
