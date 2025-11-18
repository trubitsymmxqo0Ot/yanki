import { FC, ReactNode } from "react";
import { JsxElem } from "./type/type";
import { Theme } from "@/shared/const/theme"; 
import styles from "./Text.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type TargetType = "_blank" | "_self";

interface TextProps {
  enumClass?: string;
  stylesClass?: string;
  Tag: JsxElem;
  href?: string;
  target?: TargetType;
  children: ReactNode;
  onClick?: () => void;
  decoration?: boolean;
  theme?: Theme;
}

export const Text: FC<TextProps> = (options: TextProps) => {
  const {
    enumClass,
    stylesClass,
    href = "",
    target = "",
    Tag,
    children,
    onClick,
    decoration = false,
    theme,
  } = options;
  const props = {
    ...(href.length > 0 && { href }),
    ...(target && { target }),
    ...(onClick && { onClick }),
  };
  const mods = {
    [styles.decoration]: decoration,
    [styles[enumClass]]: enumClass,
  };
  return (
    <Tag className={classNames(stylesClass, {...mods}, [theme])} {...props}>
      {children}
    </Tag>
  );
};
