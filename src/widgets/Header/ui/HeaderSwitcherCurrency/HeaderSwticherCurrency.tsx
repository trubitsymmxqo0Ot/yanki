import { SwitchModal } from "@/shared/ui/SwitchModal/SwitchModal";
import { currency } from "../../model/lanuages";
import { useState } from "react";

export const HeaderSwitcherCurrency = () => {
  const [switchCurrency, setSwitchCurrency] = useState({
    isOpen: false,
    title: "uah",
  });

  const onToggleModal = () => {
    setSwitchCurrency((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
    }));
  };

  const onChangeTitle = (title: string) => {
    setSwitchCurrency((prev) => ({
      ...prev,
      title,
    }));
  };

  return (
    <SwitchModal
      array={currency}
      hook={switchCurrency}
      onToggleModal={onToggleModal}
      onChangeTitle={onChangeTitle}
      arrow={true}
      className="switcher"
    />
  );
};
