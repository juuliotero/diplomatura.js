import React from "react";

export default function DetalleAlumnos(props) {
    const buscado = props.alumnos.find(
        (alumno) => alumno.id === props.alumnoId
    );
    return (
        <ul>
            <li class="list-group-item">Nombre: {buscado.nombre}</li>
            <li class="list-group-item">Edad: {buscado.edad}</li>
        </ul >
    );
}
