import React from 'react';
import Product from '../Product/Product';
import "./Homepage.css";

function Homepage() {

    //create state for product info
    const [products, setProducts] = React.useState([
        {
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
        },
        {
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
          }
    ]);

    //create function to get products
    const fetchProducts = () => {
        console.log("connected!");
    }

  return (
    <div>
        <button onClick = {fetchProducts}>Fetch Products</button>
        {products.map(item => {
            return <Product
            key = {item.id} 
            title = {item.title} 
            price = {item.price}
            category = {item.category}
            image = {item.image}
            />
        })}
    </div>
  )
}

export default Homepage