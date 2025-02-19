import type { RootState } from "../store";

export const selectLoading = (state: RootState) => state.contacts.loading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectContacts = (state: RootState) => state.contacts.items;
