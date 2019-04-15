import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Nav extends Component {
    render(){
        return (

            // Need to make use of routing to link within pages
            <Router>
                   <div>
                    <header className="header_area animated">
                <div className="container-fluid">
                    <div className="row align-items-center">
                    {/* Menu Area Start */}
                    <div className="col-12 col-lg-10">
                        <div className="menu_area">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            {/* Logo */}
                            <a className="navbar-brand" href="#">PayNow</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                            {/* Menu Area */}
                            <div className="collapse navbar-collapse" id="ca-navbar">
                            <ul className="navbar-nav ml-auto" id="nav">
                                <li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>

                               
                                <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                                <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                            <div className="sing-up-button d-lg-none">
                                <a href="#">Sign Up Free</a>
                            </div>
                            </div>
                        </nav>
                        </div>
                    </div>
                    {/* Signup btn */}
                    <div className="col-12 col-lg-2">
                        <div className="sing-up-button d-none d-lg-block">
                        <a href="#">Sign Up Free</a>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
                {/* ***** Header Area End ***** */}
            </div>
            </Router>
         
        )
    }
}
