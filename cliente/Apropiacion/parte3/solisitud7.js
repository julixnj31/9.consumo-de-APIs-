// Solicitud 7:
// modifica solo una parte de una publicacion usando PATCH.
import { crearPublicacion } from "../servicios/publicaciones/crearPublicacion.js";
import { actualizarPublicacionParcial } from "../servicios/publicaciones/actualizarPublicacionParcial.js";
import { mostrarResultado } from "../utilidades/mostrarResultado.js";

// Crea una publicacion temporal y cambia solo su titulo.
const ejecutar = async () => {
    try {
        // Creamos un post para luego modificar solo un campo.
        const creada = await crearPublicacion({
            userId: 1,
            title: "Base temporal para PATCH",
            body: "Esta publicacion se crea para modificar solo un campo."
        });

        // PATCH envia solo el campo que queremos actualizar.
        const resultado = await actualizarPublicacionParcial(creada.data.id, {
            title: "Solo cambio el titulo con PATCH"
        });

        mostrarResultado("Solicitud 7", "PATCH", resultado, [
            "PATCH actualiza solo una parte del recurso y reduce los datos enviados.",
            "En este caso se modifico unicamente el campo title."
        ]);
    } catch (error) {
        // Si ocurre un error, lo muestra en consola.
        console.error("Error en la solicitud 7:", error);
    }
};

// Inicia la solicitud al cargar el archivo.
ejecutar();
