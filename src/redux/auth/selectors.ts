import { RootState } from "../store";

export const selectIsLoggedIn = (state: RootState) =>
  console.log(selectIsLoggedIn);
// export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => console.log(selectUser);
// export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshUser = (state: RootState) =>
  console.log("selectIsRefreshUser");

// export const selectIsRefreshUser = (state: RootState) =>
//   state.auth.isRefreshUser;
