import { useState } from "react";
import styles from "./TopBanner.module.css";

export const TopBanner = () => {
  //manejo el estado para poder cerrar el banner en el caso que se quiera.
  const [visible, setVisible] = useState(true);

  //si no es visible retorna null.
  if (!visible) return null;

  return(
    <div className={styles.bannerContainer}>
        <p className={styles.textDesktop}>Sólo por hoy: envío gratis en todos los productos!</p>
        <p className={styles.textMobile}>Mantené pulsado cualquier artículo para agregarlo</p>
        <button 
        className={styles.button}
        onClick={() => setVisible(false)
        }>
        X
        </button>
    </div>
  )
};
