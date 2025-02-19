import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { LoginValues, RegisterValues } from "src/types/types";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token: string) => {
  console.log("Setting token:", token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: RegisterValues, thunkAPI) => {
    try {
      console.log("Sending credentials:", credentials);
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (e) {
      const error = e as Error;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials: LoginValues, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (e) {
      const error = e as Error;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    const error = e as Error;
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { auth: { token: string } };
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue("No token available");
    }
    try {
      setAuthHeader(persistToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (e) {
      const error = e as AxiosError;
      if (error.response && error.response.status === 401) {
        clearAuthHeader();
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
