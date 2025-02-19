import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { ReactElement } from "react";

interface PrivateRouteProps {
  Component: ReactElement;
  redirectPath: string;
}

export default function PrivateRoute({
  Component,
  redirectPath,
}: PrivateRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectPath} replace />;
}
