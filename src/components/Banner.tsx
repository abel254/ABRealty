import React from 'react'
import "./Banner.css";
import Carousel from 'react-bootstrap/Carousel';


const image1 = "/assets/marinaswimming.png"
const image2 = "/assets/cityrise.jpeg"
const image3 = "/assets/mistykitchen.jpg"
const image4 = "/assets/royalbedroom.jpeg"
const image5 = "/assets/luckinIvy.jpg"

export const BannerComponent = () => {
  return (
    <>
     <section className="banner"> 
     <Carousel className="main-slide">
      <Carousel.Item>
      <img src={image1} alt="" />
        <Carousel.Caption>
          <h3>Marina Bay Phase 1</h3>
          <p>This project exemplifies a commitment to top-tier construction standards.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="" />
        <Carousel.Caption>
          <h3>City Rise Residency</h3>
          <p>This project exemplifies a commitment to top-tier construction standards.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="" />
        <Carousel.Caption>
          <h3>Misty Springs</h3>
          <p>
          This project exemplifies a commitment to top-tier construction standards.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image4} alt="" />
        <Carousel.Caption>
          <h3>Royal Visita</h3>
          <p>
          This project exemplifies a commitment to top-tier construction standards.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image5} alt="" />
        <Carousel.Caption>
          <h3>LuckInn Ivy Residency</h3>
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