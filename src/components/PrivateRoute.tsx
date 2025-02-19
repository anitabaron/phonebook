import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { PrivateRouteProps } from "src/types/types";

export default function PrivateRoute({
  children,
  redirectPath,
}: PrivateRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectPath} replace />;
}
