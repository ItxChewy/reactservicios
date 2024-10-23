import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class Trabajadores extends Component {
    cajaAumento = React.createRef();
    state = {
        trabajadores: [],
        mensaje: ""
    }

    loadTrabajadores = () => {
        let idsHospitales = this.props.idhospitales;
        if (idsHospitales.length != 0) {
            let data = "";
            for (var id of idsHospitales) {
                data += "idhospital=" + id + "&";
            }
            data = data.substring(0, data.length - 1);
            this.setState({
                mensaje: data
            })
            let request = "api/trabajadores/trabajadoreshospitales?" + data
            let url = Global.urlHospitalEmpleados + request
            axios.get(url).then(response => {
                this.setState({
                    trabajadores: response.data
                })
            })
        }
    }

    aumentarSalario = (e) => {
        e.preventDefault();
        var request = "api/trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" 
        + this.cajaAumento.current.value + "&" + this.state.mensaje
        var url = Global.urlHospitalEmpleados + request
        axios.put(url).then(response =>{
            this.loadTrabajadores()
        })
    }
    componentDidMount = () => {
        this.loadTrabajadores()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.idhospitales !== this.props.idhospitales) {
            this.loadTrabajadores();
        }
    }


    render() {
        return (
            <div>
                <h1 style={{ color: "brown" }}>Trabajadores</h1>
                <form className='form'>
                    <label className='form-label'>Incrementar salario:</label>
                    <input type='text' ref={this.cajaAumento} className="form-control"></input><br></br>
                    <button className='btn btn-sm btn-success' onClick={this.aumentarSalario}>Incrementar</button>
                </form>
                <br></br>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trabajadores.map((trabajador, index) => {
                                return (
                                    <tr key={index}>
                                        <td >{trabajador.apellido}</td>
                                        <td>{trabajador.salario}</td>
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
