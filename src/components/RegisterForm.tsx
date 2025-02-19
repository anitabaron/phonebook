import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { register } from "../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { AppDispatch } from "@redux/store";
import * as Yup from "yup";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const dispatch = useDispatch<AppDispatch>();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(20, "Name is too long")
      .required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(8, "Password is too short")
      .max(25, "Password is too long")
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  const handleRegister = (
    values: RegisterFormValues,
    { resetForm }: FormikHelpers<RegisterFormValues>
  ) => {
    console.log("Form values:", values);
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleRegister}
        validationSchema={registerSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
      >
        <Form className="auth-form">
          <label htmlFor={nameId}>Login</label>
          <Field
            type="text"
            name="name"
            placeholder="Enter your login"
            id={nameId}
          />
          <ErrorMessage name="name" component="div" className="error" />
          <label htmlFor={emailId}>Email</label>
          <Field
            type="email"
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

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </>
  );
}
