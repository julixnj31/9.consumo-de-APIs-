// Este archivo trae las publicaciones de un usuario especifico.
// Se usa en la solicitud 3.
import { apiRequest } from "../api.js";

// Hace una peticion GET filtrando por userId.
export const getPublicacionesPorUsuario = async (userId) => {
    return apiRequest(`/posts?userId=${userId}`);
};
