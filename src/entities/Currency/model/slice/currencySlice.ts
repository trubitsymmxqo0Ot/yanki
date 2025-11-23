import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencySchema } from "../types/CurrencySchema";
import { fetchCurrency } from "../async/fetchCurrency";

const initialState: CurrencySchema = {
  value: {},
  selectedCurrency: "uah",
  isLoading: false,
  error: "",
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.value = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: currencyAction } = currencySlice;
export const { reducer: currencyReducer } = currencySlice;
