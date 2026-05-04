// Solicitud 9:
// vuelve a consultar un recurso despues de eliminarlo.
import { crearPublicacion } from "../servicios/publicaciones/crearPublicacion.js";
import { eliminarPublicacion } from "../servicios/publicaciones/eliminarPublicacion.js";
import { getPostPorId } from "../servicios/publicaciones/getPostPorId.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Crea un post, lo elimina y luego valida la respuesta de un nuevo GET.
const ejecutar = async () => {
    try {
        // Primero creamos una publicacion temporal.
        const creada = await crearPublicacion({
            userId: 1,
            title: "Base temporal para validar DELETE",
            body: "Esta publicacion se consulta despues de ser eliminada."
        });

        // Eliminamos la publicacion para probar la validacion final.
        await eliminarPublicacion(creada.data.id);

        // GET revisa que pasa cuando buscamos un recurso ya eliminado.
        const resultado = await getPostPorId(creada.data.id);
        const analisis = resultado.status === 404
            ? [
                "La nueva consulta devuelve 404 porque el recurso ya no existe.",
                "Esto confirma el efecto de DELETE y muestra un comportamiento distinto al de un GET exitoso."
            ]
            : [
                "La API respondio sin 404, por lo que conviene revisar si el servicio maneja eliminacion logica o un comportamiento especial.",
                "Aun asi, el status y el body permiten analizar si el recurso sigue disponible."
            ];

        mostrarResultado("Solicitud 9", "GET", resultado, analisis);
    } catch (error) {
        // Si algo sale mal, lo muestra en consola.
        console.error("Error en la solicitud 9:", error);
    }
};

// Ejecuta la solicitud automaticamente.
ejecutar();
