// Solicitud 2:
// consulta un usuario especifico usando su id.
import { getUsuarioPorId } from "../servicios/usuarios/getUsuarioPorId.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Ejecuta la consulta del usuario y muestra el resultado.
const ejecutar = async () => {
    try {
        const resultado = await getUsuarioPorId(1);

        // Muestra la respuesta y explica por que llega un objeto.
        mostrarResultado("Solicitud 2", "GET", resultado, [
            "GET permite consultar un recurso puntual usando su identificador.",
            "La respuesta es un objeto JSON porque se consulto un solo usuario."
        ]);
    } catch (error) {
        // Si algo sale mal, muestra el error en consola.
        console.error("Error en la solicitud 2:", error);
    }
};

// Ejecuta la solicitud automaticamente.
ejecutar();
