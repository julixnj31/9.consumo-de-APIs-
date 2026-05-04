// Este archivo consulta todos los comentarios de la API.
// Se usa en los ejercicios donde necesitamos relacionar comentarios con publicaciones.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /comments.
export const getComentarios = async () => {
    return apiRequest("/comments");
};
