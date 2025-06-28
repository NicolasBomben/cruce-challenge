import { useColection } from "../../hooks/useColection";
import { BuscadosCard } from "../ui/BuscadosCard";
import { Timer } from "../ui/Timer";

import styles from "./BuscadosTimer.module.css";

export const BuscadosTimer = () => {
  const { data: productos, error } = useColection(102);

  if (error) {
    return <p>Error al cargar los productos más buscados.</p>;
  }
  return (
    <section className={`container ${styles.container}`}>
      <div>
        <h3 className={styles.title}>Termina en:</h3>
        <Timer />
      </div>

      <div className={styles.cardContainer}>
        {productos.map((prod) => (
          <BuscadosCard
            key={prod.title}
            image={prod.image}
            title={prod.title}
            price={prod.price}
          />
        ))}
      </div>
    </section>
  );
};
