import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/tabla/34'>Tabla 34</NavLink>
                    </li>
                    <li>
                        <NavLink to='/tabla/5'>Tabla 5</NavLink>
                    </li>
                    <li>
                        <NavLink to='/error'>404</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
