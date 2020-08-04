import React from 'react';
import './App.css';
import datos from './datos';
import VistaAlumnos from './componentes/Alumnos/VistaAlumnos';
import VistaCalificaciones from './componentes/Calificaciones/VistaCalificaciones';
import VistaMaterias from './componentes/Materias/vistaMaterias';
import VistaProfesores from './componentes/Profesores/VistaProfesores';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      vistaActual: 'alumnos',
      idDetalleSeleccionado: -1,
      alumnos: datos.alumnos,
      profesores: datos.profesores,
      materias: datos.materias,
      calificaciones: datos.calificaciones,
    };
  }
  /**
   * Se utiliza para disparar el cambio de vista.
   * Si viene un id seleccionado, se setea como el detalle actual.
   * @param {*} vista
   * @param {*} idSeleccionado
   */

  setVistaActual(vista, idSeleccionado) {
    const newState = { vistaActual: vista };
    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    this.setState(newState);
  }

  render() {
    const vistaActual = <div>{this.getVista()}</div>;
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual('alumnos', null)}>Alumnos</button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual('profesores', null)}>Profesores</button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual('materias', null)}>Materias</button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual('calificaciones', null)}>Calificaciones</button>
        </div>
        <h2 className="title mt-5">{this.state.vistaActual}</h2>
        <div className="mainView">{vistaActual}</div>
      </div>
    );
  }

  handleDelete(newState) {
    this.setState(newState);
  }

  handleAddAlumno(alumno) {
    this.setState({ alumnos: [...this.state.alumnos, alumno] });
  }

  handleAddMateria(materia) {
    this.setState({ materias: [...this.state.materias, materia] });
  }

  handleAddProfesor(profesor) {
    this.setState({ profesores: [...this.state.profesores, profesor] });
  }


  getVista() {
    switch (this.state.vistaActual) {
      case 'alumnos':
        return <VistaAlumnos alumnos={this.state.alumnos} handleDelete={this.handleDelete.bind(this)} handleAdd={this.handleAddAlumno.bind(this)} />;
      case 'profesores':
        return <VistaProfesores profesores={this.state.profesores} handleDelete={this.handleDelete.bind(this)} handleAdd={this.handleAddProfesor.bind(this)} />;
      case 'materias':
        return <VistaMaterias materias={this.state.materias} handleDelete={this.handleDelete.bind(this)} handleAdd={this.handleAddMateria.bind(this)} />;
      case 'calificaciones':
        return <VistaCalificaciones calificaciones={this.state.calificaciones} alumnos={this.state.alumnos} materias={this.state.materias} handleDelete={this.handleDelete.bind(this)} />;
      default:
        break;
    }
  }
}

export default App;
