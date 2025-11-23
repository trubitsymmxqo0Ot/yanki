import { useAppSelector } from "./redux";

export const useCurrency = () => {
  const currency = useAppSelector((state) => state.currency.value);
  const selectedCurrency = useAppSelector((state) => state.currency.selectedCurrency);
  const convert = (sum: number) => {
    if (currency[selectedCurrency] === currency['uah']) return sum;
    return Math.floor(sum / currency['uah'] * currency[selectedCurrency]);
  };

  return convert;
};
