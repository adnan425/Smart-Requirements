import React from "react";

export default function Header() {
  return (
    <header className="dash-header  transprent-bg">
      <div className="header-wrapper">
        <div className="me-auto dash-mob-drp">
          <ul className="list-unstyled">
            <li className="dash-h-item mob-hamburger">
              <a href="#!" className="dash-head-link" id="mobile-collapse">
                <div className="hamburger hamburger--arrowturn">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </a>
            </li>

            <li className="dropdown dash-h-item drp-company">
              <a
                className="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  className="theme-avtar"
                  src="https://demo.rajodiya.com/cmmsgo/storage/avatars/3.jpg"
                />
                <span className="hide-mob ms-2">company</span>
                <i className="ti ti-chevron-down drp-arrow nocolor hide-mob"></i>
              </a>
              <div className="dropdown-menu dash-h-dropdown">
                <a
                  href="https://demo.rajodiya.com/cmmsgo/my-account"
                  className="dropdown-item"
                >
                  <i className="ti ti-user"></i>
                  <span>Profile</span>
                </a>
                <a
                  href="" 
                  className="dropdown-item"
                >
                  <i className="ti ti-power"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          <ul className="list-unstyled">
            <li className="dropdown dash-h-item drp-notification">
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
            </li>
            <li className="dropdown dash-h-item drp-language">
              <a
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
              </a>
              <div className="dropdown-menu dash-h-dropdown dropdown-menu-end">
                <a
                  href="https://demo.rajodiya.com/cmmsgo/super_admin/change_lang/ar"
                  className="dropdown-item "
                >
                  <span className="small">AR</span>
                </a>
                <a
                  href="https://demo.rajodiya.com/cmmsgo/super_admin/change_lang/da"
                  className="dropdown-item "
                >
                  <span className="small">DA</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
