// Este archivo actualiza una publicacion completa.
// Se usa en la solicitud 6 con el metodo PUT.
import { jsonRequest } from "../api.js";

// Hace una peticion PUT y reemplaza todos los datos del post.
export const actualizarPublicacionCompleta = async (id, post) => {
    return jsonRequest(`/posts/${id}`, "PUT", post);
};
