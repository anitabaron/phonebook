import type { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filters.filters.name;
export const selectFilterNumber = (state: RootState) =>
  state.filters.filters.number;
