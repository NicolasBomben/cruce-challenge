import styles from './BannerListado.module.css';
import Banner from '../../assets/banner-listado.png';


export const BannerListado = () => {
  return (
    <section className={`container ${styles.container}`}>
        <div className={styles.bannerContainer}>
            <img src={Banner} alt="baner de funcos" />
        </div>
    </section>
  )
}
