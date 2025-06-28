import { useState } from "react";
import { useColection } from "../../hooks/useColection";
import { ProductCard } from "../../components";
import { Pagination } from "../../components";
import styles from "./Novedades.module.css";

export const Novedades = () => {
  const { data: productos, loading, error } = useColection(103);
  const [page, setPage] = useState(1);
  const limit = 4;

  
  const totalPages = Math.ceil(productos.length / limit);
  const totalItems = productos.length;
  const currentItems = productos.slice((page - 1) * limit, page * limit);

  if (loading) return <p>Cargando novedades...</p>;
  if (error) return <p>Error al cargar Novedades</p>;

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Novedades</h3>
        <span className={styles.subTitle}>VER TODO</span>
      </div>

      <div className={styles.cardContainer}>
        {currentItems.map((prod) => (
          <ProductCard key={prod.title} prod={prod} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalPaginas={totalPages}
        totalItems={totalItems}
        limit={limit}
      />
    </section>
  );
};
