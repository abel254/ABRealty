import React from "react";
import { Col, Row } from "react-bootstrap";
import "./AboutUsHome.css";
import { Link } from "react-router-dom";

export default function AboutUsHome() {
  return (
    <>
      <section className="about-us">
        <div className="us-component container">
        <Row className="about-usrow">
          <Col>
            <div className="about-infobg">
              <div className="about-info">
                <h4>We're committed to your ideal property investment.</h4>
                <p>
                  At ABRealty, we help you find ideal property investments by
                  focusing on prime locations, superior quality, and promising
                  ROI.
                </p>
                <Link to={"/about-us"} className="link-about">
                  About Us
                </Link>
              </div>
            </div>
          </Col>
          <Col>
            <div className="info">
              <div className="info-components">
                <h5>Location</h5>
                <p>
                  A prime location is crucial for property investment, as it
                  influences value appreciation, rental demand, and overall
                  convenience. We prioritize properties in sought-after areas to
                  ensure long-term growth and accessibility for our clients.
                </p>
              </div>
              <div className="info-components">
                <h5>Quality</h5>
                <p>
                  Superior quality in construction and design ensures
                  durability, aesthetic appeal, and comfort. We select
                  properties with modern finishes, innovative features, and
                  meticulous craftsmanship to enhance living experiences and
                  maintain high market value over time.
                </p>
              </div>
              <div className="info-components">
                <h5>ROI</h5>
                <p>
                  ROI is a key factor in property investment, reflecting
                  profitability and financial growth. We target properties with
                  strong rental yields and potential for value appreciation,
                  ensuring our clients' investments deliver maximum returns
                  within a reasonable timeframe.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        </div>
       
      </section>
    </>
  );
}
