import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const isActiveStyles = {
        color: "#FF4B57"
    }
    return (
        <header className='flex'>
            <div className="logo">
                <h1>Mune<span id='h-diff'>e</span>b</h1>
            </div>
            <nav>
                <ul className='flex'>
                    <li><NavLink
                        to="/"
                        style={({ isActive }) => { isActive ? isActiveStyles : null }}
                    >
                        Home
                    </NavLink></li>
                    <li><NavLink
                        to="/skills"
                        style={({ isActive }) => { isActive ? isActiveStyles : null }}
                    >
                        Skills
                    </NavLink></li>
                    <li><NavLink
                        to="/contact"
                        style={({ isActive }) => { isActive ? isActiveStyles : null }}
                    >
                        Contact
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
