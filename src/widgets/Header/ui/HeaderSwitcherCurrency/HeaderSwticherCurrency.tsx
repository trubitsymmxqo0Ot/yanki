import { SwitchModal } from "@/shared/ui/SwitchModal/SwitchModal";
import { useEffect, useState } from "react";
import { currency } from "@/shared/const/language";
import { fetchCurrency } from "@/entities/Currency/model/async/fetchCurrency";
import { useAppDispatch, useAppSelector } from "@/shared/config/customHooks/redux";
import { currencyAction } from "@/entities/Currency/model/slice/currencySlice";

export const HeaderSwitcherCurrency = () => {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(state => state.currency.selectedCurrency);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchCurrency(currency)); 
  }, [])

  const onToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onChangeTitle = (title: string) => {
    dispatch(currencyAction.changeCurrency(title));
    setIsOpen(false);
  };

  return (
    <SwitchModal
      array={currency}
      hook={{title: selectedCurrency, isOpen}}
      onToggleModal={onToggleModal}
      onChangeTitle={onChangeTitle}
      arrow={true}
      className="switcher"
    />
  );
};
