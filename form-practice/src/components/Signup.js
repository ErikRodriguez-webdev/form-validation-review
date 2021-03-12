import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .required("*** This is a required field ***")
    .email("Use a valid email"),
  password: Yup.string().required("*** This is a required field ***"),
  firstname: Yup.string().min(2).required("*** This is a required field ***"),
  lastname: Yup.string().min(2).required("*** This is a required field ***"),
});

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  return (
    <>
      <div className="signupContainer">
        <Formik
          initialValues={formData}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="signupForm" autoComplete="Off">
            <Field
              name="email"
              placeholder="Email *"
              className="signupField"
              autoComplete="Off"
            />
            <ErrorMessage name="email">
              {(error) => <div className="error">{error}</div>}
            </ErrorMessage>

            <Field
              name="password"
              placeholder="Password *"
              className="signupField"
            />
            <ErrorMessage name="password">
              {(error) => <div className="error">{error}</div>}
            </ErrorMessage>

            <Field
              name="firstname"
              placeholder="First Name *"
              className="signupField"
            />
            <ErrorMessage name="firstname">
              {(error) => <div className="error">{error}</div>}
            </ErrorMessage>

            <Field
              name="lastname"
              placeholder="Last Name *"
              className="signupField"
            />
            <ErrorMessage name="lastname">
              {(error) => <div className="error">{error}</div>}
            </ErrorMessage>

            <button type="submit" className="signupButton">
              Create Account
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Signup;
