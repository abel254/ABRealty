import React, { useState } from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

interface CustomLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-component">
      <nav className="nav container">
        <Link to="/" className="site-title">
          <img
            src="/assets/luxelogo.png"
            alt="Luxe Logo"
            className="site-logo"
          />
          <span className="site-name">Luxe Properties Nairobi</span>
        </Link>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/property">Property</CustomLink>
            <CustomLink to="/about-us">About Us</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
