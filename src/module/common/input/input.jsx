import React from "react";
import "./input.style.css"

function InputField({
  type,
  name,
  label,
  touched,
  error,
  value,
  handleBlur,
  handleChange,
}) {
  return (
    <div className="form-floating">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={label}
        className={'form-control ${error && touched && "border border-danger"}'}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <label htmlFor={name}>{label}</label>
      {error && touched && (
        <div className="form-text text-light ">{error}</div>
      )}
    </div>
  );
}

export default InputField;
