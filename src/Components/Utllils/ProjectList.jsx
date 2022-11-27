import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {NavLink} from 'react-router-dom';
import Logo from './Logo';

 const Sidebar = ({items}) =>{
  return (
    <nav className="dash-sidebar light-sidebar transprent-bg active dash-trigger">
      <div className="navbar-wrapper">
        <div className="m-header main-logo">
          <Logo/>
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