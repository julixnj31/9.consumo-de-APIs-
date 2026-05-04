// Este archivo crea una publicacion nueva en la API.
// Se usa en el ejercicio 4 para tener un caso que si pueda eliminarse.
import { jsonRequest } from "../api.js";

// Hace una peticion POST y envia la publicacion en formato JSON.
export const crearPublicacion = async (publicacion) => {
    return jsonRequest("/posts", "POST", publicacion);
};
