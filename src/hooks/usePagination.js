import { useState } from 'react';

export const usePagination = ( items, limit ) => {

    //por defecto empieza en la primer pagina.
    const [page, setPage] = useState(1);

    //guardo la cantidad total de elementos a paginar o 0 si no vienen datos.
    const totalItems = items?.length || 0;

    //calculo la cantidad de paginas a mostrar.
    const totalPages = Math.ceil(totalItems / limit);

    //obtengo el subconjunto de elementos que corresponden por pagina.
    const currentItems = items?.slice((page -1) * limit, page * limit ) || [];


  return {
    page,
    setPage,
    totalPages,
    totalItems,
    currentItems,
    limit,
  };
};
