// Solicitud 3:
// trae las publicaciones de un usuario especifico.
import { getPublicacionesPorUsuario } from "../servicios/publicaciones/getPublicacionesPorUsuario.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Ejecuta la consulta filtrando por userId.
const ejecutar = async () => {
    try {
        const resultado = await getPublicacionesPorUsuario(1);

        // Muestra el resultado y explica por que vuelve un arreglo.
        mostrarResultado("Solicitud 3", "GET", resultado, [
            "Se uso el parametro userId para filtrar publicaciones de un usuario especifico.",
            "La API devuelve un arreglo porque un usuario puede tener varias publicaciones."
        ]);
    } catch (error) {
        // Si falla la consulta, muestra el error.
        console.error("Error en la solicitud 3:", error);
    }
};

// Inicia la solicitud al cargar el archivo.
ejecutar();
