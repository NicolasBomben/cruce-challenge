import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useListado } from "../../hooks/useListado";

//componentes
import { ProductCard } from "../../components";
import { ListPagination } from "../../components";
import { ListHeader } from "../../components";

//styles
import styles from "./ListGrid.module.css";

export const ListGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //leer los valores de la URL o usar valores por defecto.
  const pageParam = parseInt(searchParams.get("page")) || 1;
  const filterParam = searchParams.get("filterBy") || "";
  const sortParam = searchParams.get("sortBy") || "";

  const [page, setPage] = useState(pageParam);
  const [filterBy, setFilterBy] = useState(filterParam);
  const [sortBy, setSortBy] = useState(sortParam);

  // actualizo los query params cuando cambian los estados
  useEffect(() => {
    const params = {};
    if (page > 1) params.page = page;
    if (filterBy) params.filterBy = filterBy;
    if (sortBy) params.sortBy = sortBy;
    setSearchParams(params);
  }, [page, filterBy, sortBy, setSearchParams]);

  const { productos, loading, error, totalPages, totalItems } = useListado({
    pageNumber: page,
    filterBy,
    sortBy,
  });

  //funciones para cambiar filtros / orden

  const handleFilterChange = (value) => {
    setFilterBy(value);
    setPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setPage(1);
  };

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.listContainer}>
        <ListHeader
          filterBy={filterBy}
          setFilterBy={handleFilterChange}
          sortBy={sortBy}
          setSortBy={handleSortChange}
        />
      </div>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos</p>}

      <div className={styles.cardContainer}>
        {productos.map((prod) => (
          <ProductCard key={prod.title} prod={prod} />
        ))}
      </div>

      <ListPagination page={page} setPage={setPage} totalPages={totalPages} />
    </section>
  );
};
