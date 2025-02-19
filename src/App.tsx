import Layout from "./components/Layout";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { selectError, selectLoading } from "./redux/contacts/selectors";
import { setNameFilter, setNumberFilter } from "./redux/filters/filtersSlice";
import { refreshUser } from "./redux/auth/operations";
import { fetchContacts } from "./redux/contacts/operations";
import { selectIsRefreshUser, selectIsLoggedIn } from "./redux/auth/selectors";
import type { AppDispatch } from "./redux/store";
import "./styles.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const HomePage = lazy(() => import("./pages/Home"));
const ContactsPage = lazy(() => import("./pages/Contacts"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isRefreshUser = useSelector(selectIsRefreshUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(setNameFilter(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setNumberFilter(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isRefreshUser && isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshUser, isLoggedIn]);

  if (error)
    return (
      <>
        <Layout>
          <p>Error: {error}</p>
        </Layout>
      </>
    );

  if (loading)
    return (
      <>
        <h1>Phonebook</h1>
        <p>Loading...</p>
      </>
    );

  return isRefreshUser ? (
    <p>refreshing...</p>
  ) : (
    <>
      <div className="info">
        <h2>I'm sorry for the Inconvenience!</h2> This website
        <h3>PHONEBOOK</h3> is currently being updated with TypeScript and is
        undergoing modifications. <br />
        Please check back soon! 🚧🔧
        <hr></hr>
      </div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectPath="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectPath="/contacts">
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectPath="/contacts">
                <LoginPage />
              </RestrictedRoute>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
