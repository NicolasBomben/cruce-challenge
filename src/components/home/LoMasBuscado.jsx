import { useColection } from "../../hooks/useColection";
import { BuscadosCard } from "../ui/BuscadosCard";
import styles from "./LoMasBuscado.module.css";

export const LoMasBuscado = () => {
  const { data: productos, error } = useColection(102);

  if (error) {
    return <p>Error al cargar los productos más buscados.</p>;
  }

  return (
    <section className={`container ${styles.container}`}>
      <h3 className={styles.title}>
        Lo más 
        <br /> 
        buscado
      </h3>
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
