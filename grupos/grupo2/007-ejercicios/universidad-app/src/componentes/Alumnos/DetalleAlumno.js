import React from 'react';

class DetalleAlumno extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <p>
                    <b>
                        ID: {this.props.alumno.id}
                    </b>
                    <br></br>
                    Nombre: {this.props.alumno.nombre}
                    <br></br>
                    Edad: {this.props.alumno.edad}
                </p>
                <hr></hr>
            </div>
        );
    }
}

export default DetalleAlumno;