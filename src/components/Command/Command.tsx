import styles from './command.module.scss';
export default function Command() {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalHeaderButton}></div>
          <div className={styles.terminalHeaderButton}></div>
          <div className={styles.terminalHeaderButton}></div>
        </div>
        <pre></pre>
      </div>
    </div>
  );
}
