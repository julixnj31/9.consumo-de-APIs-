// Este archivo elimina una publicacion por id.
// Se usa en las solicitudes 8 y 9.
import { apiRequest } from "../api.js";

// Hace una peticion DELETE al endpoint /posts/:id.
export const eliminarPublicacion = async (id) => {
    return apiRequest(`/posts/${id}`, {
        method: "DELETE"
    });
};
