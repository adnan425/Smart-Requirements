import React from 'react'

import Header from './Header/Header';
import Navbar from './Header/Navbar';
import Intro from '../Sections/Intro';
import Operations from './../Sections/Operations';
import Details from './../Sections/Details';
import Testimonial from './../Sections/Testimonial';
import Futuers from '../Sections/Futuers';
import Output from '../Sections/Output';
import About from '../Sections/About';
import Futures1 from '../Sections/Futures1';
import Manage from '../Sections/Manage';
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'; 

export default function Layout({ children }) {
  return (<>

    <Header />
    {children}
    <div class="site_page_main">
      <Navbar />
      <Intro />
      <Operations />
      <Details />
      <Testimonial />
      <About />
      <Output />
      <Futuers />
      <Futures1 />
      <Manage />
      <Contact />
    </div>
    <Footer />

  </>)
}
