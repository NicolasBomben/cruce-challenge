import styles from './Control.module.css';
import FlechaArriba from '../../assets/flecha-arriba.png';

export const Control = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.controlContainer}>
      <button className={styles.control} onClick={scrollToTop}>
        <img src={FlechaArriba} alt="volver al principio" className={styles.img}/>
        <p className={styles.text}>Subir</p>
      </button>
    </div>
  )
}
