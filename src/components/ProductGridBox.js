import React from "react"
import { NavLink } from "react-router-dom"
import { FaStar } from "react-icons/fa";

const ProductGridBox = (props) => {
  return (
      
    <NavLink className="product-box" to={`/product/${props.product.id}`}>
        <div>
            <img className="product-image" src={props.product.image} alt={props.product.title} />
            
        </div>
        <div className="product-meta">
            <div className="product-title">{props.product.title.substring(0, 25)}{(props.product.title.length > 25) ? "...": ""}</div>
            <div className="product-category">{props.product.category}</div>
            <div className="product-rating"><FaStar className="product-star"/> {props.product.rating}</div>
            <div className="product-id">{props.product.id}</div>
            <div className="product-price">${props.product.price}</div>
        </div>
    </NavLink>
  )
}
export default ProductGridBox