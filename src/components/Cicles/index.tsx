import styles from './styles.module.css';

export function Cicles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycleDot} ${styles.worktime}`}></span>
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
