import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {NavLink, Link} from 'react-router-dom';
 const Sidebar = ({items}) =>{
  return (
    <nav class="dash-sidebar light-sidebar transprent-bg active dash-trigger">
      <div class="navbar-wrapper">
        <div className="m-header main-logo">
          <Link to="/dashboard" className="b-brand">
            {/* ========   change your logo hear   ============ */}
            <img
              src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png"
              alt="Logo"
              className="logo logo-lg"
            />
            <img
              src="https://demo.rajodiya.com/cmmsgo/storage/logo/logo-dark.png"
              alt=""
              className="logo logo-sm"
            />
          </Link>
        </div>
        <PerfectScrollbar>
          <div className="navbar-content active">
            <ul className="dash-navbar">
              {items.map((list) => {
                return(
                  <li className="dash-item" key={list.id}>
                  <NavLink to={list.path} className="dash-link">
                    <span className="dash-micon">
                      <i className={list.icon} />
                    </span>
                    <span className="dash-mtext">{list.label}</span>
                  </NavLink>
                </li>
                )
              })}
            </ul>
          </div>
        </PerfectScrollbar>
      </div>
    </nav>
  );
}
export default Sidebar;