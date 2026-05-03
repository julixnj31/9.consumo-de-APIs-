// publicaciones/actualizarPublicacion.js

function actualizarPublicacion() {
    fetch("http://localhost:3000/posts/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            userId: 1,
            title: "Título actualizado completo",
            body: "Contenido totalmente reemplazado"
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log("Publicación actualizada con PUT:", data);
        })
        .catch(err => console.log(err));
}

actualizarPublicacion();