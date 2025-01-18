import React, { useRef, useState } from 'react'
import './SingleProperty.css'
import { Carousel, Col, Row } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import { FaSwimmingPool, FaDumbbell, FaChild, FaCouch, FaTree, FaConciergeBell, FaShieldAlt, FaCar } from 'react-icons/fa'; // Import icons
import 'bootstrap/dist/css/bootstrap.min.css';


const image1 = "/assets/luckinIvy.jpg"
const image2 = "/assets/swimmingPool.png"
const image3 = "/assets/sitting.png"
const image4 = "/assets/kitchen.png"
const image5 = "/assets/bedroom.png"
const image6 = "/assets/clock.png"
const image7 = "/assets/window.png"
const image8 = "/assets/study.png"

const amenities = [
    { name: "Swimming Pool", icon: <FaSwimmingPool size={40} /> },
    { name: "Modern Gym", icon: <FaDumbbell size={40} /> },
    { name: "Kids Play Area", icon: <FaChild size={40} /> },
    { name: "Lounge Area", icon: <FaCouch size={40} /> },
    { name: "Landscaped Garden", icon: <FaTree size={40} /> },
    { name: "Reception", icon: <FaConciergeBell size={40} /> },
    { name: "Security", icon: <FaShieldAlt size={40} /> },
    { name: "Parking", icon: <FaCar size={40} /> }
  ];


export default function SingleProperty() {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8]
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageClick = (image: string): void => {
        setSelectedImage(image);
      };

      const scrollRef = useRef<HTMLDivElement>(null);
      
      const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
          const scrollAmount = direction === 'left' ? -scrollRef.current.clientWidth / 5 : scrollRef.current.clientWidth / 5;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      };
    

  return (
    <section className="single-property container">
        <h2 className='heading'>LuckinIvy Apartments <span>|</span> 1 & 2 Bedrooms, Westlands</h2>
         <div className="hero-section">
      {/* Image Carousel */}
      <Carousel activeIndex={images.indexOf(selectedImage)} onSelect={(index) => setSelectedImage(images[index])}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div className="image">
            <Image src={image} className="hero-image" alt={`carousel-image-${index}`} fluid />
            </div>
            
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Recycle Bin (Thumbnail Images) */}
      <div className="recycle-bin-container mt-4">
        <button className="scroll-arrow left-arrow" onClick={() => scroll('left')}>‹</button>
        <div className="image-scroll" ref={scrollRef}>
          <Row className="g-1 flex-nowrap">
            {images.map((image, index) => (
              <Col key={index} className="d-flex justify-content-center">
                <Image 
                  src={image} 
                  alt={`thumbnail-${index}`} 
                  thumbnail 
                  style={{ cursor: 'pointer', width: '100%' }}
                  onClick={() => handleImageClick(image)} 
                />
              </Col>
            ))}
          </Row>
        </div>
        <button className="scroll-arrow right-arrow" onClick={() => scroll('right')}>›</button>
      </div>
    </div>

    {/* description */}
    <div className="description">
        <Row className='gx-4'>
            <Col lg={6}>
            <div className="desc">
                <h3>LuckinIvy Apartments</h3>
                <p>Discover modern living in our expansive 2 and 3-bedroom apartments, offering a perfect blend of comfort and convenience. Located just minutes from the expressway and Mombasa Road, this prime property ensures quick access to key amenities, shopping centers, and business hubs. Each unit is designed with open-plan layouts, contemporary finishes, and ample natural light, providing a serene atmosphere for residents. Enjoy a host of premium amenities including secure parking, a fitness center, and a children's play area. Whether for family living or investment, these apartments promise an elevated lifestyle in a thriving community.</p>
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

    {/* amenities */}
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
    
  )
}
