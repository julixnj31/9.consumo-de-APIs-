// Ejercicio 4:
// valida si una publicacion tiene comentarios antes de eliminarla.
import { getComentarios } from "./comentarios/getComentarios.js";
import { crearPublicacion } from "./publicaciones/crearPublicacion.js";
import { eliminarPublicacion } from "./publicaciones/eliminarPublicacion.js";
import { getPublicacionPorId } from "./publicaciones/getPublicacionPorId.js";
import { renderTabla, renderMensajes } from "./utilidades/render.js";

// Este id representa un caso que ya tiene comentarios y no debe borrarse.
const POST_ID_CON_COMENTARIOS = 1;

// Revisa una publicacion y decide si puede eliminarse o no.
const validarYEliminarPublicacion = async (postId, escenario) => {
    const [publicacionResponse, comentariosResponse] = await Promise.all([
        getPublicacionPorId(postId),
        getComentarios()
    ]);

    // Si la publicacion no existe, devolvemos el resultado sin intentar borrar.
    if (!publicacionResponse.ok || !publicacionResponse.data) {
        return {
            escenario,
            postId,
            resultado: "La publicacion no existe",
            validacion: `GET posterior con status ${publicacionResponse.status}`
        };
    }

    const comentarios = comentariosResponse.data || [];
    const tieneComentarios = comentarios.some(
        (comentario) => String(comentario.postId) === String(postId)
    );

    // Si tiene comentarios, se bloquea la eliminacion.
    if (tieneComentarios) {
        return {
            escenario,
            postId,
            resultado: "No se puede eliminar la publicacion porque tiene comentarios",
            validacion: "No se ejecuta DELETE para proteger la informacion relacionada"
        };
    }

    // DELETE solo se ejecuta cuando la validacion confirma que el recurso no tiene comentarios.
    await eliminarPublicacion(postId);

    // GET valida el resultado despues de intentar la eliminacion.
    const validacionResponse = await getPublicacionPorId(postId);
    const eliminada = validacionResponse.status === 404 || validacionResponse.data === null;

    return {
        escenario,
        postId,
        resultado: eliminada
            ? "Publicacion eliminada correctamente"
            : "La API no confirmo la eliminacion como 404; revisa el comportamiento del servicio",
        validacion: `GET posterior con status ${validacionResponse.status}`
    };
};

// Ejecuta dos pruebas:
// una publicacion con comentarios y otra creada sin comentarios.
const ejecutarValidacion = async () => {
    try {
        // Creamos una publicacion temporal para probar un caso eliminable.
        const temporalResponse = await crearPublicacion({
            userId: 1,
            title: "Publicacion temporal para validar DELETE",
            body: "Se crea sin comentarios para probar la eliminacion segura."
        });

        const resultados = [
            await validarYEliminarPublicacion(
                POST_ID_CON_COMENTARIOS,
                "Caso con comentarios"
            ),
            await validarYEliminarPublicacion(
                temporalResponse.data.id,
                "Caso sin comentarios"
            )
        ];

        renderTabla(
            "Ejercicio 4: Eliminacion logica y validacion de datos",
            [
                { key: "escenario", label: "Escenario" },
                { key: "postId", label: "ID de la publicacion" },
                { key: "resultado", label: "Resultado" },
                { key: "validacion", label: "Validacion final" }
            ],
            resultados,
            "Se evalua un caso protegido por comentarios y otro que si puede eliminarse."
        );

        console.table(resultados);
    } catch (error) {
        // Si algo falla, lo mostramos de forma simple.
        console.error("Error en el ejercicio 4:", error);
        renderMensajes("Error en el ejercicio 4", [error.message]);
    }
};

// Inicia el ejercicio al cargar el archivo.
ejecutarValidacion();
