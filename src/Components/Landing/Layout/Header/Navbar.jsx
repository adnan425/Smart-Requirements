import React from 'react'

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
                            <a href="#request_development" className="header_btn request_development_btn">Request Development</a>
                        </div>
                        <div className="menu_btn">
                            <a href="#request_development" className="header_btn product_customization_btn">Request Customization</a>
                        </div>
                        <div className="menu_btn">
                            <a href="https://codecanyon.net/user/rajodiyainfotech/portfolio" target="_blank" className="header_btn go_to_shop">Go to Shop</a>
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