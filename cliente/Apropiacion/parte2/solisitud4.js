import { crearPublicacion } from "../servicios/publicaciones/crearPublicacion.js";

const ejecutar = async () => {

    const nueva = await crearPublicacion({
        userId: 1,
        title: "Nuevo post",
        body: "Contenido del post"
    });

    console.log("Solicitud 4:", nueva);
}

ejecutar();