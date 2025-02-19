import { createSlice, PayloadAction, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { ContactType, ContactsState } from "src/types/types";

const initialState: ContactsState = {
  items: [],
  loading: false,
  error: null,
};

const handlePending = (state: ContactsState) => {
  state.loading = true;
};
const handleRejected = (
  state: ContactsState
  // action: PayloadAction<string | null>
) => {
  state.loading = false;
  // state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<ContactType[]>) => {
          state.loading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<ContactType>) => {
          state.loading = false;
          state.error = null;
          state.items.push(action.payload);
        }
      )
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<{ id: string }>) => {
          state.loading = false;
          state.error = null;
          state.items = state.items.filter(
            (contact) => contact.id !== action.payload.id
          );
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
