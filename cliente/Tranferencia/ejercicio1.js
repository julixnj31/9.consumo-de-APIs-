// Ejercicio 1:
// muestra todos los usuarios y cuenta cuantas publicaciones tiene cada uno.
import { getPublicaciones } from "./publicaciones/getPublicaciones.js";
import { getUsuarios } from "./usuarios/getUsuarios.js";
import { renderTabla, renderMensajes } from "./utilidades/render.js";

// Esta funcion carga los datos, los organiza y los dibuja en pantalla.
const cargarUsuarios = async () => {
    try {
        // GET consulta usuarios y publicaciones sin modificar los datos del servidor.
        const [usuariosResponse, publicacionesResponse] = await Promise.all([
            getUsuarios(),
            getPublicaciones()
        ]);

        const usuarios = usuariosResponse.data || [];
        const publicaciones = publicacionesResponse.data || [];
        const publicacionesPorUsuario = new Map();

        // Guardamos cuantas publicaciones tiene cada usuario.
        publicaciones.forEach((publicacion) => {
            const userId = String(publicacion.userId);
            const acumulado = publicacionesPorUsuario.get(userId) || 0;
            publicacionesPorUsuario.set(userId, acumulado + 1);
        });

        // Creamos la estructura final que se mostrara en la tabla.
        const filas = usuarios
            .map((usuario) => ({
                nombre: usuario.name,
                publicaciones: publicacionesPorUsuario.get(String(usuario.id)) || 0
            }))
            .sort((a, b) => a.nombre.localeCompare(b.nombre));

        renderTabla(
            "Ejercicio 1: Usuarios activos y sus publicaciones",
            [
                { key: "nombre", label: "Nombre del usuario" },
                { key: "publicaciones", label: "Cantidad de publicaciones" }
            ],
            filas,
            "Se listan todos los usuarios, incluso si no tienen publicaciones asociadas."
        );

        console.table(filas);
    } catch (error) {
        // Si algo falla, mostramos el error en consola y en pantalla.
        console.error("Error en el ejercicio 1:", error);
        renderMensajes("Error en el ejercicio 1", [error.message]);
    }
};

// Ejecuta el ejercicio al abrir la pagina.
cargarUsuarios();
