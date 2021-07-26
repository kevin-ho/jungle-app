import React from "react"
import { NavLink } from "react-router-dom"

const NavbarBrand = () => {
  return(
      <NavLink to="/">
        <img className="logo" src="/img/fake-logo.png" alt="logo"></img>
      </NavLink>
  )
}
export default NavbarBrand