import React from 'react';
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Link to={`/products/${props.id}`}>
    <div className='product-card'>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>{props.category}</p>
            <img src = {props.image} alt={props.title} className="product-image"></img>
    </div>
    </Link>
  )
}

export default Product