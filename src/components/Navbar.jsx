import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   }

   return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='logo'>MyPortfolio</Link>
                <button className='menu-toggle' onClick={toggleMenu}>
                    {isMenuOpen ? < FaTimes size={30} /> : <FaBars size={30} />}
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
                    </li>


                    <li>
                        <Link to="/projects" onClick={() => setIsMenuOpen(false)}>My Projects</Link>
                    </li>


                    <li>
                        <Link to="/education" onClick={() => setIsMenuOpen(false)}>My Education</Link>
                    </li>

                    <li>
                        <a href="https://github.com/alexandros-kal" target="_blank" rel="noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
   )
}

export default Navbar;