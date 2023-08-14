import styles from './contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles['coffee-header']}>
        <div
          className={`${styles['coffee-header__buttons']} ${styles['coffee-header__button-one']}`}
        ></div>
        <div
          className={`${styles['coffee-header__buttons']} ${styles['coffee-header__button-two']}`}
        ></div>
        <div className={styles['coffee-header__display']}></div>
        <div className={styles['coffee-header__details']}></div>
      </div>
      <div className={styles['coffee-machine']}>
        <div className={styles['spout']}></div>
        <div className={styles['coffee-machine__arm']}></div>
        <div className={styles['liquid']}></div>
        <div className={`${styles['steam']} ${styles['steam-one']}`}></div>
        <div className={`${styles['steam']} ${styles['steam-two']}`}></div>
        <div className={`${styles['steam']} ${styles['steam-three']}`}></div>
        <div className={`${styles['steam']} ${styles['steam-four']}`}></div>
        <div className={styles['coffee-medium__cup']}></div>
      </div>
      <div className={styles['coffee-footer']}></div>
    </div>
  );
};

export default Contact;
