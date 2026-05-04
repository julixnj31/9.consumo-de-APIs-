// Este archivo modifica solo una parte de la publicacion.
// Se usa en la solicitud 7 con el metodo PATCH.
import { jsonRequest } from "../api.js";

// Hace una peticion PATCH y envia solo los campos que cambian.
export const actualizarPublicacionParcial = async (id, cambios) => {
    return jsonRequest(`/posts/${id}`, "PATCH", cambios);
};
