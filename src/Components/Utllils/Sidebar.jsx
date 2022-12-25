import React, {useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar } from "../Store/Sidebar/Sidebar";
import Logo from "./Logo";

const Sidebar = ({ items  }) => {
  const [active, setActive] = useState(items[0]['label']);
  const activeClick = title=>{
    setActive(title);
  }
  const dispatch = useDispatch();
  var classes = '';
  const isShow = useSelector((state) => state.sidebar.isActive);
  if(isShow){ classes = "mob-sidebar-active" }else{ classes = "" }
 

  return (
    <nav className={`dash-sidebar light-sidebar transprent-bg active dash-trigger ${classes}`}>
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
                  <li className={ `dash-item  ${(active===label) ? 'active' : ""}` } key={id} onClick={() => {activeClick(label); dispatch(closeSidebar()) }} >
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
      { (isShow===true) && <div onClick={()=>{dispatch(closeSidebar())}} className="dash-menu-overlay"></div> }

    </nav>
  );
};
export default Sidebar;
