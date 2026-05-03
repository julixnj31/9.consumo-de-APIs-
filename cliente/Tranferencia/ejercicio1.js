async function usuariosConPosts() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());

  users.forEach(user => {
    const cantidad = posts.filter(post => post.userId === user.id).length;

    console.log(user.name + " - Publicaciones: " + cantidad);
  });
}

usuariosConPosts(); 