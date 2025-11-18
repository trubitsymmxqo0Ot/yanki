import { SwitchModal } from "@/shared/ui/SwitchModal/SwitchModal";
import { language } from "../../model/lanuages";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const HeaderSwitcherLanguage = () => {
  const { i18n } = useTranslation("mainPage");
  const [currencySwitcher, setCurrencySwitcher] = useState({
      isOpen: false,
      title: "ru",
    });

    const onToggleModal = () => {
      setCurrencySwitcher(prev => ({
        ...prev,
        isOpen: !prev.isOpen,
      }));
    }

    const onChangeTitle = (title: string) => {
      setCurrencySwitcher(prev => ({
        ...prev,
        isOpen: false,
        title: title,
      }))
    }

    useEffect(() => {
      console.log(currencySwitcher.title);
      i18n.changeLanguage(currencySwitcher.title);
    }, [currencySwitcher.title])

    return (
    <SwitchModal
      array={language}
      hook={currencySwitcher}
      onChangeTitle={onChangeTitle}
      onToggleModal={onToggleModal}
      arrow={true}
      className="switcher"
    />
  );
};
