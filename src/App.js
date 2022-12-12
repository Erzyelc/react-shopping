import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
//import Homepage from './components/Product/Homepage/Homepage';
//import Product from './components/Product/Product';
import ProductDetail from './components/ProductDetail/ProductDetail';
import React from 'react'

function App() {

  //create state to hold al the products ordered
  const [cartProducts, setCartProducts] = React.useState([]);
  //create state for the search value from navbar
  const [productSearchValue, setProductSearchValue] = React.useState('');

  //create function to handle search input
  function handleProductSearch(searchInput){
    console.log(searchInput);
    //store in state
    setProductSearchValue( searchInput);
  }


  //create a function used by ProductDetail component 
  //to add product to cart
  function addProductToCart(productToAdd){
    console.log(productToAdd);
    //if productToAdd is NOT already in the cart,
    //add it with a quantity of 1
    //otherwise increment quantity of item already in cart

    //look for productToAdd in cartProducts
    const match = cartProducts.find( prod => prod.id === productToAdd.id);
    console.log('match is ' , match);
    //if not there match is undefined which is "falsy"
    if (!match){
      console.log("first buy");
      let newCart = [...cartProducts, {...productToAdd, quantity: 1}]
      console.log(newCart);
      //make this the new state
      setCartProducts(newCart);
    }
    else{
      console.log("increase qty");
      updateCartQuantity(match, true);
    }
    //replace the state
    //setCartProducts([...cartProducts, productToAdd]);
  }

  function updateCartQuantity(productToChange, increase){
    //if increase is true, add 1 to quantity
    //if false, subtract 1 from quantity

    let newqty = productToChange.quantity + 1;
    if (!increase){
      newqty = productToChange.quantity - 1;
    }
    console.log("newqty is " + newqty);
    //have to map cartProducts to change quantity of the one that matches
    //productToChange, leave the others alone
    const newCart = cartProducts.map(
      prod => productToChange.id === prod.id ?
      {...productToChange, quantity: newqty} : prod
      )
      console.log('newCart', newCart);
      //replace the state with this 
      setCartProducts(newCart);
  }

  function removeFromCart(productToRemove){
    console.log(productToRemove);
    //use filter to create a new array without this product
    const newCartProducts = cartProducts.filter(
       item => item.id !== productToRemove.id
    )
    console.log(newCartProducts);
    //make this the new cartProducts
    setCartProducts(newCartProducts);

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar handleProductSearch={handleProductSearch} />
        <Routes>
            <Route exact path='/products' element={<Homepage 
                       productSearchValue={productSearchValue} /> } />
            <Route path='/products/:id' element={<ProductDetail
                          addProductToCart={addProductToCart} /> } />
            <Route path='/cart' element={<Cart cartProducts={cartProducts}
            removeFromCart={removeFromCart}
            updateCartQuantity={updateCartQuantity}
            /> } />
            <Route path='*' element={<Navigate to="/products" replace />} />


          </Routes>

      </BrowserRouter>
       
       

    </div>
  );
}

export default App;