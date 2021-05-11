import React from 'react'
import './Navbar.css'
// import Button from '../Button/Button'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container container">
                NAVLOGO
                <ul className="nav-left nav-links">
                    <li className="nav-item">WHY EVERNOTE</li>
                    <li className="nav-item">FEATURES</li>
                    <li className="nav-item">PLANS</li>
                </ul>

                <ul className='nav-right nav-links'>
                    <li className="nav-item" >Help</li>
                    <li className="nav-item">Log In</li>
                    <li className="nav-item" >
                        <button className='btn dwnld-btn'>Download</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
