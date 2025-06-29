import PropTypes from "prop-types";
//componentes
import { FilterBar } from "../../components";

//styles
import styles from "./ListHeader.module.css";

export const ListHeader = ({ filterBy, setFilterBy, sortBy, setSortBy }) => {
  return (
    <div className={styles.listHeaderContainer}>
      
        <FilterBar
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      
    </div>
  );
};

ListHeader.propTypes = {
  filterBy: PropTypes.any,
  setFilterBy: PropTypes.func,
  sortBy: PropTypes.any,
  setSortBy: PropTypes.func,
};
