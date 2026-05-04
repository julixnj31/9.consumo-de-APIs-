// Solicitud 4:
// crea una publicacion nueva usando POST.
import { crearPublicacion } from "../servicios/publicaciones/crearPublicacion.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Envia un nuevo post y muestra la respuesta del servidor.
const ejecutar = async () => {
    try {
        const resultado = await crearPublicacion({
            userId: 1,
            title: "Nuevo post desde la solicitud 4",
            body: "Contenido creado con una peticion POST."
        });

        // Explica que POST crea informacion nueva.
        mostrarResultado("Solicitud 4", "POST", resultado, [
            "POST crea un nuevo recurso en el servidor y por eso modifica la informacion.",
            "Lo esperado es un status de exito de creacion y un objeto JSON con el nuevo registro."
        ]);
    } catch (error) {
        // Si falla la creacion, muestra el error.
        console.error("Error en la solicitud 4:", error);
    }
};

// Ejecuta la solicitud automaticamente.
ejecutar();
