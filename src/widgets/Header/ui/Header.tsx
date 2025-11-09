import styles from './Header.module.scss';
import SearchIcon from '@/shared/assets/icons/search.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import FavoritesIcon from '@/shared/assets/icons/favorites.svg';
import TrashIcon from '@/shared/assets/icons/trash.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.burger}>
        <span></span>
      </div>
      <nav className={styles.list}>
        <a href="" className={styles.link}>new</a>
        <a href="" className={styles.link}>каталог</a>
        <a href="" className={styles.link}>о нас</a>
      </nav>
      <h1 className={styles.title}>yanki</h1>
      <div className={styles.languages}>
        <div className={styles.switchLang}>ru</div>
        <div className={styles.switchCurrency}>uah</div>
      </div>
      <div className={styles.widgets}>
        <SearchIcon className={styles.icon}/>
        <ProfileIcon className={styles.icon}/>
        <FavoritesIcon className={styles.icon}/>
        <TrashIcon className={styles.icon}/>
      </div>
    </header>
  );
};
