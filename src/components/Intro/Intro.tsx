import styles from './Intro.module.scss';

export default function IntroComponent() {
  return (
    <main>
      <section className={`${styles['section-intro']}`}>
        <div className={`${styles['intro-background']}`}>
          <img className={`${styles['intro-img']}`} src="/assets/img/header-background.png" alt="" />
        </div>
        <div className={`${styles['swiper']} ${styles['swiper-intro']}`}>
          <div className={`${styles['swiper-wrapper']}`}>
            <div className={`${styles['swiper-slide']}`}></div>
          </div>
        </div>
        <div className={`${styles['container']} ${styles['intro__container']}`}>
          <h2 className={`${styles['intro__title']} ${styles['title-reset']}`}>Прикоснитесь к&nbsp;прекрасному</h2>
          <p className={`${styles['intro__descr']} ${styles['descr-reset']}`}>
            Мы вынуждены отталкиваться от того, что реализация намеченных плановых заданий создаёт предпосылки для новых
            предложений.
          </p>
          <a className={`${styles['intro__btn']} ${styles['btn-reset']}`} href="#">
            Подписаться на рассылку
          </a>
        </div>
      </section>
    </main>
  );
}
