import React from 'react';
import DetalleMateria from './DetalleMateria';
import FormAddMateria from './FormAddMateria';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

class VistaMaterias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vistaActual: 'materias',
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
            const materia = this.props.materias.find(element => element.id === this.state.idSeleccionado);
            return (
                <div>
                    <DetalleMateria materia={materia} />
                    <button className="btn btn-danger" onClick={() => this.setVistaActual('listado', null)}>Volver</button>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-12">
                        <FormAddMateria lastId={this.props.materias[this.props.materias.length - 1].id} handleAdd={this.props.handleAdd} />
                        <table className="mt-4">
                            <tbody>
                                {this.props.materias.map(materia => {
                                    return (
                                        <tr key={materia.id}>
                                            <td>
                                                {materia.nombre}
                                            </td>
                                            <td class="text-right">
                                                <div className="btn-group">
                                                    <button className="btn btn-sm btn-info" onClick={() => this.setVistaActual('detalle', materia.id)}><FontAwesomeIcon icon={faEye} /></button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => this.eliminar(materia.id)}><FontAwesomeIcon icon={faTrash} /></button>
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
        const items = this.props.materias.filter(item => item.id !== id);
        newState.materias = items;
        this.setState(newState);
        this.props.handleDelete(newState);
    }
}

export default VistaMaterias;
