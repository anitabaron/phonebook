import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filters: {
      name: "",
      number: "",
    },
  },
  reducers: {
    setNameFilter(state, action) {
      state.filters.name = action.payload;
    },
    setNumberFilter(state, action) {
      state.filters.number = action.payload;
    },
  },
});

export const { setNameFilter, setNumberFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
