// Este archivo crea un comentario nuevo.
// Se usa en la solicitud 5.
import { jsonRequest } from "../api.js";

// Hace una peticion POST y envia el comentario en formato JSON.
export const crearComentario = async (comentario) => {
    return jsonRequest("/comments", "POST", comentario);
};
