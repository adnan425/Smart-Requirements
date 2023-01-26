import React from 'react'
import { Link } from 'react-router-dom'; 
import lightLogo from './../../assets/logos/blue.png'
import darkLogo from './../../assets/logos/dark.png'


export default function Logo({ path = "/" }) {
  const themeMode = localStorage.getItem('themeMode');
  
  return (
    <Link to={path} className="navbar-brand">
      {/* ========   change your logo hear   ============ */}
      {
        themeMode && <img
          src={darkLogo} style={{ "height": '75px' }}
          alt="Logo"
          className="logo logo-lg"
        />
      }
            {
        !themeMode && <img
          src={lightLogo} style={{ "height": '75px' }}
          alt="Logo"
          className="logo logo-lg"
        />
      }


      {/* <img
      src={siteLogo} style={{"height": '100px'}}
      alt=""
      className="logo logo-sm"
    /> */}
    </Link>
  )
}
