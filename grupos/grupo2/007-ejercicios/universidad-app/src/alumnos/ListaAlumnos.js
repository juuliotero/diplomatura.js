import React from "react";
import AddAlumno from "./AddAlumno";

export default function ListaAlumnos(props) {
    return (
        <>
            <AddAlumno add={props.addAlumno} longitud={props.alumnos.length} />
            <ul class="row">
                {props.alumnos.map(alumno => {
                    return (
                        <>
                            <li key={alumno.id} onClick={() => props.vistaActual("detalleAlumnos", alumno.id)} class="list-group-item col">{alumno.nombre}</li>
                            <button onClick={() => props.deleteAlumno(alumno)} class="list-group-item">Borrar</button>
                            <div class="w-100"></div>
                        </>
                    );
                })}
            </ul>
        </>
    );
}