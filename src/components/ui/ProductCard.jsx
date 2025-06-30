import styles from "./ProductCard.module.css";
import Carrito from "../../assets/carrito.png";
import PropTypes from "prop-types";

export const ProductCard = ({ prod, variant }) => {
  const { image, title, brand, price, discount, stock } = prod;

  // Calcular precio original si hay descuento
  const listPrice =
    discount > 0 ? (price / (1 - discount / 100)).toFixed(2) : null;

  return (
    <div className={`${styles.card} ${variant === "jugueteDelDia" ? styles.jugueteDelDia : ""}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.img} />
      </div>

      <div className={styles.cardBody}>
        <p className={styles.brand}>{brand}</p>
        <p className={styles.title}>{title}</p>

        <p className={styles.cuotas}>6 Cuotas s/interés de</p>
        <p className={styles.valorCuota}>$211,50</p>

        <div className={styles.prices}>
          {discount > 0 && listPrice ? (
            <>
              <span>Final: </span>
              <span className={styles.precioTachado}>${listPrice}</span>
              <span className={styles.precioFinal}>${price}</span>
            </>
          ) : (
            <span className={styles.precioFinal}>${price}</span>
          )}
        </div>
      </div>
      {stock > 0 && price ? (
        <button className={styles.button}>
          <img src={Carrito} alt="Carrito" className={styles.cartIcon} />
        </button>
      ) : (
        <span>Sin Stock</span>
      )}
    </div>
  );
};

//uso prop-types para validar las propiedades del componente ProductCard y asegurar que se reciben los tipos de datos correctos.
ProductCard.propTypes = {
  prod: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    listPrice: PropTypes.number,
    stock: PropTypes.number.isRequired,
    installments: PropTypes.arrayOf(
      PropTypes.shape({
        interest: PropTypes.number.isRequired,
        installment: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  variant: PropTypes.string,
};
