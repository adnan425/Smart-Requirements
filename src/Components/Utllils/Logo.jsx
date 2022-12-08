import React from 'react'
import {Link} from 'react-router-dom';
import siteLogo from '../../assets/logo.png'

export default function Logo({path = "/"}) {
  return (
    <Link to={path} className="b-brand">
    {/* ========   change your logo hear   ============ */}
    <img
      src={siteLogo} style={{"height": '100px'}}
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
