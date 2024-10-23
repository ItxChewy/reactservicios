import React, { Component } from 'react'
import Trabajadores from './Trabajadores'
import axios from 'axios'
import Global from '../Global'

export default class HospitalesMultiple extends Component {
    selectHospital = React.createRef();

    state = {
        hospitales:[],
        hospitalesSeleccionados:[]
    }

    loadHospitales = () =>{
        var request = "api/hospitales"
        axios.get(Global.urlHospitalEmpleados+request).then(response =>{
            this.setState({
                hospitales:response.data
            })
        })
    }

    getHospitalesSeleccionados = (e) =>{
        e.preventDefault();
        let aux = [];
        let options = this.selectHospital.current.options;
        for(var opt of options){
            if(opt.selected == true){
                aux.push(opt.value);
            }
        }
        this.setState({
            hospitalesSeleccionados:aux
        })
    }

    componentDidMount = () =>{
        this.loadHospitales()
    }

  render() {
    return (
      <div style={{padding:"5%"}}>
        <h1>Hospitales Multiple</h1>
        <form className="form">
        <label className="form-label">Selecciona los hospitales: </label>
        <select className="form-control" size="8" multiple ref={this.selectHospital}>
            {
                this.state.hospitales.map((hospital,index)=>{
                    return(
                        <option className="form-control"  key={index} value={hospital.idHospital}>
                            {hospital.nombre}
                        </option>
                    )
                })
            }
        </select>
        <br></br>
        <button onClick={this.getHospitalesSeleccionados} className="btn btn-primary">Seleccionar</button>
        </form>
        <hr className="border border-dark border-3 opacity-75"/>
        {
            this.state.hospitalesSeleccionados.length != 0 &&
            (
                <Trabajadores idhospitales={this.state.hospitalesSeleccionados}/>
            )
        }
        
      </div>
    )
  }
}
