import React from 'react'

export default function Card({title="", description = "" ,  children}) {
  return (
    <div className="card">
    <div className="card-header">
      <h5>{title}</h5><small>{description}</small>
    </div>
    <div className="card-body">
       {children}
    </div>
  </div>
  )
}
