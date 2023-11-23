import * as Yup from "yup";
import "./commonSchema.style.css"

export const emailField = Yup.string()
  .required("Email is required!")
  .email("enter a valid email");

export const passwordField = Yup.string()
  .required("Password is required!")
  .matches(
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
    "Password should contain atleast eight characters, including atleast one number and includes both lower and uppercase letters and special characters"
  );

export const textOnlyField = Yup.string().matches(
  /^[a-zA-Z]*$/,
  "contain only text characters"
);

export const numbersOnlyField = Yup.string().matches(
  /^[0-9]/,
  "contain only numbers"
);
