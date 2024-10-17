import React, { Component } from 'react'
import Empleados from './Empleados'
import axios from 'axios'
import Global from '../../Global'

export default class Departamentos extends Component {

  selectDepartamentos = React.createRef();

  state = {
    departamentos: [],
    idDepartamento: 0
  }

  loadDepartamentos = () => {
    let request = "api/departamentos";
    axios.get(Global.urlApiDepartamentos + request).then(response => {
      this.setState({
        departamentos: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadDepartamentos();
  }

  buscarEmpleados = (e) => {
    e.preventDefault();
    let idDepartamento = this.selectDepartamentos.current.value;
    this.setState({
      idDepartamento: idDepartamento
    })
  }

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form>
          <label>Seleccionar Departamento: </label>
          <select ref={this.selectDepartamentos}>
            {
              this.state.departamentos.map((departamento, index) => {
                return (<option key={index} value={departamento.Numero}>{departamento.Nombre}</option>)
              })
            }
          </select>
          <button onClick={this.buscarEmpleados}>
            Buscar Empleados
          </button>
        </form>
        <h2 style={{ color: "firebrick" }}>Id Departamento {this.state.idDepartamento}</h2>
        {
          this.state.idDepartamento != 0 &&
          (
            <Empleados iddepartamento={this.state.idDepartamento} />
          )
        }
      </div>
    )
  }
}
