import React from 'react'

export default function Details() {
    return (
        <section className="product_detail_main">
            <div className="container">
                <div className="heading extra_heading mt-3">
                    <h1>
                        Run Your Business <span>Smoothly</span> With a Tool That <span>Saves</span> You Time &amp;
                        Money
                    </h1>
                </div>
                <div className="row product_main_details mt-0">
                    <div className="col-xl-7 col-lg-7 col-md-12">
                        <div className="main_product_img desktop_view">
                            <div className="product_preview">
                                <a  href="/"  
                                    className="custome_btn">Live
                                    preview</a>

                            </div>
                            <div className="product_img">
                                <img src="images/cmmsgo-image2.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12">
                        <div className="product_info">
                            <div className="title_desc">

                                <h1 className="title">CMMSGo is the most effective way to manage your maintenance
                                    operations.</h1>
                                <div className="description">
                                    <p>With CMMSGo, you can maximize production and solve maintenance issues in a
                                        breeze. CMMSGo is equipped with tons of customizable features, and
                                        everything you need is at your fingertips.</p>
                                </div>
                            </div>
                            {/* <!-- mobile_view_product_image start --> */}
                            <div className="main_product_img mobile_view">
                                <div className="product_img">
                                    <img src="assets/images/cmmsgo-image2.png" alt="" />
                                </div>
                                <div className="product_preview">NDE
                                    <a  href="/"  
                                        className="custome_btn">Live preview</a>

                                </div>
                            </div>
                            {/* <!-- mobile_view_product_image end--> */}

                            <div className="price_rate">
                                <div className="users_rating">
                                    <div className="tag_lines">
                                        <p>Fully Verified Ratings <br /> Trusted by Hundreds of Happy Users.</p>
                                        <ul className="rating_star">
                                            <li className="star">
                                            </li>
                                            <li className="star">
                                            </li>
                                            <li className="star">
                                            </li>
                                            <li className="star">
                                            </li>
                                            <li className="star">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="price_cartbtn unbeatable-btns">
                                    <span className="price"><span className="f-size">Only</span>
                                        $19</span>
                                    <a 
                                    rel='noreferrer'
                                        href="/"
                                        className="custome_btn extend-license-btn">
                                        <span>Get Access Now!</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28"
                                            viewbox="0 0 27 28" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M20.0165 9.64292H7.5068C6.25016 9.64292 5.25409 10.7032 5.33248 11.9574L5.87712 20.6716C5.94888 21.8198 6.90102 22.7143 8.05144 22.7143H19.4719C20.6223 22.7143 21.5744 21.8198 21.6462 20.6716L22.1908 11.9574C22.2692 10.7032 21.2732 9.64292 20.0165 9.64292ZM7.5068 7.46436C4.99352 7.46436 3.00139 9.58488 3.15816 12.0933L3.7028 20.8075C3.84633 23.1039 5.7506 24.8928 8.05144 24.8928H19.4719C21.7727 24.8928 23.677 23.1039 23.8205 20.8075L24.3652 12.0933C24.5219 9.58488 22.5298 7.46436 20.0165 7.46436H7.5068Z"
                                                fill="#002332"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8.31543 8.55358C8.31543 5.54561 10.7539 3.10718 13.7618 3.10718C16.7698 3.10718 19.2082 5.54561 19.2082 8.55358V10.7321C19.2082 11.3337 18.7205 11.8214 18.119 11.8214C17.5174 11.8214 17.0297 11.3337 17.0297 10.7321V8.55358C17.0297 6.7488 15.5666 5.28574 13.7618 5.28574C11.9571 5.28574 10.494 6.7488 10.494 8.55358V10.7321C10.494 11.3337 10.0063 11.8214 9.40471 11.8214C8.80312 11.8214 8.31543 11.3337 8.31543 10.7321V8.55358Z"
                                                fill="#002332"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
