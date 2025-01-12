import React from 'react'
import "./Banner.css";
import Carousel from 'react-bootstrap/Carousel';


const image1 = "/assets/cityrise.jpeg"
const image2 = "/assets/clermont.jpeg"
const image3 = "/assets/emerald.jpg"
const image4 = "/assets/grosvenor.jpeg"
const image5 = "/assets/oak.jpeg"

export const BannerComponent = () => {
  return (
    <>
     <section className="banner"> 
     <Carousel className="main-slide">
      <Carousel.Item>
      <img src={image1} alt="" />
        <Carousel.Caption>
          <h3>CityRise Residency</h3>
          <p>This project exemplifies a commitment to top-tier construction standards.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="" />
        <Carousel.Caption>
          <h3>Clermont Residency</h3>
          <p>This project exemplifies a commitment to top-tier construction standards.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="" />
        <Carousel.Caption>
          <h3>Emerald Residency</h3>
          <p>
          This project exemplifies a commitment to top-tier construction standards.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image4} alt="" />
        <Carousel.Caption>
          <h3>Grosvenor Residency</h3>
          <p>
          This project exemplifies a commitment to top-tier construction standards.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image5} alt="" />
        <Carousel.Caption>
          <h3>Oak West Residency</h3>
          <p>
          This project exemplifies a commitment to top-tier construction standards.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    </>
  );
};