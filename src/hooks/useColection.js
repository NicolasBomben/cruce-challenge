import { useState, useEffect } from "react";
import { getColeccion } from "../services/api";


export const useColection = (id) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchColection = async () => {
      try {
        const res = await getColeccion(id);
        setData(res.data);
      } catch (error) {
        console.log("Error en conseguir las colecciones", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchColection();
  }, [id]);

  return {
    data,
    loading,
    error,
  }
};
