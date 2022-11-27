import React from 'react'
import { NavLink } from "react-router-dom";
export default function SingleList({  tag ="div" , path="" , id  , icon = "ti ti-template", label}) {
  return (
    <li className="dash-item" key={id}>
    <NavLink to={path} className="dash-link">
      <span className="dash-micon">
        <i className={icon} />
      </span>
      <span className="dash-mtext">{label}</span>
    </NavLink>
  </li>
  )
}
