import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login  from '../components/Login/Login';



class Routes extends Component {
    render () {
        return (
       <BrowserRouter>
        <div>
            <Login />
        </div>

       </BrowserRouter>
    }
}

export default  Routes