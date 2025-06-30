import styles from './NuestrasMarcas.module.css';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Disney from '../../assets/disney.png';
import Funko from '../../assets/funko.png';
import Lol from '../../assets/lol.png';
import Marvel from '../../assets/marvel.png';

const brands = [Disney, Funko, Lol, Marvel, Disney, Funko, Lol, Marvel];

export const NuestrasMarcas = () => {
  return (

    <section className={`container ${styles.container}`}>
      <h4 className={styles.title}>Nuestras Marcas</h4>
      
      <div className={styles.sliderContainer}>

        <button className={styles.button}>
          <ArrowLeft/>
        </button>
        <button className={styles.button}>
          <ArrowRight/>
        </button>

        <div className={styles.slider}>
          {brands.map((logo, index) => (
            <div key={index} className={styles.card}>
              <img src={logo} alt="marca" />
            </div>
          ))}
        </div>

      </div>
     
    
    </section>
  )
};
