// Este archivo centraliza las peticiones a la API.
// Sirve para no repetir fetch y parseo JSON en cada solicitud.
const BASE_URL = "http://localhost:3000";

// Intenta convertir la respuesta a JSON.
// Si la respuesta viene vacia, devuelve null.
const parsearRespuesta = async (response) => {
    const texto = await response.text();

    if (!texto) {
        return null;
    }

    try {
        return JSON.parse(texto);
    } catch (error) {
        return texto;
    }
};

// Hace una peticion a la API y devuelve:
// status, ok y data.
export const apiRequest = async (ruta, options = {}) => {
    const response = await fetch(`${BASE_URL}${ruta}`, options);
    const data = await parsearRespuesta(response);

    return {
        status: response.status,
        ok: response.ok,
        data
    };
};

// Esta funcion se usa cuando enviamos datos en formato JSON.
// Agrega el metodo, el header y convierte el body.
export const jsonRequest = async (ruta, method, body) => {
    return apiRequest(ruta, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
};
