import styles from "./Header.module.scss";
import SearchIcon from "@/shared/assets/icons/search.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import FavoritesIcon from "@/shared/assets/icons/favorites.svg";
import TrashIcon from "@/shared/assets/icons/trash.svg";
import { SwitchModal } from "@/shared/ui/SwitchModal/SwitchModal";
import { useState } from "react";
import { language, currency } from "../../model/lanuages";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [languageSwitcher, setLanguageSwitcher] = useState({
    isOpen: false,
    title: "ru",
  });
  const [currencySwitcher, setCurrencySwitcher] = useState({
    isOpen: false,
    title: "uah",
  });

  const {t} = useTranslation("mainPage");

  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <span></span>
      </div>
      <nav className={styles.list}>
        <a href="" className={styles.link}>
          {t('new')}
        </a>
        <a href="" className={styles.link}>
          {t("каталог")}
        </a>
        <a href="" className={styles.link}>
          {t("о нас")}
        </a>
      </nav>
      <h1 className={styles.title}>{t("yanki")}</h1>
      <div className={styles.languages}>
        <div className={styles.language}>
          <SwitchModal
            className="switcher"
            hook={languageSwitcher}
            array={language}
            setIsOpen={setLanguageSwitcher}
            arrow={true}
          />
        </div>
        <div className={styles.currency}>
          <SwitchModal
            className="switcher"
            hook={currencySwitcher}
            array={currency}
            setIsOpen={setCurrencySwitcher}
            arrow={true}
          />
        </div>
      </div>
      <div className={styles.widgets}>
        <SearchIcon className={styles.icon} />
        <ProfileIcon className={styles.icon} />
        <FavoritesIcon className={styles.icon} />
        <TrashIcon className={styles.icon} />
      </div>
    </header>
  );
};
