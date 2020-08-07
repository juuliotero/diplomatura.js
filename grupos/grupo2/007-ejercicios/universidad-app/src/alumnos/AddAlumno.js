import React from "react";

export default class AddAlumno extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            edad: "",
            longitud: this.props.longitud
        };
    }

    onChangeNombre(e) {
        this.setState({ nombre: e.target.value });
    }

    onChangeEdad(e) {
        this.setState({ edad: e.target.value });
    }

    agregarAlumno() {
        const nuevo = {
            nombre: this.state.nombre,
            edad: this.state.edad,
            id: this.state.longitud + 1
        };
        this.props.add(nuevo);
        this.setState({ longitud: this.state.longitud + 1 })
    }

    render() {
        return (
            <div>
                <label>Nombre:<input value={this.state.nombre} onChange={(e) => this.onChangeNombre(e)} /></label>
                <label> Edad:<input value={this.state.edad} onChange={(e) => this.onChangeEdad(e)} /></label>
                <button onClick={() => { this.agregarAlumno() }} className="btn btn-success ml-2">Agregar</button>
            </div>
        );
    }
}