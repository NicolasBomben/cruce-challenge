import { useState, useEffect } from 'react';
import { useColection } from "../../hooks/useColection";
import { usePagination } from "../../hooks/usePagination";
import { ProductCard, Pagination } from "../../components";
import styles from "./ProductsSelection.module.css";
import PropTypes from "prop-types";

export const ProductosGridSection = ({
  title,
  subTitle,
  colectionId
}) => {
  const { data: productos, loading, error } = useColection(colectionId);
  const [limit, setLimit] = useState(window.innerWidth <= 425 ? 2 : 4);

  useEffect(() => {
    const handleResize = () => {
      setLimit(window.innerWidth <= 425 ? 2 : 4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { page, setPage, totalPages, totalItems, currentItems } = usePagination(
    productos,
    limit
  );

  if (loading) return <p>Cargando {title}...</p>;
  if (error) return <p>Error al cargar {title}</p>;

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
        {subTitle && <span className={styles.subTitle}>{subTitle}</span>}
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

ProductosGridSection.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  colectionId: PropTypes.string.isRequired,
};