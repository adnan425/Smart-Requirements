import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Logo from "./Logo";
import SingleList from "./SingleList";
const Sidebar = ({ items }) => {
  return (
    <nav className="dash-sidebar light-sidebar transprent-bg active dash-trigger">
      <div className="navbar-wrapper">
        <div className="m-header main-logo">
          <Logo />
        </div>
        <PerfectScrollbar>
          <div className="navbar-content active">
            <ul className="dash-navbar">
              {items.map((list) => {
                return (
                  <SingleList tag="NavLink" id={list.id} path={list.path} icon={list.icon} label={list.label} />
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
