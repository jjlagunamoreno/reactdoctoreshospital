import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'; //importamos navegar para cambiar de ruta con el estado al subir el hospital

export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    insertHospital = (e) => {
        e.preventDefault();
        let request = "webresources/hospitales/post"
        let url = Global.apiHospitales + request;
        //DEBEMOS RESPETAR LOS TIPOS DE DATOS DEL SERVICIO
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let direccion = this.cajaDireccion.current.value;
        let telefono = this.cajaTelefono.current.value;
        let camas = parseInt(this.cajaCamas.current.value);
        //NECESITAMOS UN OBJETO React CON EL MISMO NOMBRE DE PROPIEDADES QUE EL SERVICIO
        let hospital = {
            idhospital: id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas
        }
        axios.post(url, hospital).then(response => {
            this.setState({
                mensaje: "Hospital inseretado: " + nombre,
                status: true //con esta variable le damos el status a true para que pinte el nuevo componente
            })
        })
    }
    state = {
        mensaje: "",
        status: false //declaramos la variable para el status de si el componente nuevo no está pintado de momento
    }
    render() {
        return (
            <div style={{ padding: "5%" }}>
                {/* si la variable es true entonces pintamos el componente importado */}
                {
                    this.state.status == true &&
                    (<Navigate to="/hospitales" />)
                }
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
