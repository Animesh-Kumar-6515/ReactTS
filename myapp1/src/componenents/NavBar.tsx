import React from 'react'
import { Link } from 'react-router-dom'

const NavBar:React.FC=()=> {
  return (
    <>
        <ul>
            <li>
                <Link to="/" className='navbar-brand'>Home</Link>
            </li>
            <li>
                <Link to="/view" className='navbar-brand'>view</Link>
            </li>
            <li>
                <Link to="/login" className='navbar-brand'>Login</Link>
            </li>
            <li>
                <Link to="/addproduct" className='navbar-brand'>Add Product</Link>
            </li>
        </ul>
    </>
  )
}

export default NavBar