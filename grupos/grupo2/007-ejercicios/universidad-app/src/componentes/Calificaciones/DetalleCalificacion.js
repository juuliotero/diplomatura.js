import React from 'react';

class DetalleCalificacion extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <p>
                    <b>
                        NOTA: {this.props.calificacion.nota}
                    </b>
                </p>
                <hr></hr>
            </div>
        );
    }
}

export default DetalleCalificacion;