import styles from "./SwitchModal.module.scss";
import { classNames } from "../../lib/classNames/classNames";
import Arrow from "@/shared/assets/icons/arrow.svg";
import { JsxElem } from "@/shared/ui/Text/type/type";
import {Text} from "@/shared/ui/Text/Text";
export interface HookType {
  isOpen: boolean;
  title: string;
}

export interface SwitchModalProps {
  className?: string;
  hook: HookType;
  array: string[];
  arrow?: boolean;
  onToggleModal: () => void;
  onChangeTitle: (title: string) => void;
}

export const SwitchModal = (props: SwitchModalProps) => {
  const {
    className = "",
    hook,
    array,
    arrow = false,
    onToggleModal,
    onChangeTitle,
  } = props;
  const { isOpen, title } = hook;
  const arrayWithoutTitlte = array.filter((item) => item !== title);

  return (
    <div className={styles.wrapper}>
      <div onClick={() => onToggleModal()}>
        <div className={styles.body}>
          <Text Tag={JsxElem.PARAGRAPH} stylesClass={styles.title} decoration={true}>{hook.title}</Text>
          {arrow && (
            <Arrow
              className={classNames(styles.icon, {[styles.iconOpen]: isOpen})}            
            />
          )}
        </div>
      </div>
      <ul className={classNames(styles[className], { [styles.open]: isOpen })}>
        {arrayWithoutTitlte.map((item) => (
          <Text
            Tag={JsxElem.LIST}
            key={item}
            onClick={() => onChangeTitle(item)}
            stylesClass={styles.text}
            decoration={true}
          >
            {item}
          </Text>
        ))}
      </ul>
    </div>
  );
};
