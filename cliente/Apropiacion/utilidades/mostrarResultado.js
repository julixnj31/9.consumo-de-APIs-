// Este archivo organiza la salida en consola.
// Sirve para ver verbo HTTP, status, tipo de respuesta y analisis.
// Detecta si la respuesta es array, null u otro tipo.
const obtenerTipo = (data) => {
    if (Array.isArray(data)) {
        return "array";
    }

    if (data === null) {
        return "null";
    }

    return typeof data;
};

// Muestra el resultado final de cada solicitud de forma ordenada.
export const mostrarResultado = (titulo, verbo, resultado, analisis = []) => {
    console.group(titulo);
    console.log("Verbo HTTP:", verbo);
    console.log("Status:", resultado.status);
    console.log("OK:", resultado.ok);
    console.log("Tipo de body:", obtenerTipo(resultado.data));

    if (Array.isArray(resultado.data)) {
        console.log("Cantidad de elementos:", resultado.data.length);
    }

    console.log("Body JSON:", resultado.data);

    // Imprime las conclusiones o analisis del ejercicio.
    analisis.forEach((nota, index) => {
        console.log(`Analisis ${index + 1}:`, nota);
    });

    console.groupEnd();
};
