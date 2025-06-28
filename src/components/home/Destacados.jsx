import { useColection } from "../../hooks/useColection";
import { ProductCard } from "../../components";
import { Contenido } from "./Contenido";

import styles from "./Destacados.module.css";

export const Destacados = () => {
  const { data: productos, loading, error } = useColection(100);

  console.log(productos);

  // Validación para mostrar mensaje de carga o error
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos</p>;

  // separo los primeros dos productos y el resto de la coleccion para poder replicar el diseño del slider.
  const primerosProductos = productos.slice(0, 2);
  const ultimosProductos = productos.slice(2);

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.superior}>
        <div className={styles.primerBloque}>
          {primerosProductos.map((prod, i) => (
            <div
              key={prod.title}
              className={`${styles.productCard} ${
                i === 0 ? styles.up : styles.down
              }`}
            >
              <ProductCard prod={prod} />
            </div>
          ))}
        </div>

        <Contenido />
      </div>

      <div className={styles.inferior}>
        {ultimosProductos.map((prod, i) => (
          <div
            key={prod.title}
            className={`${styles.productCard} ${
              i % 2 === 0 ? styles.up : styles.down
            }`}
          >
            <ProductCard prod={prod} />
          </div>
        ))}
      </div>
    </section>
  );
};
