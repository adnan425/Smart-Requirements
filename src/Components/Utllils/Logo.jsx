import React from 'react'
import {Link} from 'react-router-dom';
// import siteLogo from '../../assets/logos/'
import darkLogo from './../../assets/logos/dark_logo.png'


export default function Logo({path = "/"}) {
  
  return (
    <Link to={path} className="navbar-brand">
    {/* ========   change your logo hear   ============ */}
    <img
      src={darkLogo} style={{"height": '100px'}}
      alt="Logo"
      className="logo logo-lg"
    />
    {/* <img
      src={siteLogo} style={{"height": '100px'}}
      alt=""
      className="logo logo-sm"
    /> */}
  </Link>
  )
}
