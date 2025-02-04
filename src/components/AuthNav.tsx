import { Link } from "react-router-dom";

const AuthNav = (): JSX.Element => {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default AuthNav;
