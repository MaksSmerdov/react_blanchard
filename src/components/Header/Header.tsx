import { useState } from 'react';
import styles from './Header.module.scss';
import Dropdown from './DropDown/DropDown';
import { dropdownData, navLink } from '.';

export default function HeaderComponent() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className={styles['header__fixed']}>
      <div className={styles['header__main-nav']}>
        <div className={`${styles['container']} ${styles['header__container-main-nav']}`}>
          <button className={styles['header__menu-burger']}></button>
          <img className={styles['header__menu-logo']} src="/assets/svg/logo.svg" alt="logo" />
          <form className={styles['header__form-btn']}></form>
          <div className={styles['header__nav-menu']}>
            <nav className={styles['header__nav-site']}>
              <ul className={styles['header__nav-list']}>
                {navLink.map((name) => (
                  <li key={name} className={styles['header__nav-item']}>
                    <a className={styles['header__nav-link']} href="#">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button className={styles['header__nav-entrance']}>Войти</button>
          </div>
        </div>
      </div>
      <div className={styles['header__additional-nav']}>
        <div className={`${styles['container']} ${styles['header__container-additional-nav']}`}>
          <ul className={styles['header__additional-list']}>
            <Dropdown
              id="realism"
              title="Реализм"
              items={dropdownData.realism}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
            <Dropdown
              id="impressionism"
              title="Импрессионизм"
              items={dropdownData.impressionism}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
            <Dropdown
              id="postimpressionism"
              title="Постимпрессионизм"
              items={dropdownData.postimpressionism}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
            <Dropdown
              id="avangard"
              title="Авангард"
              items={dropdownData.avangard}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
            <Dropdown
              id="futurizm"
              title="Футуризм"
              items={dropdownData.futurizm}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
          </ul>
        </div>
      </div>
    </header>
  );
}
