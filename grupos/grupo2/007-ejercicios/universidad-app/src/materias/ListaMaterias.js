import React from "react";

export default function ListaMaterias(props) {
    return (
        <ul class="row">
            {props.materias.map(materia => {
                return (
                    <>
                        <li key={materia.id} onClick={() => props.vistaActual("detalleMaterias", materia.id)} class="list-group-item col">{materia.nombre}</li>
                        <button onClick={() => props.deleteMateria(materia)} class="list-group-item">Borrar</button>
                        <div class="w-100"></div>
                    </>
                );
            })}
        </ul>
    );
}