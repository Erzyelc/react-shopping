import React from 'react'
import "./ProductDetail.css"
import axios from "axios"
import {useParams} from "react-router-dom"

function ProductDetail(props) {

  console.log("need the param");
  const params = useParams();
  console.log(params.id);

  const [selectedProduct, setSelectedProduct] = React.useState();

  React.useEffect( () => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
    .then(res => {
      console.log(res.data);
      //save this info to state
      setSelectedProduct(res.data);
    })
  }, [])

  return (
    <div className="prod-container">
      <img src={selectedProduct?.image} alt={selectedProduct?.title} />
      <div className="prod-info">
        <h3>{selectedProduct?.title}</h3>
        <h4>Description</h4>
        <p>{selectedProduct?.price}</p>
        <p>{selectedProduct?.description}</p>
        <button onClick= {() =>props.addProductToCart(selectedProduct)}>Add to Cart</button>
      </div> 
    </div>
  )
}

export default ProductDetail