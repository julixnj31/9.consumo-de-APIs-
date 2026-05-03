export const crearPublicacion = async (post) => {

    const resp = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    });

    return await resp.json();
}