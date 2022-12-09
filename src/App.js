import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './App.css';
//import Product from './components/Product/Product';
import Homepage from './components/Homepage/Homepage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Navbar from "./components/Navbar/Navbar";
import React from "react";

function App() {
  
  //create state to hold all products orderd
  const [cartProducts, setCartProducts] = React.useState([]);

  //create a function used by ProductDetail component to add product to cart
  function addProductToCart(productToAdd){
    console.log(productToAdd);
    //if product to add is not already in cart, we need to add it with a quantity of 1;
    //otherwise we need to incrememnt quantity of item already in cart

    //look for productToAdd in cartProducts
    const match = cartProducts.find( prod => prod.id === productToAdd.id);
    console.log("match is " , match);
    //if not there matchh is undefined which is "falsy"
    if(!match){
      console.log("first buy");
      let newCart = [...cartProducts, {...productToAdd, quantity: 1}]
      console.log(newCart);
      //make this new state
      setCartProducts(newCart);
    }else{
      console.log("increase qty");
      updateCartQuantity(match, true);
    }
    //replace state 
    //setCartProducts([...cartProducts, productToAdd])
  }

  function updateCartQuantity(productToChange, increase){
    //if increase is true, add 1 to qty
    //if false, subtract 1
    let newQty = productToChange.quantity + 1;
    if(!increase){
      newQty = productToChange.quantity - 1;
    }
    console.log("newQty is " + newQty);
    //have to map cart products to change qty of the one that matchces productToChange
    //leave the others alone
    const newCart = cartProducts.map(prod => productToChange.id === 
      prod.id ? 
        {...productToChange, quantity: newQty} : prod  
      )
      console.log("newCart ", newCart);
      //replace the state with this
      setCartProducts(newCart);
  }

  function removeFromCart(productToRemove){
    console.log(productToRemove);
    //replace state
    //use filter to create new array without this product
    const newCartProducts = cartProducts.filter(
      item => item.id !== productToRemove.id
    )
      //make this the new cart products
      setCartProducts(newCartProducts);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = "/products" element = {<Homepage /> } />
          <Route exact path = "/products/:id" element = {<ProductDetail 
                                    addProductToCart={addProductToCart}/> } />
          <Route exact path = "/cart" element = {<Cart cartProducts={cartProducts}
                                    removeFromCart={removeFromCart}
                                    updateCartQuantity={updateCartQuantity}
                                    />} /> 
          <Route exact path = "*" element={<Navigate to="/products" replace />} />
        </Routes>
        {/*Footer goes here*/}
      </BrowserRouter>
    </div>
  );
}

export default App;