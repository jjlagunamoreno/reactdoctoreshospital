import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuHospitales from './MenuHospitales'
import Doctores from './Doctores'
import DetallesDoctores from './DetallesDoctores'
import Home from './Home'

export default class Router extends Component {
    render() {
        function DoctoresElement() {
            var { idhospital } = useParams();
            return <Doctores idhospital={idhospital} />
        }
        // function DetallesDoctoresElement() {
        //     var { iddoctor } = useParams();
        //     return <DetallesDoctores iddoctor={iddoctor} />
        // }
        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* ruta para llamada al componente doctores */}
                    <Route path="/doctores/:idhospital"
                        element={<DoctoresElement />} />
                    {/* ruta para llamada al componente detalles doctores
                    <Route path="/detallesdoctores/:iddoctor"
                        element={<DetallesDoctoresElement />} /> */}
                </Routes>
            </BrowserRouter >
        )
    }
}
