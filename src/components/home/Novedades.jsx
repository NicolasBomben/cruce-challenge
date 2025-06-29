//customs hooks para manejo de datos y paginacion.
import { useColection } from "../../hooks/useColection";
import { usePagination } from "../../hooks/usePagination";

//components
import { ProductCard } from "../../components";
import { Pagination } from "../../components";

//styles
import styles from "./Novedades.module.css";

export const Novedades = () => {
  const { data: productos, loading, error } = useColection(103);

  const limit = 4;

  const {page, setPage, totalPages, totalItems, currentItems} = usePagination(productos, limit);
  
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
