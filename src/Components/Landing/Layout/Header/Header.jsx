import React from 'react'
import banner from '../../assets/banners/process.svg'
export default function Header() {
  return (
    <>
      <section className="main_banner">
        <div className="container">
          <div className="banner_content">
            <div className="banner_slider">
              <div className="slide_content">
                <div className="left_side">
                  <div className="main_content_wrap">
                    <div className="title_wrapper">
                      <h1 className="main_title">
                        <span>CONTROL</span> ALL <span>BUSINESS MAINTENANCE OPERATIONS FROM INSIDE</span> ONE <span>TOOL</span>
                      </h1>
                    </div>
    \20\200\Flip-Image-Hover-3D-Effects-                <div className="description">
                      <p>Need an efficient way to manage your business operations? Look no more! CMMSGo will keep you up to date with your assets, sales, and purchases. Use an automated tool to streamline your business maintenance.</p>
                    </div>
                    <div className="btn_wrapper"> 
                      <a target="_blank" href="https://demo.rajodiya.com/cmmsgo/login" className="custome_btn">
                        <span>Get Started For Free!</span></a>
                    </div>
                  </div>
                </div>
                <div className="right_side">
                  <div className="main_image_wrap">
                    <div className="single_image">
                      <img src={banner} alt="banner" />
                    </div>
                    <div className="image_rings">
                      <div className="ring_0 ring"></div>
                      <div className="ring_1 ring"></div>
                      <div className="ring_2 ring"></div>
                      <div className="ring_3 ring"></div>

                    </div>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}
