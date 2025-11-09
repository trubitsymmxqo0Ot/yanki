import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Header.module.scss";
export interface HeaderProps {
  className: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <div className={styles.burger}>
        <span></span>
      </div>
      <nav className={styles.list}>
        <a href="#" className={styles.link}>new</a>
        <a href="#" className={styles.link}>каталог</a>
        <a href="#" className={styles.link}>о нас</a>
      </nav>
      <h1 className={styles.title}>yanki</h1>
      <div className={classNames(styles.language, {[styles.follows]: true}, [])}>ru</div>
      <div className=''>qweqw</div>
    </div>
  );
};
