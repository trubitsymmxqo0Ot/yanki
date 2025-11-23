import { AccType } from "../async/fetchCurrency";

export interface CurrencySchema {
    value: AccType;
    selectedCurrency: string;
    isLoading: boolean;
    error: string;
}