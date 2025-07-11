import styles from './Contenido.module.css';

export const Contenido = () => {
  return (
    <div className={styles.container}>
        <h1 className={`${styles.title} ${styles.titleDesktop}`}>Llegó el invierno, encontralo antes que nadie</h1>
        <h1 className={`${styles.title} ${styles.titleMobile}`}>Llegó el invierno en,</h1>
        <h5 className={styles.subtitle}>La colección más completa de Game of Thrones está en X</h5>
        <button className={styles.button}>Ver colección</button>
    </div>
  )
}
