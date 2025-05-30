import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica pomodoro 🍅</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com{' '}
        <strong style={{ fontWeight: 'bold', fontSize: '1.8rem' }}>⚛</strong>
      </a>
    </footer>
  );
}
