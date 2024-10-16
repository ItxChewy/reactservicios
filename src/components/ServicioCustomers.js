import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';

export default class ServicioCustomers extends Component {
  
    urlCustomer = Global.urlApiCustomers;

    state = {
        customers:[]
    }

    loadCustomers = () => {
        console.log("ANTES DEL SERVICIO")
        let request = "customers.json"
        axios.get(this.urlCustomer + request).then(response =>{
            console.log("leyendo.....")
            this.setState({
                customers:response.data.results
            })
        })
        console.log("DESPUES DEL SERVICIO")
    }

    componentDidMount = () =>{
        console.log("CreandoComponent")
        this.loadCustomers();
    }

    render() {
    return (
      <div>
        <h1>Servicio API Customers</h1>
        <button onClick={this.loadCustomers}>Mostrar customers</button>
        <div>
            <ul>
                {
                    this.state.customers.map((cliente,index) =>{
                        return(
                            <li key={index}>{cliente.id}</li>
                        )
                    })
                }
            </ul>
        </div>
      </div>
  
    )
  }
}
