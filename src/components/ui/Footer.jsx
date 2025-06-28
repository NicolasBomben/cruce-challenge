import styles from './Footer.module.css';
import FacebookIcon from '../../assets/facebook.png';
import YoutubeIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';

export const Footer = () => {
  return (
    <footer className={`container ${styles.container}`}>
      <div className={styles.containerColumnas}>
        <div className={styles.columna}>
          <div className={styles.item}>
            <img src={InstagramIcon} alt="Instagram" className={styles.icono} /> <span>Instagram</span>
          </div>
          <div className={styles.item}>
            <img src={YoutubeIcon} alt="YouTube" className={styles.icono} /> <span>YouTube</span>
          </div>
          <div className={styles.item}>
            <img src={FacebookIcon} alt="Facebook" className={styles.icono} /> <span>Facebook</span>
          </div>
        </div>

        <div className={styles.columna}>
          <p className={styles.item}>PREGUNTAS FREC.</p>
          <p className={styles.item}>TÉRM & COND</p>
          <p className={styles.item}>MIS PEDIDOS</p>
        </div>

        <div className={styles.columna}>
          <p className={styles.itemOferta}>¿BUSCÁS OFERTAS?</p>
          <input type="email" placeholder="ingresá tu eMail" className={styles.input} />
          <button className={styles.button}>ENVIAR</button>
        </div>
      </div>
    </footer>
  )
}
