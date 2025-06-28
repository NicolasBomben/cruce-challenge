import styles from "./Pagination.module.css";
import PropTypes from "prop-types";

import FlechaIzquierda from '../../assets/flecha-izquierda.png';
import FlechaDerecha from '../../assets/flecha-derecha.png';

export const Pagination = ({
  page,
  setPage,
  totalPaginas,
  totalItems,
  limit,
}) => {
  // handler para manejar el cambio de página.
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPaginas) {
      setPage(newPage);
    }
  };

  //calcular el rango de elementos a mostrar en la paginación.
  const endItem = Math.min(page * limit, totalItems);

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={styles.button}
        >
          <img src={FlechaIzquierda} alt="Anterior" className={styles.icon} />
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPaginas}
          className={styles.button}
        >
          <img src={FlechaDerecha} alt="Siguiente" className={styles.icon} />
        </button>
      </div>
      <div>
        <span className={styles.pageInfo}>
          {endItem} de {totalItems} elementos
        </span>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPaginas: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};
