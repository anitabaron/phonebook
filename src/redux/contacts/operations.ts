import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      const error = e as Error;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }: { name: string; number: string }, thunkAPI) => {
    try {
      const newContact = {
        name,
        number,
      };
      const response = await axios.post(`/contacts`, newContact);
      toast.success("Contact added!");
      return response.data;
    } catch (e) {
      const error = e as Error;
      toast.error("Failed to add contact.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: string, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.error("Contact deleted!");
      return { id: contactId };
    } catch (e) {
      const error = e as Error;
      toast.error("Failed to add contact.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
