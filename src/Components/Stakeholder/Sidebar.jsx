import React, {useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Logo from "../Utllils/Logo";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { closeSidebar } from "../Store/Sidebar/Sidebar";
import Avatar from 'react-avatar';

export default function Sidebar({ items: projects, onProjectSelect }) {
  var items = [
    {
      _id: 1,
      icon: "ti ti-home",
      title: "My Projects",
    },
    ...projects, 
    {
      _id: 11,
      icon: "ti ti-settings",
      title: "Settings",
    },
    
  ];
  const isShow = useSelector((state) => state.sidebar.isActive);
  const dispatch = useDispatch();
  const [active, setActive] = useState('All Projects');
  var classes = '';
  if(isShow){ classes = "mob-sidebar-active" }else{ classes = "" }
  const activeClick = ({title})=>{
    setActive(title);
  }
 
  return (
    <nav className={`dash-sidebar light-sidebar transprent-bg active dash-trigger ${classes}`}>
      <div className="navbar-wrapper" style={{display: 'block'}}>
        <div className="m-header main-logo">
          <Logo />
        </div>
        <PerfectScrollbar>
          <div className="navbar-content active">
            <ul className="dash-navbar">
              {items && items.map((list) => {
                return (
                  <li
                    className={ `dash-item  ${(active===list.title) ? 'active' : ""}` }
                    onClick={() => {onProjectSelect(list); activeClick(list); dispatch(closeSidebar()) }} 
                    key={list._id}
                  >
                    <div className="dash-link">
                      <span className="dash-micon">
                        <i
                          // className={list.icon ? list.icon : "ti ti-layout-2"}

                        >

                          <Avatar  size="30" name={list.title}  round="10px"/>

                        </i>
                      </span>
                      <span className="dash-mtext">
                        {list.title }
                      </span>
                      {/* <span className="dash-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span> */}
                    </div>
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
}
