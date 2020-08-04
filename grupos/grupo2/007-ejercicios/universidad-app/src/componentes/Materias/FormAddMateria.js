import React from 'react';

class FormAddMateria extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            nombre: ''
        };
        this.handleChangeNombre = this.handleChangeNombre.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }


    handleChangeNombre(event) {
        this.setState({ nombre: event.target.value });
    }

    submitForm(event) {
        const newMateria = {
            nombre: this.state.nombre,
            id: this.props.lastId + 1
        }
        this.setState({ lastId: this.props.lastId + 1 });
        this.props.handleAdd(newMateria);
        this.setState({ nombre: '' });
        event.preventDefault();
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.submitForm}>
                <div class="form-group mb-2 flex-fill">
                    <label class="sr-only" >Nombre</label>
                    <input className="form-control  flex-fill" type="text" name="nombre" placeholder="Nombre" value={this.state.nombre} onChange={this.handleChangeNombre} required></input>
                </div>
                <input className="btn btn-success mb-2 ml-2" type="submit" value="Guardar nueva materia" />
            </form >
        );
    }
}

export default FormAddMateria;