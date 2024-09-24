import React from 'react'

import logo from '../assets/logo.png';
import callslogo from "../assets/call.png"

const Navbar = () => {
  return (
    <div >
       {/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* Left: Logo */}

    <img className='navbar-logo img-fluid' src={logo} alt="" />
    {/* Toggle button for mobile view */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    {/* Navbar Links and Search */}
    <div className="collapse navbar-collapse" id="navbarNav">
      {/* Center: NavLinks */}
      <ul className="navbar-nav mx-auto  ">
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Our Approach</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" href="#">FAQ</a>
        </li>
      </ul>
      {/* Right: Search input */}
      <form className="d-flex nav-right align-items-center justify-content-center">
  <img className="nav-call-logo" src={callslogo} alt="Call Logo" /> 
  &nbsp; &nbsp;
  <h5 className='nav-right-text'>Let's Talk +91 9833636916</h5>
</form>

    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
