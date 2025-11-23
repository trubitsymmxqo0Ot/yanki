import { createAsyncThunk } from "@reduxjs/toolkit";

interface IData {
  base: string;
  date: string;
  time_last_updated: number;
  rates: Record<string, number>;
}

export type AccType = Record<string, number>;

export const fetchCurrency = createAsyncThunk<
  AccType,
  string[],
  { rejectValue: string }
>("currency/value", async (currency) => {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data: IData = await response.json();
    return currency.reduce((acc: AccType, item: string) => {
      acc[item] = data.rates[item.toUpperCase()];
      return acc;
    }, {});
  } catch (e) {
    console.error("Ошибка при попытке получить валюту: " + e);
    return e;
  }
});
