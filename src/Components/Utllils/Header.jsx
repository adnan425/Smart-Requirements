import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../Services/authService";
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import { activeSidebar } from "../Store/Sidebar/Sidebar";
export default function Header() { 
  const [user, setUser] = useState(auth.getCurrentUser); 
 const dispatch = useDispatch();
  return (
    <header className="dash-header  transprent-bg ">
      <div className="header-wrapper">
        <div className="me-auto dash-mob-drp">
          <ul className="list-unstyled">
            <li className="dash-h-item mob-hamburger">
              <a href="#!" className="dash-head-link" onClick={()=>{dispatch(activeSidebar())}}  id="mobile-collapse">
                <div className="hamburger hamburger--arrowturn">
                  <div className="hamburger-box">
                    <div className="hamburger-inner">
                      
                    </div>

                  </div>
                </div>
              </a>
            </li>

            <li className="dropdown dash-h-item drp-company">
              <Link
                className="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown" 
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <Avatar  size="30" name={(user.name !== '') ? user.name : "User"} round="50%"/>
                {/* <img
                  className="theme-avtar"
                  src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                  alt="profile"
                /> */}
                <span className="hide-mob ms-2">{(user.name !== '') ? user.name : "User"}</span>
                <i className="ti ti-chevron-down drp-arrow nocolor hide-mob"></i>
              </Link>
              <div className="dropdown-menu dash-h-dropdown">
                {
                  user['role'] && <Link to={`settings`}
                  className="dropdown-item"
                >
                  <i className="ti ti-user"></i>
                  <span>Profile</span>
                </Link>
                }
                <Link
                  to={'/logout'} 
                  className="dropdown-item"
                >
                  <i className="ti ti-power"></i>
                  <span>Logout</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          <ul className="list-unstyled">
            {/* <li className="dropdown dash-h-item drp-notification">
              <a
                className="dash-head-link arrow-none me-0"
                href=""
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ti ti-brand-hipchat"></i>
                <span className="bg-danger dash-h-badge message-toggle-msg  message-counter custom_messanger_counter beep">
                  {" "}
                  0<span className="sr-only"></span>
                </span>
              </a>
            </li> */}
            <li className="dropdown dash-h-item drp-language">
              <Link
                className="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="ti ti-world nocolor"></i>
                <span className="drp-text hide-mob">EN</span>
                <i className="ti ti-chevron-down drp-arrow nocolor"></i>
              </Link>
              <div className="dropdown-menu dash-h-dropdown dropdown-menu-end">
                <Link
                  href="#"
                  className="dropdown-item "
                >
                  <span className="small">EN</span>
                </Link>
              
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
