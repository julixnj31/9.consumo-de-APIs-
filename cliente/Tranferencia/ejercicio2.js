// Ejercicio 2:
// clasifica las publicaciones segun tengan o no comentarios.
import { getComentarios } from "./comentarios/getComentarios.js";
import { getPublicaciones } from "./publicaciones/getPublicaciones.js";
import { renderTabla, renderMensajes } from "./utilidades/render.js";

// Esta funcion consulta datos, cuenta comentarios y arma la tabla final.
const cargarPublicaciones = async () => {
    try {
        // GET obtiene publicaciones y comentarios para clasificarlos sin alterar recursos.
        const [publicacionesResponse, comentariosResponse] = await Promise.all([
            getPublicaciones(),
            getComentarios()
        ]);

        const publicaciones = publicacionesResponse.data || [];
        const comentarios = comentariosResponse.data || [];
        const comentariosPorPost = new Map();

        // Guardamos cuantos comentarios tiene cada publicacion.
        comentarios.forEach((comentario) => {
            const postId = String(comentario.postId);
            const acumulado = comentariosPorPost.get(postId) || 0;
            comentariosPorPost.set(postId, acumulado + 1);
        });

        // Construimos una fila por publicacion con su estado.
        const filas = publicaciones.map((publicacion) => {
            const cantidadComentarios = comentariosPorPost.get(String(publicacion.id)) || 0;

            return {
                titulo: publicacion.title,
                comentarios: cantidadComentarios,
                estado: cantidadComentarios > 0 ? "Con comentarios" : "Sin comentarios"
            };
        });

        renderTabla(
            "Ejercicio 2: Publicaciones con y sin comentarios",
            [
                { key: "titulo", label: "Titulo" },
                { key: "comentarios", label: "Numero de comentarios" },
                { key: "estado", label: "Estado" }
            ],
            filas,
            "Cada publicacion se clasifica segun tenga o no comentarios asociados."
        );

        console.table(filas);
    } catch (error) {
        // Si falla la consulta, mostramos un mensaje simple.
        console.error("Error en el ejercicio 2:", error);
        renderMensajes("Error en el ejercicio 2", [error.message]);
    }
};

// Ejecuta el ejercicio al cargar el archivo.
cargarPublicaciones();
