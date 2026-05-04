// Este archivo trae la lista de usuarios desde la API.
// Lo usamos para cruzar usuarios con sus publicaciones.
import { apiRequest } from "../api.js";

// Hace una peticion GET al endpoint /users.
export const getUsuarios = async () => {
    return apiRequest("/users");
};
