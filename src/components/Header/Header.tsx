import styles from './Header.module.scss';

export default function HeaderComponent() {
  return (
    <header className={`${styles['header__fixed']}`}>
      <div className={`${styles['header__main-nav']}`}>
        <div className={`${styles['container']} ${styles['header__container-main-nav']}`}>
          <button className={`${styles['header__menu-burger']}`}></button>
          <img className={`${styles['header__menu-logo']}`} src="/assets/svg/logo.svg" alt="logo" />
          <form className={`${styles['header__form-btn']}`}></form>
          <div className={`${styles['header__nav-menu']}`}>
            <nav className={`${styles['header__nav-site']}`}>
              <ul className={`${styles['header__nav-list']}`}>
                <li className={`${styles['header__nav-item']}`}>
                  <a className={`${styles['header__nav-link']}`} href="#">
                    О нас
                  </a>
                </li>
                <li className={`${styles['header__nav-item']}`}>
                  <a className={`${styles['header__nav-link']}`} href="#">
                    Галерея
                  </a>
                </li>
                <li className={`${styles['header__nav-item']}`}>
                  <a className={`${styles['header__nav-link']}`} href="#">
                    Каталог
                  </a>
                </li>
                <li className={`${styles['header__nav-item']}`}>
                  <a className={`${styles['header__nav-link']}`} href="#">
                    События
                  </a>
                </li>
                <li className={`${styles['header__nav-item']}`}>
                  <a className={`${styles['header__nav-link']}`} href="#">
                    Проекты
                  </a>
                </li>
                <li className={`${styles['header__nav-item']}`}>
                  <a className={`${styles['header__nav-link']}`} href="#">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <button className={`${styles['header__nav-entrance']}`}>Войти</button>
          </div>
        </div>
      </div>
      <div className={`${styles['header__additional-nav']}`}>
        <div className={`${styles['container']} ${styles['header__container-additional-nav']}`}>
          <ul className={`${styles['header__additional-list']}`}>
            <li className={`${styles['header__additional-item']}`}>
              <button className={`${styles['header__additional-btn']}`}>Реализм</button>
            </li>
            <li className={`${styles['header__additional-item']}`}>
              <button className={`${styles['header__additional-btn']}`}>Импрессионизм</button>
            </li>
            <li className={`${styles['header__additional-item']}`}>
              <button className={`${styles['header__additional-btn']}`}>Постимпрессионизм</button>
            </li>
            <li className={`${styles['header__additional-item']}`}>
              <button className={`${styles['header__additional-btn']}`}>Авангард</button>
            </li>
            <li className={`${styles['header__additional-item']}`}>
              <button className={`${styles['header__additional-btn']}`}>Футуризм</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
