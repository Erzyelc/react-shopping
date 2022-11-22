import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        <Link to = "/" className="navlink">Homepage</Link>
        <Link to = "/detail" className="navlink">ProductDetail</Link>
        <Link to = "/cart" className="navlink">Cart</Link>
    </div>
  )
}

export default Navbar