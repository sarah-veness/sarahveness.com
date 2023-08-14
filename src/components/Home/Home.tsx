import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homePageContainer}>
      <span className={styles.backgroundName}>SARAH</span>
      <span className={styles.backgroundName}>VENESS</span>
    </div>
  );
}
