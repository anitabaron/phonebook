import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { RestrictedRouteProps } from "src/types/types";

export default function RestrictedRoute({
  children,
  redirectPath,
}: RestrictedRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
}
