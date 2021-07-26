import React from "react"
import ProductGrid from "./ProductGrid"
import { NavLink } from "react-router-dom"

const PageBox = (props) => {

    const handleResetSearch = () => {
        props.resetResults();
    }

    return (
        <div className="page-box">
            <h1>Products</h1>
            {
                (props.searched) ? <h6>{props.products.length} results found (<NavLink to="/" onClick={handleResetSearch}>Clear</NavLink>)</h6> : ""
            }            
            <ProductGrid products={props.products} />
        </div>
    )
}
export default PageBox