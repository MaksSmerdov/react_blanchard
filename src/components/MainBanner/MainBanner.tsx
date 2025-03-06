import HeaderComponent from '../Header/Header';
import styles from './MainBanner.module.scss';
export default function MainBanner() {
  return (
    <div className={`${styles['main-banner']}`}>
      <HeaderComponent />
    </div>
  );
}
