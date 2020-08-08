import React from 'react';
import DetalleCalificacion from './DetalleCalificacion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons'

class VistaCalificaciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            materiaSeleccionada: -1,
            alumnoSeleccionado: -1,
            vistaActual: 'listado'
        };
    }

    setVistaActual(vista, alumnoSeleccionado, materiaSeleccionada) {
        const newState = { vistaActual: vista };
        if (alumnoSeleccionado) {
            newState.alumnoSeleccionado = alumnoSeleccionado;
        } else {
            newState.alumnoSeleccionado = -1;
        }
        if (materiaSeleccionada) {
            newState.materiaSeleccionada = materiaSeleccionada;
        } else {
            newState.materiaSeleccionada = -1;
        }
        this.setState(newState);
    }

    render() {
        if (this.state.vistaActual === 'detalle') {
            const calificacion = this.props.calificaciones.find(element => (element.alumno === this.state.alumnoSeleccionado && element.materia === this.state.materiaSeleccionada));
            return (
                <div>
                    <DetalleCalificacion calificacion={calificacion} />
                    <button className="btn btn-danger" onClick={() => this.setVistaActual('listado', null, null)}>Volver</button>
                </div>
            );
        } else {
            return (
                <table className="mt-4">
                    <tbody>
                        {this.props.calificaciones.map((calificacion, index) => {
                            const alumno = this.props.alumnos.find(element => element.id === calificacion.alumno);
                            const materia = this.props.materias.find(element => element.id === calificacion.materia);
                            return (
                                <tr key={index}>
                                    <td>
                                        {alumno.nombre}
                                    </td>
                                    <td>
                                        {materia.nombre}
                                    </td>
                                    <td>
                                        {calificacion.nota}
                                    </td>
                                    <td class="text-right">
                                        <div className="btn-group">
                                            <button className="btn btn-sm btn-info" onClick={() => this.setVistaActual('detalle', calificacion.alumno, calificacion.materia)}><FontAwesomeIcon icon={faEye} /></button>
                                            <button className="btn btn-sm btn-danger" onClick={() => this.eliminar(calificacion.alumno, calificacion.materia)}><FontAwesomeIcon icon={faTrash} /></button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )
        }
    }

    eliminar(alumno, materia) {
        let newState = {};
        const items = this.props.calificaciones.filter(item => !(item.materia === materia && item.alumno === alumno));
        newState.calificaciones = items;
        this.setState(newState);
        this.props.handleDelete(newState);
    }
}

export default VistaCalificaciones;
