import React, {Component } from 'react'
import { BrowserRouter,Route,Routes,useParams } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import TablaMultiplicar from './TablaMultiplicar'

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement(){
        var {minumero} = useParams();
        
        return <TablaMultiplicar numero={minumero}/>
        
    }
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tabla/:minumero' element={<TablaMultiplicarElement/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}