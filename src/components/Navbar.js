import React from "react"
import NavbarBrand from "./NavbarBrand"
import SearchBox from "./SearchBox"

const Navbar = (props) => {
  return (
    <nav>
      <NavbarBrand/>
      <SearchBox products={props.products}/>
    </nav>
  )
}
export default Navbar