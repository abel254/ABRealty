import React, { JSX, useRef, useState, useEffect, useMemo } from "react";
import "./SingleProperty.css";
import { Carousel, Col, Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import {
  FaDumbbell,
  FaChild,
  FaCouch,
  FaTree,
  FaConciergeBell,
  FaShieldAlt,
  FaCar,
} from "react-icons/fa"; // Import icons
import { GiPowerGenerator } from "react-icons/gi";
import { MdMeetingRoom } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { FaBoreHole } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { GiPoolTableCorner } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";
import { IoMdWine } from "react-icons/io";
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

  if (!propertyPageItems) {
    return <div>Property not found.</div>;
  }

  
  // Define icons
  const icons = [
    { name: "Swimming Pool", icon: <MdPool /> },
    { name: "Modern Gym", icon: <FaDumbbell /> },
    { name: "Kids Play Area", icon: <FaChild /> },
    { name: "Lounge Area", icon: <FaCouch /> },
    { name: "Landscaped Garden", icon: <FaTree /> },
    { name: "Reception", icon: <FaConciergeBell /> },
    { name: "Security", icon: <FaShieldAlt /> },
    { name: "Ample Parking", icon: <FaCar /> },
    { name: "Club House", icon:  <IoMdWine />},
    { name: "Backup Generator", icon: <GiPowerGenerator /> },
    { name: "Meeting Room", icon: <MdMeetingRoom /> },
    { name: "High Speed Lifts", icon: <LuArrowDownUp /> },
    { name: "Water Borehole", icon: <FaBoreHole />},
    { name: "Gaming Room", icon: <GiPoolTableCorner /> },
    { name: "Restaurant", icon: <IoIosRestaurant /> },
    { name: "Mini Mart", icon: <RiShoppingCartFill /> },
  ];

  const amenitiesWithIcons =
  propertyPageItems.amenities
    ?.map((amenity, index) => {
      const matchedIcon = icons[index]; // Match icon sequentially by index
      return matchedIcon ? { name: amenity, icon: matchedIcon.icon } : null;
    })
    .filter(Boolean) || []; // Remove null values
  
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
        {propertyPageItems?.title}&nbsp;
        <span>|</span> {propertyPageItems?.bedrooms}&nbsp;
        <span>|</span> {propertyPageItems?.location}
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
            <Row className="gx-4 flex-nowrap">
              {images.map((image, index) => (
                <Col key={index} className="d-flex justify-content-center">
                  <Image
                  className="image-col"
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
          <Col lg={6} className="column">
            <div className="desc">
              <h3>{propertyPageItems?.title}</h3>
              <p>{propertyPageItems?.description}</p>
              <button className="brochure">Download Brochure</button>
            </div>
          </Col>
          <Col lg={6} className="column">
            <div className="image">
              <img src={images[0]} alt="tower-image" />
            </div>
          </Col>
        </Row>
      </div>

      {/* Amenities */}
      <div className="amenities">
    <h3>Modern Amenities</h3>
    <div className="amenities-component">
      <Row className="amenities-grid gx-4 gy-4">
        {amenitiesWithIcons.map((amenity, index) => (
          <Col lg={3} key={index} className="amenity-item">
            <div className="amenity">
              {amenity!.icon}
              <div className="amenity-name">
              <p>{amenity!.name}</p>
              </div>
              
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
    </section>
  );
}
