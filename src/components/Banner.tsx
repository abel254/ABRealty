import React from "react";
import "./Banner.css";
import Carousel from "react-bootstrap/Carousel";
import { propertiesData } from "../data/propertiesData";
import { PropertyType } from "../propsType/newProperty.type";
import { Link } from "react-router-dom";

interface BannerComponentProps {
  properties?: PropertyType[];
}

export const BannerComponent = ({
  properties = propertiesData,
}: BannerComponentProps) => {
  return (
    <>
      <section className="banner">
        <div className="banner-component container">
          <div className="banner-intro">
            <h3>
            Finding Prime Properties In Nairobi Can Be Overwhelming — We Simplify Your Investment Journey.
            </h3>
            <div className="banner-links">
              <Link to={'/property'} className="links-banner">View Listed Properties</Link>
              <Link to={'/contact'} className="links-banner">Contact Us</Link>
            </div>
          </div>
          <Carousel
            className="main-slide"
            indicators={false}
            interval={5000}
            pause={false}
          >
            {properties.map((property) =>
              property?.images
                ? Object.values(property?.images)
                    .filter(
                      (image) =>
                        typeof image === "string" && image.trim() !== ""
                    )
                    .map(
                      (image, index) =>
                        image && (
                          <Carousel.Item key={`${property?.id}-${index}`}>
                            <div className="banner-overlay"></div>
                            <div className="slide-image">
                              <img
                                src={image as string}
                                alt={property?.title}
                              />
                            </div>
                          </Carousel.Item>
                        )
                    )
                : null
            )}
          </Carousel>
        </div>
      </section>
    </>
  );
};
