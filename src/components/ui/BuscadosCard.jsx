import styles from "./BuscadosCard.module.css";
import PropTypes from "prop-types";

export const BuscadosCard = ({ title, image, price }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.infoCard}>
          <p className={styles.title}>{title}</p>
          <span className={styles.price}>${price}</span>
        </div>
      </div>
    </>
  );
};

BuscadosCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
