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
      <div className={styles['coffee-medium']}>
        <div className={styles['coffe-medium__exit']}></div>
        <div className={styles['coffee-medium__arm']}></div>
        <div className={styles['coffee-medium__liquid']}></div>
        <div
          className={`${styles['coffee-medium__smoke']} ${styles['coffee-medium__smoke-one']}`}
        ></div>
        <div
          className={`${styles['coffee-medium__smoke']} ${styles['coffee-medium__smoke-two']}`}
        ></div>
        <div
          className={`${styles['coffee-medium__smoke']} ${styles['coffee-medium__smoke-three']}`}
        ></div>
        <div
          className={`${styles['coffee-medium__smoke']} ${styles['coffee-medium__smoke-for']}`}
        ></div>
        <div className={styles['coffee-medium__cup']}></div>
      </div>
      <div className={styles['coffee-footer']}></div>
    </div>
  );
};

export default Contact;
