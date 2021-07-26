import React from "react"
import ProductGrid from "./ProductGrid"

const PageBox = (props) => {
  return (
    <div className="page-box">
        <h2>Products</h2>
        <h6>{props.products.length} Items Found</h6>
        <ProductGrid products={props.products} />
    </div>
  )
}
export default PageBox