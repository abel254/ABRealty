import React, { useLayoutEffect } from "react";
import "./ContactComponent.css";
import { Link } from "react-router-dom";

export default function ContactComponent() {

   useLayoutEffect(()=> {
          window.scrollTo(0, 0)
        })

        
  return (
    <>
      <section className="section-contact">
        <div className="container contact-component">
          <div className="contact-banner">
            <div className="contact-overlay"></div>
            <div className="contact-heading">
              <p className="p-contact">Contact Us</p>
              <h3 className="h3-contact">Get Help & Quality Support</h3>
            </div>
            <div className="banner-image">
              <img src="assets/contact.jpeg" alt="Contact-Banner" />
            </div>
          </div>

          <div className="contact-info">
            <h5>Fill up the form to get professional guidance.</h5>
            <form action="">
              <div className="form-info">
                <div className="name-email">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="subject-input"
                />
                <textarea
                  name=""
                  id=""
                  rows={6}
                  placeholder="I'm interested in 2 bed preferable Westlands..."
                ></textarea>
              </div>
              <button type="submit">Submit Request</button>
            </form>
          </div>

          <div className="contact-about">
            <div className="about-cont">
                <div>
                    <h3>About Us - Who We Are!</h3>
                    <p>Ideal company for your next investment opportunity</p>
                </div>
                <Link to={'/about-us'} className="about-link">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
