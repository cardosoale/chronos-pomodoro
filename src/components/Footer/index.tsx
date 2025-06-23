import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro/">
        Entenda como funciona a técnica pomodoro 🍅
      </Link>
      <Link to="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com{" "}
        <strong style={{ fontWeight: "bold", fontSize: "1.8rem" }}>⚛</strong>
      </Link>
    </footer>
  );
}
