// Solicitud 1:
// consulta la lista completa de usuarios con GET.
import { getUsuarios } from "../servicios/usuarios/getUsuarios.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Ejecuta la consulta y muestra el resultado en consola.
const ejecutar = async () => {
    try {
        const resultado = await getUsuarios();

        // Muestra la respuesta y dos ideas clave para entenderla.
        mostrarResultado("Solicitud 1", "GET", resultado, [
            "GET consulta informacion sin modificar el recurso en el servidor.",
            "La respuesta es un arreglo porque se pidio la coleccion completa de usuarios."
        ]);
    } catch (error) {
        // Si falla la solicitud, muestra el error.
        console.error("Error en la solicitud 1:", error);
    }
};

// Inicia la solicitud al cargar el archivo.
ejecutar();
