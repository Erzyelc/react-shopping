import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {

  //create state to hold user input from textbox
  const [navSearchInput, setNavSearchInput] = React.useState('')

  const handleSearchSubmission = (event)=>{
    event.preventDefault();
    //console.log('search');
    props.handleProductSearch(navSearchInput)
  }

  function handleNavbarInput(searchInput){
    if (searchInput !== ''){
      setNavSearchInput(searchInput);
    }
    else{
      //textbox is empty
      setNavSearchInput(searchInput);
      props.handleProductSearch('');
    }
  }

  return (
    <div className = "navbar">
        <Link className="navlink" to='/'>Homepage</Link>
        <Link className="navlink" to='/detail'>Product Detail</Link>
        <Link className="navlink" to='/cart'>Cart</Link>
        <form onSubmit = {handleSearchSubmission}>
          <input type="text" placeholder="Search for products"
          onChange = {(event)=>handleNavbarInput(event.target.value)} 
          // onChange = {(event)=>setNavSearchInput(event.target.value)} 
          />
          <button>Submit Search</button>
        </form>
    </div>
  )
}

export default Navbar