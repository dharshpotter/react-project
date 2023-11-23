import React from "react";
import InputField from "../../../module/common/input/input";
import { useFormik } from "formik";
import { SignUpSchema } from "../schema/SignUpSchema";
import { Link } from "react-router-dom";
import "./SignUp.style.css"

function SignUpPage() {
  const initialSignState = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialSignState,
      validationSchema: SignUpSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

  return (
    <div className="container mt-5">
      <div className="card col-7 mx-auto shadow-lg">
        <div className="card-body">
          <form className="row g-2" onSubmit={handleSubmit}>
            <h3 className="text-center ">Sign Up</h3>
            <div className="col-6">
              <InputField
                type="text"
                name="firstname"
                id="firstname"
                label="First Name"
                placeholder="First Name"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.firstname}
                touched={touched.firstname}
                error={errors.firstname}
              />
            </div>
            <div className="col-6">
              <InputField
                type="text"
                name="lastname"
                id="lastname"
                label="Last Name"
                placeholder="Last Name"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.lastname}
                touched={touched.lastname}
                error={errors.lastname}
              />
            </div>
            <div className="col-6">
              <InputField
                type="tel"
                name="phone"
                id="phone"
                label="Phone"
                placeholder="Phone"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.phone}
                touched={touched.phone}
                error={errors.phone}
              />
            </div>
            <div className="col-6">
              <InputField
                type="email"
                name="email"
                id="email"
                label="Email"
                placeholder="Email"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.email}
                touched={touched.email}
                error={errors.email}
                className="nami"
              />
            </div>
            <div className="col-6">
              <InputField
                type="password"
                name="password"
                id="password"
                label="Password"
                placeholder="Password"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.password}
                touched={touched.password}
                error={errors.password}
              />
            </div>
            <div className="col-6">
              <InputField
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                label="Confirmpassword"
                placeholder="Confirmpassword"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.confirmpassword}
                touched={touched.confirmpassword}
                error={errors.confirmpassword}
              />
            </div>

            <div className="d-grid">
            <button className="btn btn-light col-2 m-auto gap-2 my-2" type="submit" id="submit">
              Submit
            </button>
            </div>

            <div className="border"></div>

            <div className="d-grid">
            <Link className="btn text-light col-6 m-auto gap-2" to="/" id="have-an-acc">
               Go to Login
            </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
