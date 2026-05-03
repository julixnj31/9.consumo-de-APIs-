// publicaciones/actualizarParcial.js

function actualizarParcial() {
    fetch("http://localhost:3000/posts/1", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Solo cambié el título"
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log("Publicación actualizada con PATCH:", data);
        })
        .catch(err => console.log(err));
}

actualizarParcial();