import React from "react"
import NavbarBrand from "./NavbarBrand"
import SearchBox from "./SearchBox"
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <nav>
      <NavbarBrand/>
      <SearchBox fullResults={props.fullResults} products={props.products} setProducts={props.setProducts} resetResults={props.resetResults} />
      <FaShoppingCart className="icon-cart"/>
    </nav>
  )
}
export default Navbar