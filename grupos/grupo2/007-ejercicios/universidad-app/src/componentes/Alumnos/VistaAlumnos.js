import React from 'react';
import DetalleAlumno from './DetalleAlumno';
import FormAddAlumno from './FormAddAlumno';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

class VistaAlumnos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vistaActual: 'alumnos',
            idSeleccionado: -1,
            modo: 'listado'
        };
    }

    setVistaActual(modo, idSeleccionado) {
        const newState = { modo: modo };
        if (idSeleccionado) {
            newState.idSeleccionado = idSeleccionado;
        } else {
            newState.idSeleccionado = -1;
        }
        this.setState(newState);
    }

    render() {
        if (this.state.modo === 'detalle') {
            const alumno = this.props.alumnos.find(element => element.id === this.state.idSeleccionado);
            return (
                <div className="row">
                    <div className="col-12">
                        <DetalleAlumno alumno={alumno} />
                        <button className="btn btn-danger" onClick={() => this.setVistaActual('listado', null)}>Volver</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-12">
                        <FormAddAlumno alumnos={this.props.alumnos} lastId={this.props.alumnos[this.props.alumnos.length - 1].id} handleAdd={this.props.handleAdd} />
                        <table className="mt-4">
                            <tbody>
                                {this.props.alumnos.map(alumno => {
                                    return (
                                        <tr key={alumno.id}>
                                            <td>
                                                {alumno.nombre}
                                            </td>
                                            <td class="text-right">
                                                <div className="btn-group">
                                                    <button className="btn btn-sm btn-info" onClick={() => this.setVistaActual('detalle', alumno.id)}><FontAwesomeIcon icon={faEye} /></button>
                                                    <button className="btn btn-sm btn-danger btn-eliminar" onClick={() => this.eliminar(alumno.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
    }

    eliminar(id) {
        let newState = {};
        const items = this.props.alumnos.filter(item => item.id !== id);
        newState.alumnos = items;
        this.setState(newState);
        this.props.handleDelete(newState);
    }
}

export default VistaAlumnos;
