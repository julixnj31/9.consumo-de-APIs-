// Solicitud 6:
// actualiza una publicacion completa usando PUT.
import { crearPublicacion } from "../servicios/publicaciones/crearPublicacion.js";
import { actualizarPublicacionCompleta } from "../servicios/publicaciones/actualizarPublicacionCompleta.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Crea una publicacion temporal y luego la reemplaza completa.
const ejecutar = async () => {
    try {
        // Primero creamos un post para tener algo seguro que actualizar.
        const creada = await crearPublicacion({
            userId: 1,
            title: "Base temporal para PUT",
            body: "Esta publicacion se crea para luego reemplazarla por completo."
        });

        const id = creada.data.id;

        // PUT reemplaza todos los campos del recurso.
        const resultado = await actualizarPublicacionCompleta(id, {
            id,
            userId: 1,
            title: "Titulo actualizado completo con PUT",
            body: "Contenido totalmente reemplazado con una actualizacion completa."
        });

        mostrarResultado("Solicitud 6", "PUT", resultado, [
            "PUT reemplaza el recurso completo, por eso se enviaron todos los campos del post.",
            "Se uso una publicacion temporal para que el ejercicio sea repetible sin depender del estado previo."
        ]);
    } catch (error) {
        // Si falla la actualizacion, muestra el error.
        console.error("Error en la solicitud 6:", error);
    }
};

// Ejecuta la solicitud automaticamente.
ejecutar();
