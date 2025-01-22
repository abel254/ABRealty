import React from "react";
import "./PropertyComponent.css";
import { FaLocationDot } from "react-icons/fa6";
import { PropertyType } from "../propsType/newProperty.type";

interface PropertyComponentProps {
  property: PropertyType;
  isFirst: boolean; // Optional prop to apply specific styling to the first property
}

export default function PropertyComponent({
  property,
  isFirst,
}: PropertyComponentProps) {
  const { images, title, location, description, startingPrice } = property;

  const image = images?.fullBuilding || "url/to/default-image.jpg";

  return (
    <button className={`card-component ${isFirst ? "first-property" : ""}`}>
     
        <div className="property-card h-100 d-flex flex-column">
          <div className="image">
            <img src={image} alt={title} className="img-fluid" />
          </div>
          <div className="card-content p-3">
            <h4 className="location">
              <FaLocationDot /> {location}
            </h4>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <p className="start">
              PRICE FROM: 
              <span className="price">{startingPrice}</span>
            </p>
          </div>
        </div>
    </button>
  );
}
