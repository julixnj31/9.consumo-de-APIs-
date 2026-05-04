// Este archivo busca una publicacion por su id.
// Se usa en las solicitudes 9 y 10.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /posts/:id.
export const getPostPorId = async (id) => {
    return apiRequest(`/posts/${id}`);
};
