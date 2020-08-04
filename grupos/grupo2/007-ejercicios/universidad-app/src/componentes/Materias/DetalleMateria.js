import React from 'react';

class DetalleMateria extends React.Component {

    render() {
        return (
            <div className="mt-4">
                <p>
                    <b>
                        ID: {this.props.materia.id}
                    </b>
                    <br></br>
                    Nombre: {this.props.materia.nombre}
                </p>
                <hr></hr>
            </div>
        );
    }
}

export default DetalleMateria;