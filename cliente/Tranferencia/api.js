// Este archivo centraliza las peticiones a la API.
// Sirve para no repetir fetch, status y parseo JSON en cada ejercicio.
const BASE_URL = "http://localhost:3000";

// Convierte la respuesta a JSON cuando se puede.
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

// Hace una peticion a la API y devuelve un objeto con:
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

// Esta funcion se usa cuando enviamos datos con JSON.
// Agrega el header y convierte el body a texto JSON.
export const jsonRequest = async (ruta, method, body) => {
    return apiRequest(ruta, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
};
