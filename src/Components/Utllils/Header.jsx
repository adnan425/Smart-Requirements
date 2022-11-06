import React from "react";

export default function Header() {
  return (
    <header class="dash-header  transprent-bg">
      <div class="header-wrapper">
        <div class="me-auto dash-mob-drp">
          <ul class="list-unstyled">
            <li class="dash-h-item mob-hamburger">
              <a href="#!" class="dash-head-link" id="mobile-collapse">
                <div class="hamburger hamburger--arrowturn">
                  <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                  </div>
                </div>
              </a>
            </li>

            <li class="dropdown dash-h-item drp-company">
              <a
                class="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  class="theme-avtar"
                  src="https://demo.rajodiya.com/cmmsgo/storage/avatars/3.jpg"
                />
                <span class="hide-mob ms-2">company</span>
                <i class="ti ti-chevron-down drp-arrow nocolor hide-mob"></i>
              </a>
              <div class="dropdown-menu dash-h-dropdown">
                <a
                  href="https://demo.rajodiya.com/cmmsgo/my-account"
                  class="dropdown-item"
                >
                  <i class="ti ti-user"></i>
                  <span>Profile</span>
                </a>
                <a
                  href="" 
                  class="dropdown-item"
                >
                  <i class="ti ti-power"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div class="ms-auto">
          <ul class="list-unstyled">
            <li class="dropdown dash-h-item drp-notification">
              <a
                class="dash-head-link arrow-none me-0"
                href="https://demo.rajodiya.com/erpgo-saas/chats"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i class="ti ti-brand-hipchat"></i>
                <span class="bg-danger dash-h-badge message-toggle-msg  message-counter custom_messanger_counter beep">
                  {" "}
                  0<span class="sr-only"></span>
                </span>
              </a>
            </li>
            <li class="dropdown dash-h-item drp-language">
              <a
                class="dash-head-link dropdown-toggle arrow-none me-0"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i class="ti ti-world nocolor"></i>
                <span class="drp-text hide-mob">EN</span>
                <i class="ti ti-chevron-down drp-arrow nocolor"></i>
              </a>
              <div class="dropdown-menu dash-h-dropdown dropdown-menu-end">
                <a
                  href="https://demo.rajodiya.com/cmmsgo/super_admin/change_lang/ar"
                  class="dropdown-item "
                >
                  <span class="small">AR</span>
                </a>
                <a
                  href="https://demo.rajodiya.com/cmmsgo/super_admin/change_lang/da"
                  class="dropdown-item "
                >
                  <span class="small">DA</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
