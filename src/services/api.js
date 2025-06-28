import axios from 'axios';
 
// Configuración de la instancia de Axios.
// Se define la URL base y los headers necesarios para las peticiones.
const API = axios.create({
    baseURL: 'https://desafio.e-cruce.com/api/v1',
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        'Content-Type': 'application/json'
    },
});

// Funciones para interactuar con la API.
export const getColeccion = ( id ) => API.get(`/coleccion?id=${id}`);

// Función para obtener el listado con paginación, ordenamiento y filtrado.
export const getListado = ({ pageNumber = 1, id, sortBy, filterBy}) => {
    
    const params = { pageNumber };
    if(id) params.id = id;
    if(sortBy) params.sortBy = sortBy;
    if(filterBy) params.filterBy = filterBy;

    return API.get('/list', { params });
};



export default API;