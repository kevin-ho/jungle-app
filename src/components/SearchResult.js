import React from "react"
import { NavLink } from "react-router-dom"

const SearchResult = (props) => {

    function handleNavClick ()  {
        props.setShowResults(false);
    }

  return (
    <NavLink className="search-result-item"  to={`/product/${props.result.id}`} onClick={handleNavClick}>
        {props.result.title}
    </NavLink>
  )
}
export default SearchResult