import styles from "./SwitchModal.module.scss";
import { classNames } from "../../lib/classNames/classNames";
import Arrow from "@/shared/assets/icons/arrow.svg";
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
  const { className = "", hook, array, arrow = false, onToggleModal, onChangeTitle } = props;
  const { isOpen, title } = hook;
  const arrayWithoutTitlte = array.filter((item) => item !== title);

  return (
    <div className={styles.wrapper}>
      <div onClick={() => onToggleModal()}>
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
