import React, { useEffect, useRef, useState } from "react";
import "./SideBarComponent.css";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";

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
          <div className="agent-details">
            <div className="agent-image">
              <img src="/assets/abel.png" alt="" />
            </div>
            <div className="agent-location">
              <p>Real Estate Sales Associate</p>
            </div>
            <p className="agent-name">Abel K. Muema</p>

            <div className="contact-form">
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <textarea
                  name=""
                  id=""
                  rows={4}
                  placeholder="I'm interested in 1 bed preferable in Westlands..."
                ></textarea>
                <button>Send Email</button>
              </form>

              <div className="agent-contact">
                <div className="message">
                  <FaWhatsapp />
                  <p>Message</p>
                </div>
                <div className="call">
                  <FaPhone />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
