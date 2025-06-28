import styles from "./Campaña.module.css";
import BannerUno from "../../assets/banner-1.png";
import BannerDos from "../../assets/banner-2.png";

export const Campaña = () => {
  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.bannerContainer}>
        <img src={BannerUno} alt="Fondo bosque" className={styles.bgImg} />
        <img
          src={BannerDos}
          alt="Persona con celular"
          className={styles.overlayImg}
        />
        <div className={styles.texto}></div>
      </div>

      <div></div>
    </section>
  );
};
