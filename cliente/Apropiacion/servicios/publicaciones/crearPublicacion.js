// Este archivo crea una publicacion nueva.
// Se usa en las solicitudes 4, 6, 7, 8 y 9.
import { jsonRequest } from "../api.js";

// Hace una peticion POST y envia el post en formato JSON.
export const crearPublicacion = async (post) => {
    return jsonRequest("/posts", "POST", post);
};
