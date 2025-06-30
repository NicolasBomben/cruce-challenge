import styles from "./Beneficios.module.css";
import { CreditCard } from "lucide-react";
import { Truck } from "lucide-react";
import { TruckElectric } from "lucide-react"; 


export const Beneficios = () => {
  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.item}>
        <CreditCard alt="12 y 18 Cuotas" className={styles.icon} />
        <div>
          <p className={styles.title}>12 y 18 Cuotas</p>
          <p className={styles.titleRed}>¡Sin interés!</p>
        </div>
      </div>

      <span className={styles.border}></span>
      
      <div className={styles.item}>
        <Truck alt="Envío gratis" className={styles.icon} />
        <div>
          <p className={styles.title}>Envío gratis</p>
          <p className={styles.titleRed}>En todas las compras</p>
        </div>
      </div>

      <span className={styles.border}></span>

      <div className={styles.item}>
        <TruckElectric
          alt="Te llega en 24hs"
          className={styles.icon}
        />
        <div>
          <p className={styles.title}>Te llega en 24hs</p>
          <p className={styles.titleDisabled}>Con costo adicional</p>
        </div>
      </div>
    </section>
  );
};
