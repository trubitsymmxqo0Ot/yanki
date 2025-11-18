import styles from "./Header.module.scss";
import SearchIcon from "@/shared/assets/icons/search.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import FavoritesIcon from "@/shared/assets/icons/favorites.svg";
import TrashIcon from "@/shared/assets/icons/trash.svg";
import { useTranslation } from "react-i18next";
import { HeaderSwitcherLanguage } from "../HeaderSwitcherLanguage/HeaderSwitcherLanguage";
import { HeaderSwitcherCurrency } from "../HeaderSwitcherCurrency/HeaderSwticherCurrency";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text/Text";
import { JsxClasses, JsxElem } from "@/shared/ui/Text/type/type";
import { Theme } from "@/shared/const/theme";

export const Header = () => {
  const { t } = useTranslation("mainPage");

  return (
    <header className={classNames("container", {}, [styles.header, Theme.LIGHT])}>
      <div className={styles.burger}>
        <span></span>
      </div>
      <nav className={styles.list}>
        <Text Tag={JsxElem.LINK} href="#" stylesClass={styles.link}>
          {t("new")}
        </Text>
        <Text href="#" Tag={JsxElem.LINK} stylesClass={styles.link}>
          {t("каталог")}
        </Text>
        <Text href="#" Tag={JsxElem.LINK} stylesClass={styles.link}>
          {t("о нас")}
        </Text>
      </nav>
      <Text Tag={JsxElem.MAIN_TITLE} enumClass={JsxClasses.TITLE}>{t("yanki")}</Text>
      <div className={styles.languages}>
        <div className={styles.language}>
          <HeaderSwitcherLanguage />
        </div>
        <div className={styles.currency}>
          <HeaderSwitcherCurrency />
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
