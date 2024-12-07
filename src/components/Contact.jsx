import React from "react";
import './Contact.css';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {

    const copyToClipboard = () => {
        const email = "kalikasalexandros@outlook.com";
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("Email copied!");
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            })
    }

    return(
        <div className="contact">
            <div className="contact-content">

                <h1 className="header">Contact Information:</h1>
                <p className="email" title="Click to copy!" onClick={copyToClipboard}>email: kalikasalexandros@outlook.com</p>
                <br />
                <a href="https://www.linkedin.com/in/alexandros-kalikas-507513312/" target='_blank' rel="noreferrer"><FaLinkedin size={60} color="#0077b5" /></a>
                
            </div>
        </div>
    )
}

export default Contact