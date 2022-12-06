import React from 'react'
import "./Cart.css"

function Cart(props) {
  return (
    <div>
      <h1>Cart</h1>
      {props.cartProducts.map( item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title}/>
            <h5>{item.title}</h5>
            <p>{item.price}</p>
            <button onClick= {() => props.removeFromCart( item )}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart