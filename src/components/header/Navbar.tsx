import React from "react";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css";

interface CustomLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

export default function Navbar() {
  return (
    <div className="nav-component">
      <nav className="nav container">
        <Link to="/" className="site-title">
          ABRealty
        </Link>
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/property">Property</CustomLink>
          <CustomLink to="/about-us">About Us</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
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
