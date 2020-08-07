import React from "react";

export default class AddProfesor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            longitud: this.props.longitud
        };
    }

    onChangeNombre(e) {
        this.setState({ nombre: e.target.value });
    }

    agregarProfesor() {
        const nuevo = {
            nombre: this.state.nombre,
            id: this.state.longitud + 1
        };
        this.props.add(nuevo);
        this.setState({ longitud: this.state.longitud + 1 })
    }

    render() {
        return (
            <div>
                <label>Nombre y Apellido:<input value={this.state.nombre} onChange={(e) => this.onChangeNombre(e)} /></label>
                <button onClick={() => { this.agregarProfesor() }} className="btn btn-success ml-2">Agregar</button>
            </div>
        );
    }
}