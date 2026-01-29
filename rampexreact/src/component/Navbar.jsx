import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav >
        <ul className="navbar">
            <li><Link className='Link' to="/">Home</Link></li>
            <li><Link className='Link' to="/about">About</Link></li>
            <li><Link className='Link' to="/service">Service</Link></li>
            <li><Link className='Link' to="/contact">Contact</Link></li>
             <li><Link className='Link' to="/useState">UseState</Link></li>
             <li><Link className='Link' to="/hook">Hook</Link></li>
              <li><Link className='Link' to="/login">Login</Link></li>
              <li><Link className='Link' to="/useEffect">UseEffect</Link></li>
              <li><Link className='Link' to="/useEffectApi">UseEffectApi</Link></li>
              <li><Link className='Link' to="/useMemo">UseMemo</Link></li>
              <li><Link className='Link' to="/usecallback">UseCallback</Link></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
