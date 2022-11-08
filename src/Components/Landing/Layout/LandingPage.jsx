import React from "react";
import  '../assets/css/animate.css-animate.min.css'; 
// import '../assets/css/css-bootstrap.min.css';
import  '../assets/css/css-slick.css';
import '../assets/css/css-swiper.css';

// import '../assets/css/css-responsive.css';

import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import Intro from "../Sections/Intro";
import Operations from "../Sections/Operations";
import Details from "../Sections/Details"; 
import Futuers from "../Sections/Futuers";
import Output from "../Sections/Output";
import About from "../Sections/About";
import Futures1 from "../Sections/Futures1";
import Manage from "../Sections/Manage";
import Contact from "../Sections/Contact";
import Footer from "../Sections/Footer";

export default function Layout({ children }) {
  return (
    <>

      <div class="page" id="page-content">
        <Header />
        {children}
        <div class="site_page_main">
          <Navbar />
          <Intro />
          <Operations />
          <Details />
          <About />
          <Output />
          <Futuers />
          <Futures1 />
          <Manage />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
