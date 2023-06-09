import React from 'react'
import {RiMenu3Line, RicloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import "./navbar.css"

//Block Element Modifier

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
    <div className='gpt3__navbar-links'>
      <div className='gpt3__navbar-links_logo'>
        <img src={logo} alt="logo">
        </img>
      </div>
    </div>
    </div>
  )
}

export default Navbar