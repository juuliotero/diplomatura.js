import React from "react";
import AddProfesor from './AddProfesor';

export default function ListaProfesores(props) {
    return (
        <>
            <AddProfesor add={props.addProfesor} longitud={props.profesores.length} />
            <ul class="row">
                {props.profesores.map(profesor => {
                    return (
                        <>
                            <li key={profesor.id} onClick={() => props.vistaActual("detalleProfesores", profesor.id)} class="list-group-item col">{profesor.nombre}</li>
                            <button onClick={() => props.deleteProfesor(profesor)} class="list-group-item">Borrar</button>
                            <div class="w-100"></div>
                        </>
                    );
                })}
            </ul>
        </>
    );
}