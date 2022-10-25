import React from 'react'
import Header from './Header/Header'
import Navbar from './Header/Navbar';

export default function Layout({ children }) {
  return (<>
    <Header />
    {children}
    <div class="site_page_main">
      <Navbar />
    </div>

  </>)
}
