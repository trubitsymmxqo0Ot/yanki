import styles from "./SwitchModal.module.scss";
import { classNames } from "../lib/classNames/classNames";
import { Dispatch, SetStateAction } from "react";
import Arrow from "@/shared/assets/icons/arrow.svg";
export interface HookType {
  isOpen: boolean;
  title: string;
}

export interface SwitchModalProps {
  className: string;
  hook: HookType;
  array: string[];
  arrow?: boolean;
  setIsOpen: Dispatch<SetStateAction<{ isOpen: boolean; title: string }>>;
}

export const SwitchModal = (props: SwitchModalProps) => {
  const { className, hook, array, arrow = false, setIsOpen } = props;
  const { isOpen, title } = hook;
  const arrayWithoutTitlte = array.filter((item) => item !== title);
  const onOpenModal = () => {
    setIsOpen({
      ...hook,
      isOpen: !hook.isOpen,
    });
  };

  const onChangeTitle = (value: string) => {
    setIsOpen({
      isOpen: false,
      title: value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={() => onOpenModal()}>
        <div className={styles.body}>
          <div className={styles.title}>{hook.title}</div>
          {arrow && <Arrow className={styles.icon} />}
        </div>
      </div>
      <div className={classNames(styles[className], { [styles.open]: isOpen })}>
        {arrayWithoutTitlte.map((item) => (
          <p
            key={item}
            onClick={() => onChangeTitle(item)}
            className={styles.text}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
