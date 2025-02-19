import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "src/types/types";

const initialState: FiltersState = {
  name: "",
  number: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setNameFilter(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setNumberFilter(state, action: PayloadAction<string>) {
      state.number = action.payload;
    },
    clearFilter(state) {
      state.name = "";
      state.number = "";
    },
  },
});

export const { setNameFilter, setNumberFilter, clearFilter } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
