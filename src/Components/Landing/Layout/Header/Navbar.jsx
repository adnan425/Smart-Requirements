import React from 'react';
import Logo from '../../../../assets/logo.png';
export default function Navbar() {
    return (
        <header id="head" className="site_header">
            <nav className="navbar navbar-expand-sm">
                <div className="container">
                    <div className="site_brand">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="Logo" style={{height: '100px'}}  />
                        </a>
                    </div>
          
                </div>
            </nav>
        </header>
    )
}