import { crearComentario } from "../servicios/comentarios/crearComentario.js";

const ejecutar = async () => {

    const comentario = await crearComentario({
        postId: 1,
        name: "Yoinel",
        body: "Buen post"
    });

    console.log("Solicitud 5:", comentario);
}

ejecutar();