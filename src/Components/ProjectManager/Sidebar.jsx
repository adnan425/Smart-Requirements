import React from 'react'
import PerfectScrollbar from "react-perfect-scrollbar"; 
import Logo from '../Utllils/Logo';

export default function Sidebar({items : projects , onProjectSelect}) {
    
    const items = [{          
        _id: 1,
        icon: "ti ti-home",
        title: "All Projects", }, ...projects,
      {
        _id: 10,
        icon: "ti ti-plus",
        title: "New Project",  
      }
      ]

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
                <li className="dash-item" onClick={()=> onProjectSelect(list)} key={list._id}>
                <div className="dash-link">
                  <span className="dash-micon">
                    <i className={(list.icon) ? list.icon : 'ti ti-list-check'} />
                  </span>
                  <span className="dash-mtext">{list.title.slice(0,20)}</span>
                  {/* <span className="dash-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span> */}
                </div>
              </li>
              )
            })}
          </ul>
        </div>
      </PerfectScrollbar>
    </div>
  </nav>
  )
}
