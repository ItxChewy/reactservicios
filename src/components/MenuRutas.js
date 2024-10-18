import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/tabla/34'>Tabla 34</a>
                    </li>
                    <li>
                        <a href='/tabla/5'>Tabla 5</a>
                    </li>
                    <li>
                        <a href='/error'>404</a>
                    </li>
                </ul>
            </div>
        )
    }
}
