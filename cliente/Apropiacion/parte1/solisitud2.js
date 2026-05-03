import { getUsuarioPorId } from "../servicios/usuarios/getUsuarioPorId.js";

const ejecutar = async () => {
    const usuario = await getUsuarioPorId(1);
    console.log("Solicitud 2:", usuario);
}

ejecutar();