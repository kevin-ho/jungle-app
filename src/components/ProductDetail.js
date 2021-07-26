import React, { useState, useEffect } from "react"
import { useParams } from "react-router";
import { NavLink } from "react-router-dom"
import { FaStar } from "react-icons/fa";

const ProductDetail = (props) => {
  const productID = useParams().slug;
  const [selectedProduct, setSelectedProduct] = useState("");

  
  useEffect(() => {
    if (props.allProducts && props.allProducts.length > 0) {
      setSelectedProduct(props.allProducts.find(product => product.id === productID));
    }
  }, [props, productID])

  return (
    <div className="product-detail-box">
      
      <div className="breadcrumb"><NavLink to="/">Products</NavLink>  > {productID}</div>
      {
        (selectedProduct) ? 
        <div className="product-details">
          <img className="product-image" src={selectedProduct.image} alt={selectedProduct.title}/>
          
          <h5>{selectedProduct.brand}</h5>
          <h2>{selectedProduct.title}</h2>
          <div className="product-category">{selectedProduct.category}</div>
          <div className="product-id">{productID}</div>  
                
          <div className="product-rating"><FaStar className="product-star"/> {selectedProduct.rating} ({selectedProduct.reviews})</div>
          <div className="product-price">${selectedProduct.price}</div>
          <div className="ctas">
            <button>Wishlist</button>
            <button className="primary">Add to Cart</button>
          </div>
        </div>
        :
        <div className={(selectedProduct) ? "hidden" : ""}>
          No matching product found.
        </div>
      }
    </div>
  )
}
export default ProductDetail