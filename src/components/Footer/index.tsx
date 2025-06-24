import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">
        Entenda como funciona a técnica pomodoro 🍅
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com{" "}
        <strong style={{ fontWeight: "bold", fontSize: "1.8rem" }}>⚛</strong>
      </RouterLink>
    </footer>
  );
}
