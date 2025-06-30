//styles, icons
import styles from "./Control.module.css";
import { ArrowUp } from "lucide-react";

//funcion para volver al top del home. usando el objeto window con su metodo.
export const Control = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.controlContainer}>
      <button className={styles.button} onClick={scrollToTop}>
        <ArrowUp alt="volver al principio"/>
        <p className={styles.text}>Subir</p>
      </button>
    </div>
  );
};
