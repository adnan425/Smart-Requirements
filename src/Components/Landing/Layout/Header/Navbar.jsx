import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header id="head" className="site_header">
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <div className="site_brand">
                        <a className="navbar-brand" href="/">
                            <img src="/assets/images/cmmsgo-cmmsgo_light.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        
                     
                        <div className="menu_btn">
                            <Link to={'/login'} target="_blank" className="header_btn go_to_shop">Login</Link>
                        </div>
                    </div>
                    <button className="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}