import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./redux/store";
import { lazy, useEffect } from "react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
// import RestrictedRoute from "./components/RestrictedRoute";
// import PrivateRoute from "./components/PrivateRoute";
import { selectError, selectLoading } from "./redux/contacts/selectors";
import { setNameFilter, setNumberFilter } from "./redux/filters/filtersSlice";
import { refreshUser } from "./redux/auth/operations";
import { fetchContacts } from "./redux/contacts/operations";
import { selectIsRefreshUser, selectIsLoggedIn } from "./redux/auth/selectors";

const HomePage = lazy(() => import("./pages/Home"));
const ContactsPage = lazy(() => import("./pages/Contacts"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  const dispatch: AppDispatch = useDispatch();
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

  // if (error)
  //   return (
  //     <>
  //       <Layout>
  //         <p>Error: {error}</p>
  //       </Layout>
  //     </>
  //   );

  // if (loading)
  //   return (
  //     <>
  //       <h1>Phonebook</h1>
  //       <p>Loading...</p>
  //     </>
  //   );

  return (
    <>
      <div className="info">
        <h2>I'm sorry for the Inconvenience!</h2> This website
        <h3>PHONEBOOK</h3> is currently being updated with TypeScript and is
        undergoing modifications. <br />
        Please check back soon! 🚧🔧
      </div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </>
  );
  // isRefreshUser ? (
  //   <p>refreshing...</p>
  // ) : (
  //   <>
  //     {/* <Layout> */}
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       {/* <Route
  //           path="/contacts"
  //           element={
  //             <PrivateRoute
  //               redirectPath="/login"
  //               Component={<ContactsPage />}
  //             />
  //           }
  //         />
  //         <Route
  //           path="/register"
  //           element={
  //             <RestrictedRoute
  //               redirectPath="/contacts"
  //               Component={<RegisterPage />}
  //             />
  //           }
  //         />
  //         <Route
  //           path="/login"
  //           element={
  //             <RestrictedRoute
  //               redirectPath="/contacts"
  //               Component={<LoginPage />}
  //             />
  //           } */}
  //       {/* /> */}
  //     </Routes>
  //     {/* </Layout> */}
  //   </>
  // );
}

export default App;
