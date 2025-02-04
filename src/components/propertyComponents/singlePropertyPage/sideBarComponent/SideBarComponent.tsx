import React, { useEffect, useRef, useState } from 'react'
import './SideBarComponent.css'
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Col } from "react-bootstrap";

export default function SideBarComponent() {

     const [isFixed, setIsFixed] = useState(false);
      const [isStickyStop, setIsStickyStop] = useState(false);
      
      const sidebarRef = useRef<HTMLDivElement | null>(null);

       useEffect(() => {
          const handleScroll = () => {
            if (!sidebarRef.current) return;
      
            const footer = document.querySelector(
              ".footer-components"
            ) as HTMLElement | null;
      
            if (!footer) return;
      
            const footerRect = footer.getBoundingClientRect();
      
            if (footerRect.top > window.innerHeight) {
              setIsFixed(true);
              setIsStickyStop(false);
            } else if (footerRect.top <= window.innerHeight) {
              setIsFixed(false);
              setIsStickyStop(true);
            } else {
              setIsFixed(false);
              setIsStickyStop(false);
            }
          };
      
          window.addEventListener("scroll", handleScroll);
          handleScroll(); // Initial check
      
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
      
      
  return (
    <>
    <Col lg={4} className="side-bar">
              <div
                ref={sidebarRef}
                className={`side-profile ${isFixed ? "fixed" : ""} ${
                  isStickyStop ? "sticky-stop" : ""
                }`}
              >
                <h5 className="agent-expert">Get Quality Advice From An Expert</h5>
                <div className="profile-info">
                  <div className="profile-image">
                    <img src="/assets/abel.png" alt="" />
                  </div>
                  <div className="profile-name">
                    <h5 className="agent-name">Abel Muema</h5>
                    <p className="agent-position">
                      Real Estate Sales <br /> Associate
                    </p>
                  </div>
                </div>
                <div className="contact-form">
                  <form action="">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="tel" placeholder="Your Phone" />
                    <textarea
                      name=""
                      id=""
                      placeholder="I'm interested in 1 bed..."
                    ></textarea>
                    <button>Send Email</button>
                  </form>
                </div>
                <div className="contact-platform">
                  <button className="call">
                    <FaPhone />
                    <p>Call</p>
                  </button>
                  <button className="whatsapp">
                    <FaWhatsapp />
                    <p>WhatsApp</p>
                  </button>
                </div>
              </div>
            </Col>
    </>
  )
}
