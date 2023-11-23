import React from "react";
import "./intro.style.css";
import { useFormik } from "formik";
import { actions } from "../../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginSchema } from "../schema/LoginSchema";

import InputField from "../../../module/common/input/input";

function IntroPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialLoginStates = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialLoginStates,
      validationSchema: LoginSchema,
      onSubmit: (value, action) => {
        dispatch(actions.authActions.login(email, password));
        action.resetForm();
        navigate("/react");
      },
    });

  return (
    <div className="backgroundd">
      <div className="containerr">
        <h1 id="state">
          Unleash Entertainment:
          <br />
          <span id="binge">Binge new movies, TvShows</span>
        </h1>
        <form className="d-flex gap-0 my-5" onSubmit={handleSubmit}>
          <InputField
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            value={values.email}
            error={errors.email}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched.email}
          />

          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            value={values.password}
            error={errors.password}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched.password}
            className="password"
          />
          <button
            className="btn btn-light col-4 m-auto"
            type="submit"
            id="diveIn-btn"
          >
            Dive In
          </button>
        </form>
      </div>
    </div>
  );
}

export default IntroPage;
