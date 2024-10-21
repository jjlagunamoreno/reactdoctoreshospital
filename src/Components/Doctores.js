import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global';

export default class Doctores extends Component {
    state = {
        doctores: []
    }
    loadDoctores = () => {
        var idHospital = this.props.idhospital;
        var request = "api/doctores/doctoreshospital/" + idHospital;
        var url = Global.apiDoctores + request;
        axios.get(url).then(response => {
            console.log("leyendo servicio doctores...")
            this.setState({
                doctores: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadDoctores();
    }
    componentDidUpdate = (oldProps) => {
        //NUNCA LLAMAREMOS A NADA SI NO TENEMOS UN IF
        if (this.props.idhospital != oldProps.idhospital) {
            this.loadDoctores();
        }
    }
    render() {
        return (
            <div>
                <h2>
                    Doctores del hospital:
                    <span style={{ color: "red" }}>{this.props.idhospital}</span>
                </h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Opciones</th>
                            {/* <th>Especialidad</th>
                            <th>Salario</th>
                            <th>ID Hospital</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doc, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doc.apellido}</td>
                                        <td><button>Detalles</button></td>
                                        {/* <td>{doc.especialidad}</td>
                                        <td>{doc.salario}</td>
                                        <td>{doc.idHospital}</td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
