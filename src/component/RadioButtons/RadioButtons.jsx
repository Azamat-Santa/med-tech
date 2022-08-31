import { Field } from "formik";
import React from "react";
import { Radio } from "antd";
export default function RadioButtons({
  label,
  name,
  options,
  className,
  extraClassName,
  ...rest
}) {
  console.log();
  return (
    <div className={className}>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <div className="radio-item__wrapper" key={option.key}>
              <Radio
                type="radio"
                id={option.id}
                name={name}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              >
                {option.key}
              </Radio>
            </div>
          ));
        }}
      </Field>
    </div>
  );
}
