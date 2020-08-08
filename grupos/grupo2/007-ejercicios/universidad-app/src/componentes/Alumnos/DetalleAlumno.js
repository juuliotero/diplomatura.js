import React from 'react';

export default function DetalleAlumno(props) {
    return (
        <div className="mt-4">
            <p>
                <b>
                    ID: {props.alumno.id}
                </b>
                <br></br>
                    Nombre: {props.alumno.nombre}
                <br></br>
                    Edad: {props.alumno.edad}
            </p>
            <hr></hr>
        </div>
    );
}
