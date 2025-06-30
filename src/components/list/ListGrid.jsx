import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useListado } from "../../hooks/useListado";

//componentes
import { BannerListado } from "../../components";
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

  //estados para manjear paginacion y filtros.
  const [page, setPage] = useState(pageParam);
  const [filterBy, setFilterBy] = useState(filterParam);
  const [sortBy, setSortBy] = useState(sortParam);

  const { productos, loading, error, totalPages } = useListado({
    pageNumber: page,
    filterBy,
    sortBy,
  });

  // actualizo los query params cuando cambian los estados
  useEffect(() => {
    const params = {};
    if (page > 1) params.page = page;
    if (filterBy) params.filterBy = filterBy;
    if (sortBy) params.sortBy = sortBy;
    setSearchParams(params);
  }, [page, filterBy, sortBy, setSearchParams]);

  console.log(productos, filterBy, loading, error);

  //funciones para cambiar filtros / orden
  const handleFilterChange = (value) => {
    setFilterBy(value);
    setPage(1);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setPage(1);
  };

  //filtro para sin descuento
  const productosFiltrados =
    filterBy === "discountOFF"
      ? productos.filter((prod) => !prod.discount || prod.discount === 0)
      : productos;

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.bannerContainer}>
        <BannerListado />
      </div>

      <div className={styles.listContainer}>
        <ListHeader
          filterBy={filterBy}
          setFilterBy={handleFilterChange}
          sortBy={sortBy}
          setSortBy={handleSortChange}
        />
      </div>

      {loading && <p>Cargando productos...</p>}

      {/* Mostrar mensaje si no hay productos filtrados */}
      {!loading &&
        Array.isArray(productosFiltrados) &&
        productosFiltrados.length === 0 && (
          <p className={styles.sinDescuento}>
            {filterBy === "discountOFF"
              ? "En este momento no tenemos productos sin descuento."
              : "No se encontraron productos para este filtro."}
          </p>
        )}

      {/* Mostrar la grilla y paginación solo si hay productos filtrados */}
      {!loading && productosFiltrados.length > 0 && (
        <>
          <div className={styles.cardContainer}>
            {productosFiltrados.map((prod) => (
              <ProductCard key={prod.title} prod={prod} />
            ))}
          </div>
          <ListPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </>
      )}
    </section>
  );
};
