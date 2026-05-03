export const crearComentario = async (comentario) => {

    const resp = await fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comentario)
    });

    return await resp.json();
}