import React from "react";
import Logo from "../../../assets/logo.png";
export default function Footer() {
  return (
    <>
      <footer class="site_footer">
        <div class="container">
          <div class="topba">
            <div class="footer_logo">
              <a href="workdo.html">
                <img src={Logo} style={{ height: "100px" }} />
              </a>
            </div>
            <div class="desc_text mobile_desc">
              <p>
                We build modern web tools to help you jump-start your daily
                business work.
              </p>
            </div>
            <div class="footer_top_right">
              
            </div>
          </div>
          <div class="footer_content d-flex justify-content-between">
            <div class="footer_desc">
              <div class="desc_text">
                <p>
                  We build modern web tools to help you jump-start your daily
                  business work.
                </p>
              </div>
              <div class="copy_right">
                <p>
                  All Rights Reserved to{" "}
                  <a href="#">
                    <br />
                    Smart Requirements
                  </a>
                </p>
              </div>
            </div>
            <div class="footer_menu">
              <ul class="menu_list accordion-content">
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div class="newsletter">
              <h2 class="title">
                Send Yur <span>Feedbacks</span>
              </h2>
              <div class="news_desk">
                <p>
                  We build modern web tools to help you jump-start your daily
                  business work.{" "}
                </p>
              </div>
              <div class="subscribe_wrap">
                <form method="post" action="#">
                  <div class="input_wrapper">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Send feedbacks..."
                      name="email"
                    />
                    <button type="submit" class="join_btn">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="copy_right mobile_view">
              <p>
                All Rights Reserved to <a href="#">SR</a>
              </p>
            </div>
          </div>
        </div>
        {/* <a id="toTop" class="top-btn" href="javascript:void(0)">top</a> */}
      </footer>
 
    </>
  );
}
