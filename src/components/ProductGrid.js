import React from "react"
import ProductGridBox from "./ProductGridBox"

const ProductGrid = (props) => {

  return (
    <div className="product-grid">
        {(props.products.length > 0) && props.products.map(product => (
            <div key={product.id}>
                <ProductGridBox product={product}/>
            </div>
        ))}
    </div>
  )
}
export default ProductGrid