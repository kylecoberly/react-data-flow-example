import React from "react"

import "./NavItem.css"

export default function NavItem(props) {
  const toggleActive = () => {
    props.toggleActive(props.id)
  }

  return (
    <div className="nav-item" onClick={toggleActive}>
      <p className={props.isActive ? "active" : null}>{props.label}</p>
    </div>
  )
}
