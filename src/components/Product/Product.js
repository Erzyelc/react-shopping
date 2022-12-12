import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css';

function Product(props) {
  return (
    <Link to={`/products/${props.id}`} >
      <div className="product-card">
          <img className="product-image" src={props.image} alt={props.title}/>
          <div className="product-info">
              <h3>{props.title}</h3>
              <p>{props.price}</p>
              <p>{props.category}</p>
          </div>
      </div>
    </Link>
  )
}

export default Product