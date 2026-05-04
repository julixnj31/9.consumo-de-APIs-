// Este archivo busca una sola publicacion por su id.
// Se usa cuando queremos ver el detalle de un post especifico.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /posts/:id.
export const getPublicacionPorId = async (id) => {
    return apiRequest(`/posts/${id}`);
};
