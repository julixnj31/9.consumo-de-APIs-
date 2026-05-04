// Este archivo elimina una publicacion por su id.
// Solo debe usarse cuando ya validamos que la publicacion puede borrarse.
import { apiRequest } from "../api.js";

// Hace una peticion DELETE al endpoint /posts/:id.
export const eliminarPublicacion = async (id) => {
    return apiRequest(`/posts/${id}`, {
        method: "DELETE"
    });
};
