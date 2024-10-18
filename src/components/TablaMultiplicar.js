import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

export default class TablaMultiplicar extends Component {
    state = {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let aux = [];
        let num = parseInt(this.props.numero);
        for (var i = 0; i <= 10; i++) {
            var operacion = num * i
            aux.push(operacion);
        }
        this.setState({
            tabla: aux
        })
    }
    componentDidMount = () => {
        this.generarTablaMultiplicar();
    }

    render() {
        
        return (
            <div>
                <h1>Tabla Multiplicar Rutas</h1>
                <table>
                    <thead>
                        <tr>
                            <th style={{ color: "blue" }}>Tabla del {this.props.numero}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.tabla.map((numero, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{this.props.numero} * {index} = {numero}</td>
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
