import React from 'react';

export default function DetalleProfesor(props) {
    return (
        <div className="mt-4">
            <p>
                <b>
                    ID: {props.profesor.id}
                </b>
                <br></br>
                    Nombre: {props.profesor.nombre}
            </p>
            <hr></hr>
        </div>
    );
}
