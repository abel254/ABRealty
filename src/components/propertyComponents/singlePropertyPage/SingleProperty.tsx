import React, { JSX, useRef, useState, useEffect, useMemo } from "react";
import "./SingleProperty.css";
import { Carousel, Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaChild,
  FaCouch,
  FaTree,
  FaConciergeBell,
  FaShieldAlt,
  FaCar,
} from "react-icons/fa"; // Import icons
import "bootstrap/dist/css/bootstrap.min.css";
import { usePropertyContext } from "../../../context/PropertyContext";
import { propertiesData } from "../../../data/propertiesData";

export default function SingleProperty() {
  const { propertyItems } = usePropertyContext();
  const itemId = propertyItems.map((item) => item.id);
  const id = Number(itemId.join(""));
  const propertyPageItems = propertiesData.find((item) => item.id === id);

  const images = useMemo(() => {
    if (!propertyPageItems?.images) return [];
    const {
      fullBuilding,
      swimmingPool,
      gym,
      sitting,
      kitchen,
      bedroom,
      clock,
      balcony,
    } = propertyPageItems.images;

    return [
      fullBuilding,
      swimmingPool,
      gym,
      sitting,
      kitchen,
      bedroom,
      clock,
      balcony,
    ].filter((image): image is string => !!image);
  }, [propertyPageItems]);

  const [selectedImage, setSelectedImage] = useState<string>(images[0] || "");

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  const scrollRef = useRef<HTMLDivElement>(null);

  
  

  // Ensure `propertyItems` exists and is not empty
  if (!propertyItems || propertyItems.length === 0) {
    return <div>No property found.</div>;
  }

  
  
  // Find the matching property
  

  if (!propertyPageItems) {
    return <div>Property not found.</div>;
  }

  
  

  // Handle image selection safely when `images` updates
  

  // Define icons
  const icons: Partial<Record<string, JSX.Element>> = {
    "Swimming Pool": <FaSwimmingPool size={40} />,
    "Modern Gym": <FaDumbbell size={40} />,
    "Kids Play Area": <FaChild size={40} />,
    "Lounge Area": <FaCouch size={40} />,
    "Landscaped Garden": <FaTree size={40} />,
    Reception: <FaConciergeBell size={40} />,
    Security: <FaShieldAlt size={40} />,
    Parking: <FaCar size={40} />,
  };

  // Map amenities with icons
  const amenities =
    propertyPageItems.amenities?.map((amenity) => ({
      name: amenity,
      icon: icons[amenity] || null,
    })) || [];

  // Handle image carousel scrolling
 

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? -scrollRef.current.clientWidth / 5
          : scrollRef.current.clientWidth / 5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="single-property container">
      <h2 className="heading">
        {propertyPageItems?.title}
        <span>|</span> {propertyPageItems?.bedrooms}
      </h2>
      <div className="hero-section">
        {/* Image Carousel */}
        <Carousel
          activeIndex={images.indexOf(selectedImage)}
          onSelect={(index) => setSelectedImage(images[index])}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="image">
                <Image
                  src={image}
                  className="hero-image"
                  alt={`carousel-image-${index}`}
                  fluid
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Recycle Bin (Thumbnail Images) */}
        <div className="recycle-bin-container mt-4">
          <button
            className="scroll-arrow left-arrow"
            onClick={() => scroll("left")}
          >
            ‹
          </button>
          <div className="image-scroll" ref={scrollRef}>
            <Row className="g-1 flex-nowrap">
              {images.map((image, index) => (
                <Col key={index} className="d-flex justify-content-center">
                  <Image
                    src={image}
                    alt={`thumbnail-${index}`}
                    thumbnail
                    style={{ cursor: "pointer", width: "100%" }}
                    onClick={() => setSelectedImage(image)}
                  />
                </Col>
              ))}
            </Row>
          </div>
          <button
            className="scroll-arrow right-arrow"
            onClick={() => scroll("right")}
          >
            ›
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="description">
        <Row className="gx-4">
          <Col lg={6}>
            <div className="desc">
              <h3>{propertyPageItems?.title}</h3>
              <p>{propertyPageItems?.description}</p>
              <button>Download Brochure</button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="image">
              <img src={images[0]} alt="tower-image" />
            </div>
          </Col>
        </Row>
      </div>

      {/* Amenities */}
      <div className="amenities">
        <h3>Amenities</h3>
        <div className="amenities-component">
          <Row className="amenities-grid">
            {amenities.map((amenity, index) => (
              <Col key={index} className="amenity-item">
                <div className="amenity">
                  {amenity.icon}
                  <p>{amenity.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
