import styles from "./styles.module.scss";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export function Header() {
  const currenteDate = format(new Date(), "EEEEEE, d MMM", {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <img src="logo.svg" alt="podcaster" />
      <p>O melhor para você ouvir, sempre</p>
      <span>{currenteDate}</span>
    </header>
  );
}
