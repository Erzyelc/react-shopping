import React from 'react'
import "./ProductDetail.css"
import axios from "axios"
import {useParams} from "react-router-dom"

function ProductDetail() {

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
    <div>
      <img src={selectedProduct?.image} alt={selectedProduct?.title} />
      <div>
        <h3>{selectedProduct?.title}</h3>
      </div>
    </div>
  )
}

export default ProductDetail