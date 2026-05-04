// Este archivo busca un usuario por su id.
// Se usa en la solicitud 2.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /users/:id.
export const getUsuarioPorId = async (id) => {
    return apiRequest(`/users/${id}`);
};
