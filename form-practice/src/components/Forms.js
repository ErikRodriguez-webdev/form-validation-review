import { useState } from "react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  firstname: Yup.string().min(2).max(50).required("* First Name Required"),
  lastname: Yup.string().min(2).max(50).required("* Last Name Required"),
  email: Yup.string().email().required("* Email Required"),
  birthmonth: Yup.number().min(2).required("* Birth Month Required"),
  birthday: Yup.number().min(2).required("* Birth Day Required"),
  birthyear: Yup.number().min(2).required("* Birth Year Required"),
  gender: Yup.string().max(1, "Male or Female").required("* Gender Required"),
  age: Yup.number().min(18).required("* Must be 18+"),
});

const Forms = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    birthmonth: 0,
    birthday: 0,
    birthyear: 0,
    gender: "",
    age: 0,
  });

  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={FormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <Field name="firstname" />
            {errors.firstname ? (
              <div className="error">{errors.firstname}</div>
            ) : null}
            <Field name="lastname" />
            {errors.lastname ? (
              <div className="error">{errors.lastname}</div>
            ) : null}
            <Field name="email" />
            {errors.email ? <div className="error">{errors.email}</div> : null}
            <Field name="birthmonth" />
            {errors.birthmonth ? (
              <div className="error">{errors.birthmonth}</div>
            ) : null}
            <Field name="birthday" />
            {errors.birthday ? (
              <div className="error">{errors.birthday}</div>
            ) : null}
            <Field name="birthyear" />
            {errors.birthyear ? (
              <div className="error">{errors.birthyear}</div>
            ) : null}
            <Field name="gender" />
            {errors.gender ? (
              <div className="error">{errors.gender}</div>
            ) : null}
            <Field name="age" />
            {errors.age ? <div className="error">{errors.age}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Forms;
