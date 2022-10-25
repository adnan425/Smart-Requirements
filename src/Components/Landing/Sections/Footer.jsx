import React from 'react'

export default function Footer() {
    return (
        <footer class="site_footer">
            <div class="container">
                <div class="footer_top">
                    <div class="footer_logo">
                        <a href="workdo.html"><img src="assets/images/images-footer_logo.png" /></a>
                    </div>
                    <div class="desc_text mobile_desc">
                        <p>We build modern web tools to help you jump-start your daily business work.</p>
                    </div>
                    <div class="footer_top_right">
                        <div class="btn_wrapper">
                            <a href="https://codecanyon.net/user/rajodiyainfotech/portfolio" target="_blank"
                                class="custome_btn">Go to Shop</a>
                            <a href="https://support.rajodiya.com/" target="_blank" class="Support_link">Support</a>
                        </div>
                    </div>
                </div>
                <div class="footer_content">
                    <div class="footer_desc">
                        <div class="desc_text">
                            <p>We build modern web tools to help you jump-start your daily business work.</p>
                        </div>
                        <div class="copy_right">
                            <p>All Rights Reserved to <a href="#">workdo.io</a></p>
                        </div>
                    </div>
                    <div class="footer_menu">

                        <ul class="menu_list accordion-content">
                            <li><a href="aboutus.html">About Us</a></li>
                            <li><a href="blogs.html">Blog</a></li>
                            <li><a href="affiliate_program.html">Affiliate Program</a></li>

                        </ul>
                    </div>
                    <div class="footer_menu">
                        <ul class="menu_list accordion-content">
                            <li><a href="document_category.html">Knowledge Center</a></li>
                            <li><a href="contact_us.html">Contact Us</a></li>
                            <li><a href="deployment_request.html">Custom Development</a></li>
                        </ul>
                    </div>
                    <div class="footer_menu">
                        <ul class="menu_list accordion-content">
                            <li><a href="terms.html">Terms &amp; Conditions</a></li>
                            <li><a href="terms.html">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="newsletter">
                        <h2 class="title">Join Our <span>Community</span></h2>
                        <div class="news_desk">
                            <p>We build modern web tools to help you jump-start your daily business work. </p>
                        </div>
                        <div class="subscribe_wrap">
                            <form method="post" action="https://workdo.io/newsletter">

                                <div class="input_wrapper">
                                    <input type="text" class="form-control" placeholder="Your email add|ress..."
                                        name="email" />
                                    <button type="submit" class="join_btn">Join</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="copy_right mobile_view">
                        <p>All Rights Reserved to <a href="#">workdo.io</a></p>
                    </div>
                </div>
            </div>
            <a id="toTop" class="top-btn" href="javascript:void(0)">top</a>
        </footer>
    )
}
