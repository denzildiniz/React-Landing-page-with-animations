import React from 'react'
import './navbar.css'

import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({navBarLinks}) => {
    return (
        <nav className='navbar'>
            <span className='navbar__logo'>Page</span>
            <ul className='navbar__list'>
                {navBarLinks.map((item) => {
                    return (
                        <li className='navbar__item' key={item.title}>
                            <a className='navbar__links' href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default Navbar
