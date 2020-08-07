import React from "react";

export default function DetalleProfesores(props) {
    const buscado = props.profesores.find(
        (profesor) => profesor.id === props.profesorId
    );
    return (
        <ul>
            <li class="list-group-item">{buscado.nombre}</li>
        </ul >
    );
}