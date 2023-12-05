import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>the Amos Blog</h1>
        <div className="links">
            <Link className="Bhover" to='/'>Home</Link>
            <Link className="Bhover" to="/search" >Search</Link>
            <Link className="Bhover" to='/create'>
                New Blog
            </Link>
            <Link className="Bhover" to='/contact'>Contact us</Link>
        </div>
    </nav>
  )
}

export default Navbar;