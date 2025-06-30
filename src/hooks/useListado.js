//custom hook para hacer el fetchin de los listados para tener la logica separada.
import { useState, useEffect } from "react";
import { getListado } from "../services/api";

export const useListado = ({ pageNumber, sortBy, filterBy }) => {
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getListado({ pageNumber, sortBy, filterBy });
        const data = res.data.items || [];
        
        const paginas = res.data.metadata?.maxPage || 1;

        setProductos(data);
        setTotalPages(paginas);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber, sortBy, filterBy]);

  return { productos, loading, error, totalPages };
};
