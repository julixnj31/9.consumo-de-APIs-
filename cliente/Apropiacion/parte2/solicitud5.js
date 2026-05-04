// Solicitud 5:
// crea un comentario nuevo usando POST.
import { crearComentario } from "../servicios/comentarios/crearComentario.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Envia un comentario y muestra la respuesta de la API.
const ejecutar = async () => {
    try {
        const resultado = await crearComentario({
            postId: 1,
            name: "Comentario creado desde la solicitud 5",
            body: "Buen post. Este comentario fue enviado con POST."
        });

        // Explica que POST envia datos en el body.
        mostrarResultado("Solicitud 5", "POST", resultado, [
            "POST envia datos en el body para registrar un nuevo comentario.",
            "La respuesta incluye el comentario creado con su identificador asignado por la API."
        ]);
    } catch (error) {
        // Si ocurre un error, lo muestra en consola.
        console.error("Error en la solicitud 5:", error);
    }
};

// Inicia la solicitud al cargar el archivo.
ejecutar();
