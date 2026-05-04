// Solicitud 10:
// compara un GET general con un GET por id.
import { getPosts } from "../servicios/publicaciones/getPosts.js";
import { getPostPorId } from "../servicios/publicaciones/getPostPorId.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Consulta la lista completa y luego revisa el detalle del primer post.
const ejecutar = async () => {
    try {
        const listado = await getPosts();
        const primerPost = Array.isArray(listado.data) ? listado.data[0] : null;

        // Primero mostramos como es la respuesta general de /posts.
        mostrarResultado("Solicitud 10", "GET", listado, [
            "Un GET general sobre /posts devuelve una coleccion completa en forma de arreglo.",
            "Su estructura cambia frente a un GET por id, que normalmente devuelve un solo objeto JSON."
        ]);

        // Si hay al menos un post, comparamos su detalle contra el listado general.
        if (primerPost) {
            const detalle = await getPostPorId(primerPost.id);

            console.group("Comparacion de estructuras");
            console.log("Status GET general:", listado.status);
            console.log("Status GET por id:", detalle.status);
            console.log("Tipo GET general:", Array.isArray(listado.data) ? "array" : typeof listado.data);
            console.log("Tipo GET por id:", Array.isArray(detalle.data) ? "array" : typeof detalle.data);
            console.log("Primer elemento del GET general:", primerPost);
            console.log("Body del GET por id:", detalle.data);
            console.log("Analisis:", "El GET general sirve para listar recursos; el GET por id sirve para consultar el detalle de un recurso especifico.");
            console.groupEnd();
        }
    } catch (error) {
        // Si falla alguna consulta, muestra el error.
        console.error("Error en la solicitud 10:", error);
    }
};

// Inicia la solicitud al cargar el archivo.
ejecutar();
