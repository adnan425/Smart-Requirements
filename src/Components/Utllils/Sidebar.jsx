import React, {useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
const Sidebar = ({ items  }) => {
  const [active, setActive] = useState(items[0]['label']);
  const activeClick = title=>{
    setActive(title);
  }
  return (
    <nav className="dash-sidebar light-sidebar transprent-bg active dash-trigger">
      <div className="navbar-wrapper">
        <div className="m-header main-logo">
          <Logo />
        </div>
        <PerfectScrollbar>
          <div className="navbar-content active">
            <ul className="dash-navbar">
              {items && items.map(item => {
                const {  id , path , icon , label } = item;
                return (
                  <li className={ `dash-item  ${(active===label) ? 'active' : ""}` } key={id} onClick={() => {activeClick(label) }} >
                  <NavLink to={path} className="dash-link">
                    <span className="dash-micon">
                      <i className={icon} />
                    </span>
                    <span className="dash-mtext">{label}</span>
                  </NavLink>
                </li>
                );
              })}
            </ul>
          </div>
        </PerfectScrollbar>
      </div>
    </nav>
  );
};
export default Sidebar;
