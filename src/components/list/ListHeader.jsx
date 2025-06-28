import PropTypes from 'prop-types';
//componentes
import { BreadCrumb } from '../../components';
import { FilterBar } from '../../components';

//styles
import styles from './ListHeader.module.css';


export const ListHeader = ({ filterBy, setFilterBy, sortBy, setSortBy}) => {
  return (
    <div className={styles.listHeaderContainer}>
        <div className={styles.breadCrumb}>
            <BreadCrumb/>
        </div>
        <div className={styles.filterBar}>
            <FilterBar
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
        </div>

    </div>
  )
}

ListHeader.propTypes = {
  filterBy: PropTypes.any,
  setFilterBy: PropTypes.func,
  sortBy: PropTypes.any,
  setSortBy: PropTypes.func,
};
