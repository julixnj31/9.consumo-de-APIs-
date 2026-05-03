import { getUsuarios } from "../servicios/usuarios/getUsuarios.js";

const ejecutar = async () => {
    const usuarios = await getUsuarios();
    console.log("Solicitud 1:", usuarios);
}

ejecutar();