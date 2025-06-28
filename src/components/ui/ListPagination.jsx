
import PropTypes from "prop-types";
import styles from './ListPagination.module.css';
import FlechaIzquierda from '../../assets/flecha-izquierda.png';
import FlechaDerecha from '../../assets/flecha-derecha.png';


export const ListPagination = ({ page, setPage, totalPages }) => {

    const getPages = () => {

        //cantidad de paginas a mostrar en la paginacion.
        const paginasVisibles  = 5;
        let start = Math.max(1, page - 2);
        let end = Math.min(totalPages, start + paginasVisibles - 1);

        if(end - start < paginasVisibles - 1){
            start = Math.max(1, end - paginasVisibles + 1);
        }

        const pages = [];
        for (let i = start; i <= end; i++){
            pages.push(i);
        }

        return pages;
    }


  return (
    <nav className={styles.paginationContainer}>
      <button
        className={styles.circleButton}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <img src={FlechaIzquierda} alt="ir a la izquierda" />
      </button>

      {getPages().map((num) => (
        <button
          key={num}
          className={num === page ? styles.activePage : styles.pageButton}
          onClick={() => setPage(num)}
          disabled={num === page}
        >
          {num}
        </button>
      ))}

      <button
        className={styles.circleButton}
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        <img src={FlechaDerecha} alt="ir a la derecha" />
      </button>
    </nav>
  );
};

ListPagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};