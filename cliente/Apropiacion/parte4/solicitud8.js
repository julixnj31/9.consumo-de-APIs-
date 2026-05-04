// Solicitud 8:
// elimina una publicacion usando DELETE.
import { crearPublicacion } from "../servicios/publicaciones/crearPublicacion.js";
import { eliminarPublicacion } from "../servicios/publicaciones/eliminarPublicacion.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Crea una publicacion temporal y luego la elimina.
const ejecutar = async () => {
    try {
        // Creamos un post temporal para no borrar uno importante del archivo base.
        const creada = await crearPublicacion({
            userId: 1,
            title: "Base temporal para DELETE",
            body: "Esta publicacion se elimina durante la solicitud 8."
        });

        // DELETE intenta borrar la publicacion por su id.
        const resultado = await eliminarPublicacion(creada.data.id);

        mostrarResultado("Solicitud 8", "DELETE", resultado, [
            "DELETE elimina el recurso indicado del servidor.",
            "Algunos servicios devuelven el recurso eliminado y otros una respuesta vacia; por eso conviene revisar el status y el body."
        ]);
    } catch (error) {
        // Si falla la eliminacion, muestra el error.
        console.error("Error en la solicitud 8:", error);
    }
};

// Ejecuta la solicitud automaticamente.
ejecutar();
