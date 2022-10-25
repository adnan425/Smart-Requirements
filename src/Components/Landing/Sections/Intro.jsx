import React from 'react'

export default function Intro() {
    return (
        <section class="unbeatable-price-section">
            <div class="container">
                <div class="nbeatable-price-inner">
                    <div class="section_title_wrapper">
                        <h1 class="main_title f-20">
                            SR Helps You <span>Do More</span> With Less&hellip;
                            Get It At An Affordable Price!
                        </h1>
                    </div>
                    <div
                        class="unbeatable-btns d-flex align-items-center justify-content-sm-between justify-content-center">
                        <a target="_blank"
                            href="#"
                            class="custome_btn extend-license-btn">
                            <span>Buy Extended License Now</span>
                            <img src="assets/images/images-images.png" class="imgenvol" alt='img' />

                        </a>
                        <a target="_blank"
                            href="#"
                            class="custome_btn reg-license-btn">
                            <span>Buy Regular License Now</span>
                            <img src="assets/images/images-images.png" class="imgenvol" alt='img' />
                        </a>
                    </div>
                    <div class="border-texts">
                        <p><b>Regular vs Extended License:</b>
                            Choose the Regular License if your end product is distributed free of charge, and choose
                            the Extended License if your end product is sold or otherwise limited to paying
                            customers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
