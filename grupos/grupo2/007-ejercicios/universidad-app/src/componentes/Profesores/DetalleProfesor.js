import React from 'react';

class DetalleProfesor extends React.Component {

    render() {
        return (
            <div className="mt-4">
                <p>
                    <b>
                        ID: {this.props.profesor.id}
                    </b>
                    <br></br>
                    Nombre: {this.props.profesor.nombre}
                </p>
                <hr></hr>
            </div>
        );
    }
}

export default DetalleProfesor;