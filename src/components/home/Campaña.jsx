import { useColection } from "../../hooks/useColection";
import { usePagination } from "../../hooks/usePagination";

//components
import { ProductCard } from "../../components";
import { Pagination } from "../../components";

//styles, icons.
import styles from "./Campaña.module.css";
import BannerUno from "../../assets/banner-1.png";
import BannerDos from "../../assets/banner-2.png";

export const Campaña = () => {
  const { data: productos, loading, error } = useColection(102);

  const limit = 1;

  const { page, setPage, totalPages, totalItems, currentItems } = usePagination(
    productos,
    limit
  );

  const producto = currentItems[0];

  if (loading) return <p>Cargando campaña...</p>;
  if (error) return <p>Error al cargar la campaña</p>;

  return (
    <section className={`container ${styles.container}`}>
      <div className={styles.bannerContainer}>
        <img src={BannerUno} alt="Fondo bosque" className={styles.bgImg} />
        <img
          src={BannerDos}
          alt="Persona con celular"
          className={styles.overlayImg}
        />
        <div className={styles.texto}></div>
      </div>

      <div className={styles.cardPaginationContainer}>
        <ProductCard prod={producto} />
        <Pagination
          page={page}
          setPage={setPage}
          totalPaginas={totalPages}
          totalItems={totalItems}
          limit={limit}
        />
      </div>
    </section>
  );
};
