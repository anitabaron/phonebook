import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { useId } from "react";
import * as Yup from "yup";

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const logInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (
    values: { email: string; password: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    const { email, password } = values;
    // dispatch(logIn({ email, password } as any));
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={logInSchema}
        initialValues={{ email: "", password: "" }}
      >
        {() => (
          <Form className="auth-form">
            <label htmlFor="emailId">Email</label>
            <Field
              type="text"
              name="email"
              placeholder="Enter your email"
              id={emailId}
            />
            <ErrorMessage name="email" component="div" className="error" />
            <label htmlFor="passwordId">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              id={passwordId}
            />
            <ErrorMessage name="password" component="div" className="error" />

            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
