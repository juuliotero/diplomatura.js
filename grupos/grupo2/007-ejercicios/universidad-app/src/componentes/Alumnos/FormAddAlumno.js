import React from 'react';

class FormAddAlumno extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            edad: ''
        };
    }


    handleChangeNombre(event) {
        this.setState({ nombre: event.target.value });
    }

    handleChangeEdad(event) {
        this.setState({ edad: event.target.value });
    }

    submitForm(event) {
        const newAlumno = {
            nombre: this.state.nombre,
            edad: this.state.edad,
            id: this.props.lastId + 1
        }
        this.setState({ lastId: this.props.lastId + 1 });
        this.props.handleAdd(newAlumno);
        event.preventDefault();
        this.setState({ nombre: '', edad: '' });
    }

    render() {
        return (
            <form className="form-inline" onSubmit={(e) => this.submitForm(e)}>
                <div class="form-group mb-2 flex-fill">
                    <label class="sr-only" >Nombre</label>
                    <input className="form-control flex-fill" type="text" name="nombre" placeholder="Nombre" value={this.state.nombre} onChange={(e) => this.handleChangeNombre(e)} required></input>
                </div>
                <div class="form-group mb-2 ml-2  flex-fill">
                    <label class="sr-only" >Edad</label>
                    <input className="form-control flex-fill" type="text" name="edad" placeholder="Edad" value={this.state.edad} onChange={(e) => this.handleChangeEdad(e)} required></input>
                </div>
                <input className="btn btn-success mb-2 ml-2" type="submit" value="Guardar nuevo alumno" />
            </form >
        );
    }
}

export default FormAddAlumno;