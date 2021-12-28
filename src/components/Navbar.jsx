import React, { useState } from 'react'
import './navbar.css'

import { FiMenu, FiX } from "react-icons/fi";


const Navbar = ({ navBarLinks }) => {
    const [menuClicked, setmenuClicked] = useState(false);

    const toggleMenu = () => {
        setmenuClicked(!menuClicked);
    }

    return (
        <nav className='navbar'>
            <span className='navbar__logo'>Page</span>
            {menuClicked ? 
            (<FiX size={25} className='navbar__menu' onClick={toggleMenu} />) 
            : 
            (<FiMenu size={25} className='navbar__menu' onClick={toggleMenu} />)}
            <ul className={menuClicked ? "navbar__list navbar__list--active" : "navbar__list"}>
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
