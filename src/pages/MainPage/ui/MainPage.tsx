import first from "@/shared/assets/mainPage/01.jpg";
import second from "@/shared/assets/mainPage/02.jpg";
import third from "@/shared/assets/mainPage/03.jpg";
import styles from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui/Text/Text";
import { JsxElem } from "@/shared/ui/Text/type/type";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Theme } from "@/shared/const/theme";
import Arrow from "@/shared/assets/icons/arrow.svg";
import { useCurrency } from "@/shared/config/customHooks/useCurrency";

export const MainPage = () => {
  const { t } = useTranslation("mainPage");
  const convert = useCurrency();
  const answer = convert(2000);
  return (
    <div className={classNames(styles.body, {}, [Theme.LIGHT])}>
      <div className={styles.bgImage}>
        <img src={first} alt="Задний фон с моделью" className={styles.one} />
        <img src={second} alt="Задний фон с моделью" className={styles.two} />
        <img src={third} alt="Задний фон с моделью" className={styles.three} />
      </div>
      <p className={styles.test}>{answer}</p>
      <div className={styles.content}>
        <Text Tag={JsxElem.SUB_TITLE} stylesClass={styles.title}>
          {t("Новая коллекция")}
        </Text>
        <hr className={styles.line} />
        <a href="#" className={styles.item}>
          <Text Tag={JsxElem.PARAGRAPH} stylesClass={styles.subTitle}>
            {t("смотреть новинки")}
          </Text>
          <Arrow className={styles.icon}/>
        </a>
      </div>
    </div>
  );
};
