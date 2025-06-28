import { useColection } from "../../hooks/useColection";
import { ProductCard } from "../../components";
import styles from "./JugueteDelDia.module.css";


export const JugueteDelDia = () => {
  const { data, loading, error } = useColection(101);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el producto</p>;

  const producto = data[0]; // Asumiendo que el primer elemento es el juguete del día

  return (
    <>
      <h2 className={styles.titulo}>Juguete del día</h2>
      <section className={`container ${styles.container}`}>

        <ProductCard prod={producto} />
      
        <div className={styles.banner}>
          <iframe
            src="https://www.youtube.com/embed/CIW-xPHAXzw"
            title="Funko Pop Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};
