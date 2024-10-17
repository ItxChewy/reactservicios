import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DepartamentosEmpleados extends Component {
    
    selectDepartamento = React.createRef();

    state ={
        empleados:[],
        departamentos:[]
    }

    buscarEmpleado = (e) =>{
        e.preventDefault();
        let idDepartamento = this.selectDepartamento.current.value;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
        axios.get(Global.urlApiEmpleados + request).then(response =>{
            console.log(response.data)
            this.setState({
                empleados:response.data
            })
        })
    }

    loadDepartamentos = () =>{
        let request = "api/departamentos"
        axios.get(Global.urlApiDepartamentos + request).then(response =>{
            this.setState({
                departamentos:response.data
            })
        })
    }

    componentDidMount = () =>{
        this.loadDepartamentos();
    }

    render() {
    return (
      <div>
        <h1>Departamentos Empleados</h1>
        <form>
            <label>Selecciona un departamento: </label>
            <select ref={this.selectDepartamento}>
                {
                    this.state.departamentos.map((departamento,index) =>{
                        return(<option key={index} value={departamento.Numero}>{departamento.Nombre}</option>)
                    })
                }
            </select>
            <button onClick={this.buscarEmpleado}>Buscar Empleado</button>
        </form>
        <ul>
            {
                this.state.empleados.map((empleado,index) =>{
                    return(
                        <li key={index}>
                            {empleado.apellido} - {empleado.oficio}
                        </li>
                    )
                })
            }
        </ul>
      </div>
    )
  }
}
