import React from 'react';
import "./Product.css";

function Product(props) {
  return (
    <div className='product-card'>
        <img src = {props.image} alt={props.title} className="product-image"></img>
        <div className='product-info'>
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>
            <p>{props.category}</p>
        </div>
    </div>
  )
}

export default Product