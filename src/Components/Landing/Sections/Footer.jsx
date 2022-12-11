import React from "react";
import Logo from "../../../assets/logo.png";
export default function Footer() {
  return (
    <>
      <footer className="site_footer">
        <div className="container">
          <div className="topba">
            <div className="footer_logo">
              <a href="workdo.html">
                <img src={Logo} style={{ height: "100px" }} alt="logo" />
              </a>
            </div>
            <div className="desc_text mobile_desc">
              <p>
                We build modern web tools to help you jump-start your daily
                business work.
              </p>
            </div>
            <div className="footer_top_right">
              
            </div>
          </div>
          <div className="footer_content d-flex justify-content-between">
            <div className="footer_desc">
              <div className="desc_text">
                <p>
                  We build modern web tools to help you jump-start your daily
                  business work.
                </p>
              </div>
              <div className="copy_right">
                <p>
                  All Rights Reserved to{" "}
                  <a href="/">
                    <br />
                    Smart Requirements
                  </a>
                </p>
              </div>
            </div>
            <div className="footer_menu">
              <ul className="menu_list accordion-content">
                <li>
                  <a href="/">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="newsletter">
              <h2 className="title">
                Send Yur <span>Feedbacks</span>
              </h2>
              <div className="news_desk">
                <p>
                  We build modern web tools to help you jump-start your daily
                  business work.{" "}
                </p>
              </div>
              <div className="subscribe_wrap">
                <form method="post" action="#">
                  <div className="input_wrapper">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Send feedbacks..."
                      name="email"
                    />
                    <button type="submit" className="join_btn">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="copy_right mobile_view">
              <p>
                All Rights Reserved to <a href="/">SR</a>
              </p>
            </div>
          </div>
        </div>
        {/* <a id="toTop" className="top-btn" href="javascript:void(0)">top</a> */}
      </footer>
 
    </>
  );
}
