import React from "react";

export default function DetalleMaterias(props) {
    const buscadoMateria = props.materias.find(
        (materia) => materia.id === props.materiaId
    );
    let prof = []
    buscadoMateria.profesores.forEach(element => {
        let aux = props.profesores.find(
            (profesor) => element === profesor.id
        );
        if (aux) {
            prof = [aux, ...prof];
        }
    });
    console.log(prof);
    return (
        <ul>
            <li class="list-group-item">Materia: {buscadoMateria.nombre} </li>
            <li class="list-group-item">Profesores: {prof.map(profesor => { return (profesor.nombre + ". ") })}</li>
        </ul >
    );
}