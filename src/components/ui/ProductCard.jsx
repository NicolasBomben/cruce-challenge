import styles from './ProductCard.module.css';
import Carrito from '../../assets/carrito.png';
import PropTypes from 'prop-types';

export const ProductCard =({ prod }) => {
  return (
    <div className={styles.card}>
      <img src={prod.image} alt={prod.title} className={styles.img} />
      <p className={styles.brand}>{prod.brand}</p>
      <p className={styles.title}>{prod.title}</p>
      <p className={styles.cuotas}>6 Cuotas s/interés de</p>
      <h5 className={styles.precioFinal}>${prod.price}</h5>
      {prod.discount > 0 && (
        <p className={styles.precioOriginal}>Antes: ${prod.price}</p>
      )}
      <button className={styles.button}>
        <img src={Carrito} alt="Carrito" className={styles.cartIcon} />
      </button>
    </div>
  );
}

//uso prop-types para validar las propiedades del componente ProductCard y asegurar que se reciben los tipos de datos correctos.
ProductCard.propTypes = {
  prod: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    listPrice: PropTypes.number,
  }).isRequired,
};

