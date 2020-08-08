import React from 'react';

export default function DetalleCalificacion(props) {
    return (
        <div className="mt-4">
            <p>
                <b>
                    NOTA: {props.calificacion.nota}
                </b>
            </p>
            <hr></hr>
        </div>
    );
}

