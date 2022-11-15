import React from 'react';
import "./Product.css";

function Product(props) {
  return (
    <div className='product-card'>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>{props.category}</p>
            <img src = {props.image} alt={props.title} className="product-image"></img>
    </div>
  )
}

export default Product