import React from 'react';
import DetalleProfesor from './DetalleProfesor';
import FormAddProfesor from './FormAddProfesor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

class VistaProfesores extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            vistaActual: 'profesores',
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
            const profesor = this.props.profesores.find(element => element.id === this.state.idSeleccionado);
            return (
                <div>
                    <DetalleProfesor profesor={profesor} />
                    <button className="btn btn-danger" onClick={this.setVistaActual.bind(this, 'listado', null)}>Volver</button>
                </div>
            );
        } else {
            return (
                <div>
                    <FormAddProfesor lastId={this.props.profesores[this.props.profesores.length - 1].id} handleAdd={this.props.handleAdd.bind(this)} />
                    <table className="mt-4">
                        <tbody>
                            {this.props.profesores.map(profesor => {
                                return (
                                    <tr key={profesor.id}>
                                        <td>
                                            {profesor.nombre}
                                        </td>
                                        <td class="text-right">
                                            <div className="btn-group">
                                                <button className="btn btn-sm btn-info" onClick={this.setVistaActual.bind(this, 'detalle', profesor.id)}><FontAwesomeIcon icon={faEye} /></button>
                                                <button className="btn btn-sm btn-danger" onClick={this.eliminar.bind(this, profesor.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    eliminar(id) {
        let newState = {};
        const items = this.props.profesores.filter(item => item.id !== id);
        newState.profesores = items;
        this.setState(newState);
        this.props.handleDelete(newState);
    }
}

export default VistaProfesores;
