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
  const [cartProducts, setCartProducts] = React.useState();

  //create a function used by ProductDetail component to add product to cart
  function addProductToCart(productToAdd){
    console.log(productToAdd);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path = "/products" element = {<Homepage /> } />
          <Route exact path = "/products/:id" element = {<ProductDetail 
                                    addProductToCart={addProductToCart}/> } />
          <Route exact path = "/cart" element = {<Cart /> } /> 
          <Route exact path = "*" element={<Navigate to="/products" replace />} />
        </Routes>
        {/*Footer goes here*/}
      </BrowserRouter>
    </div>
  );
}

export default App;



  /*
  //create product object
  const product1 = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  };

  const product2 = {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fir for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
      "rate": 4.1,
      "count": 259
    }
  };
*/
