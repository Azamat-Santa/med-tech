import React from "react";
import DateViuw from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field } from "formik";
export default function DatePicker({ name, ...rest }) {
  return (
    <div>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateViuw
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              placeholderText='Выберите дату'
              className="med-file__input"
              />
          );
        }}
      </Field>
      
    </div>
  );
}
