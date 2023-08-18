import styles from './command.module.scss';

import Typewriter from './Typewriter/Typewriter';

export default function Command() {
  const welcomeText = `
  Text in a pre element
is displayed

























in a fixed-width
font, and it preserves
both     

spaces and
line breaks

font, and it preserves
both     

spaces and
line breaks`;
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={styles.terminalHeaderButton}></div>
          ))}
        </div>
        <div className={styles.terminalBody}>
          <Typewriter text={welcomeText} delay={100} />
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
    </div>
  );
}
