import React from "react";
import "./PropertyComponent.css";
import { FaLocationDot } from "react-icons/fa6";
import { PropertyType } from "../propsType/newProperty.type";
import { Link } from "react-router-dom";
import { usePropertyContext } from "../context/PropertyContext";

interface PropertyComponentProps {
  property: PropertyType;
  isFirst: boolean;
  onClick?: () => void;
}

export default function PropertyComponent({
  property,
  isFirst,
  onClick,
}: PropertyComponentProps) {
  const { id, images, title, location, description, startingPrice } = property;

  const { addProperty } = usePropertyContext();

  const image = images?.fullBuilding || "url/to/default-image.jpg";

  const slicedDescription = description.split("").slice(0, 100).join("")

  return (
    <div className={`property-component ${isFirst ? "first-property" : ""}`}>
      <button
        className="card-component"
        onClick={() => {
          addProperty(id)
          if (onClick) onClick();
        }
        }
      >
        <Link to={"/singleProperty"} className="links">
          <div className="property-card h-100 d-flex flex-column">
            <div className="image">
              <img src={image} alt={title} className="" />
            </div>
            <div className="card-content p-3">
              <h4 className="location">
                <FaLocationDot /> {location}
              </h4>
              <h3 className="title">{title}</h3>
              <p className="description">{slicedDescription}...</p>
              <div className="start-price">
              <p className="price">
                KES&nbsp;{startingPrice}
              </p>
              <p className="start">&nbsp;Starting Price</p>
              </div>
              
            </div>
          </div>
        </Link>
      </button>
    </div>
  );
}
