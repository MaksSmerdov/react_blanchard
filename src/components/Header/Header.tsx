import { useState } from 'react';
import styles from './Header.module.scss';

export default function HeaderComponent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <header>
      <div className={`${styles['main-banner']}`}>
        <div className={`${styles['header-container']}`}>
          <div className={`${styles['header-container__top']}`}>
            <div className={`${styles['logo']}`}>
              <h1 className={`${styles['logo--upper']}`}>Blanchard</h1>
              <span className={`${styles['logo--lower']}`}>художественная галерея</span>
            </div>
            <ul className={`${styles['text-block__list']}`}>
              {['О нас', 'Галерея', 'Каталог', 'Событие', 'Проекты', 'Контакты'].map((item, index) => (
                <li
                  key={index}
                  className={`${styles['text-block__item']} ${activeIndex === index ? styles['active'] : ''}`}
                  onClick={() => handleClick(index)}
                >
                  <a className={`${styles['text-block__link']}`}>{item}</a>
                </li>
              ))}
            </ul>
            <div className={`${styles['button-block']}`}>
              <button className={`${styles['button-block--name']}`}>Войти</button>
            </div>
          </div>
          <div className={`${styles['header-container__bottom']}`}>
            <div className={`${styles['header-button__container']}`}>
              <button className={`${styles['header-button']}`}>Реализм</button>
              <button className={`${styles['header-button']}`}>Импрессионизм</button>
              <button className={`${styles['header-button']}`}>Постимпрессионизм</button>
              <button className={`${styles['header-button']}`}>Авангард</button>
              <button className={`${styles['header-button']}`}>Футуризм</button>
            </div>

            <div className={`${styles['header-input__container']}`}>
              <input className={`${styles['header-input']}`} type="text" placeholder="Поиск по сайту" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
