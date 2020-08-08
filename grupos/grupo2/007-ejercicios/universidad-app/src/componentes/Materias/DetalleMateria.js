import React from 'react';

export default function DetalleMateria(props) {

    return (
        <div className="mt-4">
            <p>
                <b>
                    ID: {props.materia.id}
                </b>
                <br></br>
                    Nombre: {props.materia.nombre}
            </p>
            <hr></hr>
        </div>
    );
}
