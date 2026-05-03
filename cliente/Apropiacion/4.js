// parte 4: solicitud 8
async function eliminarPost() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  });

  const data = await respuesta.json();
  console.log("DELETE respuesta:", data);
}

eliminarPost();

//parte 5
// solicitud 9
async function verificarPost() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await respuesta.json();

  console.log("GET después de DELETE:", data);
}

verificarPost();

//solicitud 10
async function obtenerPosts() {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await respuesta.json();

  console.log("Todos los posts:", data);
}

obtenerPosts();