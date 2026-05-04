// Este archivo consulta todas las publicaciones.
// Se usa en la solicitud 10.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /posts.
export const getPosts = async () => {
    return apiRequest("/posts");
};
