<<<<<<< HEAD
import { getPublicaciones } from "./publicaciones/getPublicaciones.js";
import { getUsuarios } from "./usuarios/getUsuarios.js";


const cargarUsuarios = async () => {
    const usuarios = await getUsuarios();
    const publicaciones = await getPublicaciones();
    const template = document.getElementById('fila-template');
    const tablaBody = document.getElementById('tabla-body');

    usuarios.sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    usuarios.forEach(usuario => {
        const clone = template.content.cloneNode(true);

        const publicacionesPorUsuario = publicaciones.filter(publicacion => publicacion.userId == usuario.id);
        clone.querySelector('.nombre').textContent = usuario.name;
        clone.querySelector('.publicaciones').textContent = publicacionesPorUsuario.length;
        tablaBody.appendChild(clone)
    });

}
cargarUsuarios()
