import * as Yup from "yup";
import {
  emailField,
  numbersOnlyField,
  passwordField,
  textOnlyField,
} from "./CommonSchema";

export const SignUpSchema = Yup.object({
  email: emailField,
  password: passwordField,
  firstname: textOnlyField
    .required("Firstname is required!")
    .min(4, "not less than 4 characters"),
  lastname: textOnlyField
    .required("Lastname is required!")
    .min(4, "not less than 4 characters"),
  phone: numbersOnlyField
    .required("Phone number is required!")
    .min(10, "Enter a valid phone number"),
  confirmpassword: passwordField.required("Confirm password is required!"),
});
