import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

export default function Footer() {

    const currentYear = new Date().getFullYear()
  return (
    <>
    <footer>
        <div className='footer-components'>
            <div className="image">
                <img src="/assets/logo.png" alt="Logo" />
            </div>
            <p className='sub'>Never Miss Out on Our Latest Projects</p>
            <div className="subscription">
                <input type="email" placeholder='Email Address'/>
                <button>Subscribe</button>
            </div>
            <div className="social-links">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterest />
            </div>
            <div className="navigation">
                <button>HOME</button>
                <button>PROPERTY</button>
                <button>BLOG</button>
                <button>CONTACT</button>
            </div>
            <p className="copyright">&copy; {currentYear} ABRealty. All Rights Reserved</p>
        </div>
    </footer>
    </>
  )
}
