// Ejercicio 3:
// busca una publicacion especifica y revisa si tiene comentarios.
import { getComentarios } from "./comentarios/getComentarios.js";
import { getPublicaciones } from "./publicaciones/getPublicaciones.js";
import { renderDetalle, renderMensajes } from "./utilidades/render.js";

// Este valor indica que publicacion vamos a consultar.
const POST_ID = 1;

// Carga la publicacion, busca sus comentarios y muestra el detalle.
const cargarDetallePublicacion = async () => {
    try {
        // GET consulta la coleccion de publicaciones y luego busca un id especifico.
        const [publicacionesResponse, comentariosResponse] = await Promise.all([
            getPublicaciones(),
            getComentarios()
        ]);

        const publicaciones = publicacionesResponse.data || [];
        const comentarios = comentariosResponse.data || [];
        const publicacion = publicaciones.find((item) => String(item.id) === String(POST_ID));

        // Si no existe la publicacion, avisamos y detenemos el proceso.
        if (!publicacion) {
            renderMensajes(
                "Ejercicio 3: Busqueda especifica de informacion",
                [`No se encontro la publicacion con id ${POST_ID}.`]
            );
            return;
        }

        // Filtramos solo los comentarios que pertenecen a ese post.
        const comentariosAsociados = comentarios.filter(
            (comentario) => String(comentario.postId) === String(publicacion.id)
        );

        renderDetalle(
            "Ejercicio 3: Busqueda especifica de informacion",
            [
                { label: "ID de la publicacion", value: publicacion.id },
                { label: "Titulo", value: publicacion.title },
                { label: "Contenido", value: publicacion.body },
                { label: "Numero de comentarios asociados", value: comentariosAsociados.length }
            ],
            `Se consulto la publicacion ${POST_ID} y se valido su interaccion.`
        );

        console.log("Detalle de la publicacion:", publicacion);
        console.log("Comentarios asociados:", comentariosAsociados);
    } catch (error) {
        // Si algo sale mal, mostramos el error.
        console.error("Error en el ejercicio 3:", error);
        renderMensajes("Error en el ejercicio 3", [error.message]);
    }
};

// Ejecuta el ejercicio automaticamente.
cargarDetallePublicacion();
