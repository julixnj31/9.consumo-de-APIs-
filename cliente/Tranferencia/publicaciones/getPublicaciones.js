// Este archivo consulta todas las publicaciones.
// Sirve para mostrar listados y hacer comparaciones entre posts.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /posts.
export const getPublicaciones = async () => {
    return apiRequest("/posts");
};
