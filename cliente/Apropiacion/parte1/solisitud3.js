import { getPublicacionesPorUsuario } from "../servicios/publicaciones/getPublicacionesPorUsuario.js";

const ejecutar = async () => {
    const publicaciones = await getPublicacionesPorUsuario(1);
    console.log("Solicitud 3:", publicaciones);
}

ejecutar();