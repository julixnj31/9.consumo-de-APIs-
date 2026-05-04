// Este archivo contiene funciones para pintar informacion en la pagina.
// Asi los ejercicios se enfocan en la logica y no en repetir HTML manual.
// Busca el contenedor principal donde se mostrara el resultado.
const obtenerApp = () => {
    const app = document.getElementById("app");

    if (!app) {
        throw new Error("No se encontro el contenedor con id app.");
    }

    return app;
};

// Crea un elemento HTML simple con texto y una clase opcional.
const crearTexto = (tag, textContent, className = "") => {
    const element = document.createElement(tag);
    element.textContent = textContent;

    if (className) {
        element.className = className;
    }

    return element;
};

// Limpia el contenido anterior para mostrar un solo resultado a la vez.
const limpiarApp = () => {
    obtenerApp().innerHTML = "";
};

// Dibuja una tabla completa usando columnas y filas.
// Se usa en los ejercicios 1, 2 y 4.
export const renderTabla = (titulo, columnas, filas, descripcion = "") => {
    limpiarApp();

    const app = obtenerApp();
    const section = document.createElement("section");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

    section.appendChild(crearTexto("h2", titulo));

    if (descripcion) {
        section.appendChild(crearTexto("p", descripcion, "descripcion"));
    }

    columnas.forEach((columna) => {
        headerRow.appendChild(crearTexto("th", columna.label));
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    filas.forEach((fila) => {
        const tr = document.createElement("tr");

        columnas.forEach((columna) => {
            const td = document.createElement("td");
            const valor = columna.render ? columna.render(fila) : fila[columna.key];
            td.textContent = valor === null || valor === undefined ? "" : valor;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    section.appendChild(table);
    app.appendChild(section);
};

// Dibuja un detalle tipo ficha: etiqueta + valor.
// Se usa en el ejercicio 3 para mostrar una sola publicacion.
export const renderDetalle = (titulo, items, descripcion = "") => {
    limpiarApp();

    const app = obtenerApp();
    const section = document.createElement("section");
    const lista = document.createElement("dl");

    section.appendChild(crearTexto("h2", titulo));

    if (descripcion) {
        section.appendChild(crearTexto("p", descripcion, "descripcion"));
    }

    items.forEach(({ label, value }) => {
        lista.appendChild(crearTexto("dt", label));
        lista.appendChild(
            crearTexto("dd", String(value === null || value === undefined ? "" : value))
        );
    });

    section.appendChild(lista);
    app.appendChild(section);
};

// Muestra una lista de mensajes.
// Sirve para errores o avisos simples.
export const renderMensajes = (titulo, mensajes, descripcion = "") => {
    limpiarApp();

    const app = obtenerApp();
    const section = document.createElement("section");
    const lista = document.createElement("ul");

    section.appendChild(crearTexto("h2", titulo));

    if (descripcion) {
        section.appendChild(crearTexto("p", descripcion, "descripcion"));
    }

    mensajes.forEach((mensaje) => {
        lista.appendChild(crearTexto("li", mensaje));
    });

    section.appendChild(lista);
    app.appendChild(section);
};
