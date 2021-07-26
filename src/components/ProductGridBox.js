import React from "react"

const ProductGridBox = (props) => {
  return (
    <div className="product-box">
        <img src={props.product.image} alt={props.product.title} />
        {props.product.title.substring(0, 30)}
    </div>
  )
}
export default ProductGridBox