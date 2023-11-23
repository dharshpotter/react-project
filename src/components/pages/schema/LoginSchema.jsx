import * as Yup from "yup";
import { emailField, passwordField } from "./CommonSchema";

export const LoginSchema = Yup.object({
  email: emailField,
  password : passwordField,
});