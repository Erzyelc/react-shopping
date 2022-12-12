import React from 'react'
//import Product from './components/Product/Product'
import axios from 'axios'
import './Homepage.css'
import Product from '../Product/Product';

function Homepage(props) {

    //create state for product info
    const [products, setProducts] = React.useState([]);

    //get data when the component loads
    React.useEffect(
        ()=>{
            //console.log("component loaded")
            //fetch the products
            fetchProducts();
        }, []
    )


    //create function to get the products
    const fetchProducts = () =>{
        //get data from api
        //store in products
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            console.log(response.data);
            //assign data to state
            setProducts(response.data);
        })
        //console.log("fetch");
    }

    //create a function to filter products for search
    const filterProducts = () =>{
        //if search value is empty just return products
        if (props.productSearchValue === ''){
            return products;
        }
        //if here then filter the products
        const newProducts = products.filter(
            item => item.title.toLowerCase().includes(props.productSearchValue.toLowerCase())
        )
        console.log(newProducts);
        return newProducts;
    }

  return (
    <div>
        {/* <button onClick = {fetchProducts}>Fetch Products</button> */}
        <div className="prod-container">
            {
            filterProducts().map(item => {
                return <Product key={item.id} 
                                id = {item.id}
                                title={item.title}
                                price = {item.price}
                                category = {item.category}
                                image = {item.image} />
            })
            }
        </div>
    </div>
  )
}

export default Homepage