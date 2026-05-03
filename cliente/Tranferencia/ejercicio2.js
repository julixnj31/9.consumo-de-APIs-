async function postsConComentarios() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());

  const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json());

  posts.forEach(post => {
    const cantidad = comments.filter(c => c.postId === post.id).length;
    const estado = cantidad > 0 ? "Con comentarios" : "Sin comentarios";

    console.log(post.title + " - " + estado);
  });
}

postsConComentarios();