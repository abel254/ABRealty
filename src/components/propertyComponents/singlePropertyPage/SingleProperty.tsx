import React, { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
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
import { LuMoveLeft } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePropertyContext } from "../../../context/PropertyContext";
import { propertiesData } from "../../../data/propertiesData";
import ScrollToTopButton from "./ScrollToTopButton";
import WhatsAppButton from "./WhatsAppButton";
import PropertyComponent from "../../PropertyComponent";

export default function SingleProperty() {
  // CONTEXT
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
  const [isFixed, setIsFixed] = useState(false);
  const [isStickyStop, setIsStickyStop] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

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
    { name: "Club House", icon: <IoMdWine /> },
    { name: "Backup Generator", icon: <GiPowerGenerator /> },
    { name: "Meeting Room", icon: <MdMeetingRoom /> },
    { name: "High Speed Lifts", icon: <LuArrowDownUp /> },
    { name: "Water Borehole", icon: <FaBoreHole /> },
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
      <Row className="gx-4">
        <div className="back-property">
          <Link to={"/property"} className="back-link">
            <LuMoveLeft />
            <p className="back">More Properties</p>
          </Link>
        </div>
        <h2 className="heading">
          {propertyPageItems?.title}&nbsp;&nbsp;
          {propertyPageItems?.location}
        </h2>
        <Col lg={8} className="main-bar">
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
          <div className="description-description">
            <Row className="gx-4">
              <Col lg={7} className="column">
                <div className="desc">
                  <h3>{propertyPageItems?.title}</h3>
                  <p>{propertyPageItems?.description}</p>
                  <Row className="floor-plan">
                    {}
                    <Col lg={4} className="floor-col"></Col>
                  </Row>
                  <button className="brochure">Download Brochure</button>
                </div>
              </Col>
              <Col lg={5} className="column">
                <div className="image">
                  <img src={images[0]} alt="tower-image" />
                </div>
              </Col>
            </Row>
          </div>

          {/* PROPERTY DESCRIPTION */}
          <div className="property-description">
            <h5>Property Description</h5>
            <div className="second-description">
              <p>{propertyPageItems?.description}</p>
            </div>
            <h5 className="apartment-features">Apartment Features</h5>
            <div className="second-features">
              {propertyPageItems?.amenities?.map((amenity, index) => (
                <div className="second-amenity" key={index}>
                  <div className="second-icon"></div>
                  {amenity}
                </div>
              ))}
            </div>

            <div className="second-price">
              <p>Price From: KES</p>
              <p>{propertyPageItems?.startingPrice}</p>
            </div>
            <p className="second-note">
              Please not that ABrealty does not charge any fees for viewings.
            </p>
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

          {/* Similar Properties */}
          <div className="similar-properties">
            <div className="similar-head">
              <h5 className="similar-heading">Similar Properties</h5>
              <Link to={"/property"} className="similar-link">
                More Properties
              </Link>
            </div>
            <Row>
              {propertiesData
                .filter((property) => property.id !== id)
                .slice(0, 3)
                .map((property) => (
                  <Col lg={4} key={property.id} className="similar-col">
                    <PropertyComponent
                      property={property}
                      isFirst={false}
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        </Col>

        {/* side bar */}
        <Col lg={4} className="side-bar">
          <div
            ref={sidebarRef}
            className={`side-profile ${isFixed ? "fixed" : ""} ${
              isStickyStop ? "sticky-stop" : ""
            }`}
          >
            <h5 className="agent-expert">Talk To A Real Estate Expert</h5>
            <div className="profile-info">
              <div className="profile-image">
                <img src="/assets/abel.png" alt="" />
              </div>
              <div className="profile-name">
                <h5>Abel Muema</h5>
                <p>
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
                  placeholder="I'm interested in..."
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
      </Row>

      {/* Floating buttons */}
      <ScrollToTopButton />
      <WhatsAppButton />
    </section>
  );
}
