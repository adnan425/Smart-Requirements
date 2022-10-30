import React from 'react'

export default function Sidebar() {
    return (
        <nav className="dash-sidebar light-sidebar transprent-bg">
            <div className="navbar-wrapper">
                <div className="m-header main-logo">
                    <a href="#" className="b-brand">
                        { /* ========   change your logo hear   ============ */}
                        <img src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png" alt="" className="logo logo-lg" />
                        <img src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png" alt="" className="logo logo-sm" />
                    </a>
                </div>
                <div className="navbar-content">
                    <ul className="dash-navbar">
                        <li className="dash-item active">
                            <a href="https://demo.rajodiya.com/cmmsgo/home" className="dash-link"><span className="dash-micon"><i className="ti ti-home" /></span><span className="dash-mtext">Dashboard</span></a>

                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/location" className="dash-link"><span className="dash-micon"><i className="ti ti-current-location" /></span><span className="dash-mtext">Location</span></a>
                        </li>




                        <li className="dash-item dash-hasmenu">
                            <a className="dash-link " data-toggle="collapse" role="button" aria-expanded="false" aria-controls="navbar-getting-started"><span className="dash-micon"><i className="ti ti-users" /></span><span className="dash-mtext">Staff</span><span className="dash-arrow"><i data-feather="chevron-right" /></span></a>
                            <ul className="dash-submenu">
                                <li className="dash-item dash-hasmenu ">
                                    <a className="dash-link" href="https://demo.rajodiya.com/cmmsgo/users">Users</a>

                                </li>
                                <li className="dash-item dash-hasmenu ">
                                    <a className="dash-link" href="https://demo.rajodiya.com/cmmsgo/roles">Roles</a>

                                </li>

                            </ul>
                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/opentask" className="dash-link"><span className="dash-micon"><i className="ti ti-clipboard-check" /></span><span className="dash-mtext">Work Order</span></a>
                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/assets" className="dash-link"><span className="dash-micon"><i className="ti ti-box" /></span><span className="dash-mtext">Assets</span></a>
                        </li>


                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/parts" className="dash-link"><span className="dash-micon"><i className="ti ti-circles" /></span><span className="dash-mtext">Parts</span></a>
                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/pms" className="dash-link"><span className="dash-micon"><i className="ti ti-tools" /></span><span className="dash-mtext">PMs</span></a>
                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/vendors" className="dash-link"><span className="dash-micon"><i className="ti ti-credit-card" /></span><span className="dash-mtext">Vendor</span></a>
                        </li>


                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/pos" className="dash-link"><span className="dash-micon"><i className="ti ti-currency-dollar" /></span><span className="dash-mtext">POs</span></a>
                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/calender" className="dash-link"><span className="dash-micon"><i className="ti ti-calendar" /></span><span className="dash-mtext">Calendar</span></a>
                        </li>


                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/manage-language/en" className="dash-link"><span className="dash-micon"><i className="ti ti-language" /></span><span className="dash-mtext">Language</span></a>
                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/email_template_lang/1/en" className="dash-link"><span className="dash-micon"><i className="ti ti-template" /></span><span className="dash-mtext">Email Template</span></a>
                        </li>

                        <li className="dash-item ">
                            <a href="https://demo.rajodiya.com/cmmsgo/user/settings" className="dash-link"><span className="dash-micon"><i className="ti ti-settings" /></span><span className="dash-mtext">Company Settings</span></a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        
    )
}
