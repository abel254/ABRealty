import React, { useLayoutEffect } from "react";
import "./AboutUsComponent.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutUsComponent() {

     useLayoutEffect(()=> {
        window.scrollTo(0, 0)
      })
      
  return (
    <>
      <section className="section-about">
        <div className="container about-component">
          <div className="about-banner">
            <div className="about-overlay"></div>
            <div className="about-heading">
              <p className="p-about">About Us</p>
              <h3 className="h3-about">About Us - Who Are We?</h3>
            </div>
            <div className="banner-image">
              <img src="assets/about-banner.jpg" alt="About-Banner" />
            </div>
          </div>

          <div className="about-description">
            <Row className="h-100">
              <Col lg={6} className="h-100">
                <div className="about-info">
                  <h4>Our Agency Story</h4>
                  <p className="p-agency">Ideal company for your next Investment</p>
                  <p>
                    At ABRealty, we help you find ideal property investments by
                    focusing on prime locations, superior quality, and promising
                    ROI. Our expertise in the Nairobi real estate market ensures
                    that we connect you with high-value properties that offer
                    both luxury and long-term financial growth.
                    <br /> <br />
                    Whether you're looking for a modern apartment, a high-yield
                    rental property, or a strategic off-plan investment, we
                    provide personalized guidance to match your goals. With a
                    commitment to excellence and market insights, we make your
                    real estate journey seamless and rewarding.
                  </p>
                </div>
              </Col>
              <Col lg={6} className="h-100">
                <div className="description-image">
                  <img src="assets/about-desc.jpg" alt="" />
                </div>
              </Col>
            </Row>
          </div>

          <div className="about-contact">
            <div className="about-cont">
                <div>
                    <h3>Do You Have Any Questions ?</h3>
                    <p>We'll help you to take the best opportunity</p>
                </div>
                <Link to={'/contact-us'} className="about-link">Contact Us Today</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
