// Este archivo consulta todos los usuarios.
// Se usa en la solicitud 1.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /users.
export const getUsuarios = async () => {
    return apiRequest("/users");
};
