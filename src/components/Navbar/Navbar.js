import React from 'react'

import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="">
                <img src="img/graphics/nav-graphic-1.png" className='img-fluid position-absolute graphics' style={{ left: 0 }} alt="Graphic" />
                <img src="img/graphics/nav-graphic-2.png" className='img-fluid position-absolute graphics' style={{ right: 0 }} alt="Graphic" />
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div>
                            <a href="/">
                                <img src="logo.png" className='img-fluid logo-img' alt="Logo" />
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#aboutUs">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#team">Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#clients">Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#contactUs">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;