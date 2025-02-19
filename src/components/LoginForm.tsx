import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { useId } from "react";
import { AppDispatch } from "@redux/store";
import { LoginValues } from "src/types/types";
import * as Yup from "yup";

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const emailId = useId();
  const passwordId = useId();

  const logInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (
    values: LoginValues,
    { resetForm }: FormikHelpers<LoginValues>
  ) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={logInSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="auth-form">
          <label htmlFor={emailId}>Email</label>
          <Field
            type="text"
            name="email"
            placeholder="Enter your email"
            id={emailId}
          />
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor={passwordId}>Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            id={passwordId}
          />
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit" className="auth-button">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}
