import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { selectUser } from "../redux/auth/selectors";
import { AppDispatch } from "@redux/store";

export default function UserNav() {
  const dispatch = useDispatch<AppDispatch>();
  const userName = useSelector(selectUser);
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div>
        Welcome
        <b>{userName.name}</b>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
