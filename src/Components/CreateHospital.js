import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'

export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    insertHospital = (e) => {
        e.preventDefault();
    }
    state = {
        mensaje: ""
    }
    render() {
        return (
            <div style={{ padding: "5%" }}>
                <h1>New Hospital</h1>
                <h2 style={{ color: 'blue' }}>{this.state.mensaje}</h2>
                <hr />
                <form>
                    <label>ID Hospital</label>
                    <input type='text' ref={this.cajaId} className='form-control' />
                    <label>Nombre</label>
                    <input type='text' ref={this.cajaNombre} className='form-control' />
                    <label>Dirección</label>
                    <input type='text' ref={this.cajaDireccion} className='form-control' />
                    <label>Teléfono</label>
                    <input type='text' ref={this.cajaTelefono} className='form-control' />
                    <label>Camas</label>
                    <input type='text' ref={this.cajaCamas} className='form-control' />
                    <button onClick={this.insertHospital} className='btn btn-warning'>
                        Insert
                    </button>
                </form>
            </div>
        )
    }
}
