import React from 'react';
import './App.css';
import datos from './datos';
import ListaAlumnos from './alumnos/ListaAlumnos';
import ListaProfesores from './profesores/ListaProfesores';
import ListaMaterias from './materias/ListaMaterias';
import DetalleAlumnos from './alumnos/DetalleAlumnos';
import DetalleProfesores from './profesores/DetalleProfesores';
import DetalleMaterias from './materias/DetalleMaterias';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect
// } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
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
  setVistaActual = (vista, idSeleccionado) => {
    const newState = { vistaActual: vista };
    if (idSeleccionado) {
      newState.idDetalleSeleccionado = idSeleccionado;
    } else {
      newState.idDetalleSeleccionado = -1;
    }
    this.setState(newState);
  }

  addAlumno = (nuevoAlumno) => {
    this.setState({ alumnos: [nuevoAlumno, ...this.state.alumnos] });
  }

  addProfesor = (nuevoProfesor) => {
    this.setState({ profesores: [nuevoProfesor, ...this.state.profesores] });
  }

  deleteAlumno = (alumno) => {
    let i = this.state.alumnos.indexOf(alumno);
    if (i !== -1) {
      this.state.alumnos.splice(i, 1);
    }
    this.setState({ alumnos: this.state.alumnos }); //Ver si aca va spread
  }

  deleteProfesor = (profesor) => {
    let i = this.state.profesores.indexOf(profesor);
    if (i !== -1) {
      this.state.profesores.splice(i, 1);
    }
    this.setState({ profesores: this.state.profesores });
  }

  deleteMateria = (materia) => {
    let i = this.state.materias.indexOf(materia);
    if (i !== -1) {
      this.state.materias.splice(i, 1);
    }
    this.setState({ materias: this.state.materias });
  }

  render() {
    return (
      <div className="App">
        <header className="alert alert-info">Diplomatura JS</header>
        <div id="botonera">
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual("alumnos", 1)}>Alumnos</button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual("profesores", 2)}>Profesores</button>
          <button className="btn btn-outline-info" onClick={() => this.setVistaActual("materias", 3)}>Materias</button>
          <button className="btn btn-outline-info">Calificaciones</button>
        </div>
        <h2>{this.state.vistaActual.toLocaleUpperCase()}</h2>
        <div className="mainView">{this.setLista()}</div>
      </div>
    );
  }

  setLista() {
    const { vistaActual } = this.state;
    switch (vistaActual) {
      case 'alumnos':
        return (<ListaAlumnos alumnos={this.state.alumnos} vistaActual={this.setVistaActual}
          addAlumno={this.addAlumno} deleteAlumno={this.deleteAlumno} />);
      case 'profesores':
        return (<ListaProfesores profesores={this.state.profesores} vistaActual={this.setVistaActual}
          addProfesor={this.addProfesor} deleteProfesor={this.deleteProfesor} />);
      case 'materias':
        return (<ListaMaterias materias={this.state.materias} vistaActual={this.setVistaActual}
          deleteMateria={this.deleteMateria} />);
      case 'detalleAlumnos':
        return (<DetalleAlumnos alumnoId={this.state.idDetalleSeleccionado} alumnos={this.state.alumnos} />);
      case 'detalleProfesores':
        return (<DetalleProfesores profesorId={this.state.idDetalleSeleccionado} profesores={this.state.profesores} />);
      case 'detalleMaterias':
        return (<DetalleMaterias materiaId={this.state.idDetalleSeleccionado} materias={this.state.materias} profesores={this.state.profesores} />);
      default:
        break;
    }
  }
}



export default App;
