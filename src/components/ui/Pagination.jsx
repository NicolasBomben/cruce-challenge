import PropTypes from "prop-types";

import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

import styles from "./Pagination.module.css";



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
          <ArrowLeft alt="Anterior" className={styles.icon} />
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPaginas}
          className={styles.button}
        >
          <ArrowRight alt="Siguiente" className={styles.icon} />
        </button>
      </div>

      <div>
        <span className={styles.pageInfo}>
          {endItem} de {totalItems}
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
