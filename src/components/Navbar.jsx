import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaGithub } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
            <Link to="/">Home</Link> 
            <Link to="/contact">Contact Me</Link>
            <Link to="/projects">My projects</Link>
            <Link to='/Education'>My Education</Link>
            <a href='https://github.com/alexandros-kal' target='_blank' rel="noreferrer"><FaGithub size={50} /></a>
        </nav>
    )
}

export default Navbar