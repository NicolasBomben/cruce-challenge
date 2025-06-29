import styles from "./FilterBar.module.css";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";

export const FilterBar = ({ filterBy, setFilterBy, sortBy, setSortBy }) => {
  return (
    <div className={styles.filterBarContainer}>
      <div className={styles.filterDropDown}>
        <span className={styles.filterLabel}>Filtrar</span>
        <ChevronDown className={styles.chevron} width={36} height={36} />
        <select
          className={styles.dropDownSelect}
          id="filter"
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="discountON">Con descuento</option>
          <option value="discountOFF">Sin descuento</option>
        </select>
      </div>

      <div className={styles.orderDropDown}>
        <select
          className={styles.orderSelect}
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Ordenar por</option>
          <option value="nameASC">Nombre (A-Z)</option>
          <option value="nameDESC">Nombre (Z-A)</option>
          <option value="priceASC">Precio (menor a mayor)</option>
          <option value="priceDESC">Precio (mayor a menor)</option>
        </select>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};
