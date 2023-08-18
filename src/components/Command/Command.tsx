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
        <div className={styles.terminalStartMessage}></div>
        <div className={styles.terminalInputContainer}>
          <label htmlFor="terminalInput" className={styles.inputLabel}>
            [sv:]
          </label>
          <input
            autoFocus
            name="terminalInput"
            type="text"
            className={styles.terminalInput}
          />
        </div>
        <div className={styles.terminalOutputContainer}></div>
      </div>
    </div>
  );
}
