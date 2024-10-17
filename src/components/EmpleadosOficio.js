import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class EmpleadosOficio extends Component {

    apiUrl = Global.urlApiEmpleados;
    selectOficio = React.createRef();

    empleados = []
    state = {
        oficios: [],
        empleadosPorOficio: []
    }

    loadEmpleados = () => {
        let request = "api/Empleados"
        axios.get(this.apiUrl + request).then(response => {
            this.empleados = response.data
            this.obtenerOficios();


        })
    }

    obtenerOficios = () => {
        for (var i = 0; i < this.empleados.length - 1; i++) {
            var oficio = this.empleados[i].oficio;
            if (!this.state.oficios.includes(oficio)) {
                this.state.oficios.push(oficio)
            }
        }
        this.setState({
            oficios: this.state.oficios
        })
    }

    mostrarEmpleados = (e) => {
        e.preventDefault();
        let oficioSeleccionado = this.selectOficio.current.value;
        let request = "api/Empleados/EmpleadosOficio/" + oficioSeleccionado
        axios.get(this.apiUrl + request).then(response => {
            this.setState({
                empleadosPorOficio: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
        console.log("component")

    }
    render() {
        return (
            <div>
                <h1>Empleados Oficio</h1>
                <form onSubmit={this.mostrarEmpleados}>
                    <label>Seleccione un oficio</label>
                    <select ref={this.selectOficio}>
                        {
                            this.state.oficios.map((oficio, index) => {

                                return (<option key={index} value={oficio}>{oficio}</option>)
                            })
                        }
                    </select>
                    <button>
                        Mostar Empleados
                    </button>
                </form>
                <ul>
                    {
                        this.state.empleadosPorOficio.map((empleado, index) => {
                            return (
                                <li key={index}>ID: {empleado.idEmpleado} | Nombre: {empleado.apellido} | Salario: {empleado.salario} </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
