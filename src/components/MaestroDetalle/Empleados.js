import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleados extends Component {

    state = {
        empleados: [],
        texto:""
    }

    loadEmpleados = () => {
        let idDepartamento = this.props.iddepartamento;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento
        axios.get(Global.urlApiEmpleados2 + request).then(response => {
            console.log(response.data)
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = (odlProps) =>{
        // console.log("dibujando component : " + this.props.iddepartamento);
        console.log("oldprops: " + odlProps.iddepartamento)
        console.log("Current props: " + this.props.iddepartamento)
        //Solamente actualizaremos cuando props haya cambiado
        if(odlProps.iddepartamento != this.props.iddepartamento){
            this.loadEmpleados();
        }
        
    }

    render() {
        return (
            <div>
                <h1>Empleados {this.props.iddepartamento}</h1>
                <h2>
                    {this.state.texto}
                </h2>
                <table border={"1px"}>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((empleado,index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{empleado.apellido}</td>
                                        <td>{empleado.oficio}</td>
                                        <td>{empleado.departamento}</td>
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
