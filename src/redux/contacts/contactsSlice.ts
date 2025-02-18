import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
  },
  reducers: {
    addContact: (state, action) => {
      // state.contacts.items.push(action.payload);
    },
    removeContact: (state, action) => {
      // state.contacts.items = state.contacts.items.filter(
      //   (contact) => contact.id !== action.payload.id
      // );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers: {
//     addContact: (state, action: PayloadAction<Contact>) => {
//       state.contacts.items.push(action.payload);
//     },
//     deleteContact: (state, action: PayloadAction<string>) => {
//       state.contacts.items = state.contacts.items.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, (state) => {
//         state.contacts.loading = true;
//       })
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.contacts.loading = false;
//         state.contacts.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, (state, action) => {
//         state.contacts.loading = false;
//         state.contacts.error = action.error.message;
//       });
//   },
// });

// // import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// // import { addContact, deleteContact, fetchContacts } from './operations';
// // import type { RootState } from '../store';

// // const handlePending = (state: RootState) => {
// //   state.contacts.loading = true;
// // };
// // const handleRejected = (state, action) => {
// //   state.contacts.loading = false;
// //   state.contacts.error = action.payload;
// // };

// // const contactsSlice = createSlice({
// //   name: 'contacts',
// //   initialState: {
// //     contacts: {
// //       items: [],
// //       loading: false,
// //       error: null,
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchContacts.fulfilled, (state, action) => {
// //         state.contacts.loading = false;
// //         state.contacts.error = null;
// //         state.contacts.items = action.payload;
// //       })
// //       .addCase(addContact.fulfilled, (state, action) => {
// //         state.contacts.loading = false;
// //         state.contacts.error = null;
// //         state.contacts.items.push(action.payload);
// //       })
// //       .addCase(deleteContact.fulfilled, (state, action) => {
// //         state.contacts.loading = false;
// //         state.contacts.error = null;
// //         state.contacts.items = state.contacts.items.filter(
// //           (contact) => contact.id !== action.payload.id
// //         );
// //       })
// //       .addMatcher(
// //         isAnyOf(
// //           fetchContacts.pending,
// //           addContact.pending,
// //           deleteContact.pending
// //         ),
// //         handlePending
// //       )
// //       .addMatcher(
// //         isAnyOf(
// //           fetchContacts.rejected,
// //           addContact.rejected,
// //           deleteContact.rejected
// //         ),
// //         handleRejected
// //       );
// //   },
// // });

// // export const contactsReducer = contactsSlice.reducer;
