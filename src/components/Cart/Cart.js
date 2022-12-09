import React from 'react'
import "./Cart.css"

function Cart(props) {
  //function to calculate total of cart items
  const calcTotal = () =>{
    // let cartTotal = props.cartProducts.reduce(
    //   (sum, curprod)=> sum += (curprod.quantity * curprod.price), 0
    // )
    let cartTotal = 0;
    for (let i = 0; i < props.cartProducts.length; i++){
      cartTotal += props.cartProducts[i].quantity * props.cartProducts[i].price;
    }
    return cartTotal.toFixed(2);
  }

  return (
    <div>
      <h1>Cart</h1>
      <div>
      {props.cartProducts.map( item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.description} />
          <h5>{item.title}</h5>
          <p>{item.price}</p>
          { item.quantity >= 2 && <p className="cart-btn" onClick= {()=>props.updateCartQuantity(item, false)}>-</p>}
          <p>{item.quantity}</p>
          <p className="cart-btn" onClick= {()=>props.updateCartQuantity(item, true)}>+</p>
          <button onClick= {()=>props.removeFromCart(item)}>Remove</button>
        </div>
      ))}
      </div>
      { props.cartProducts.length > 0 && <h3>TOTAL: {calcTotal()}</h3>}
      </div>
  )
}

export default Cart