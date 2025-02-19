import UserNav from "./UserNav";
import AuthNav from "./AuthNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className="navi">
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        {isLoggedIn ? <UserNav /> : <AuthNav />}
      </nav>
    </div>
  );
}
