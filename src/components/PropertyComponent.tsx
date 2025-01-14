import React from 'react'
import './PropertyComponent.css'
import { FaLocationDot } from "react-icons/fa6";

interface PropertyComponentProps {
  image: string
  location: string
  title: string
  price: string
  description: string
  isFirst?: boolean
}

export default function PropertyComponent({ image, location, title, price, description, isFirst }: PropertyComponentProps) {
  return (
    <div className={`card-component ${isFirst ? 'first-property' : ''}`}>
       <div className="property-card h-100 d-flex flex-column">
        <div className="image">
        <img src={image} alt={title} className="img-fluid" />
        </div>
      <div className="card-content p-3">
        <h4><FaLocationDot /> {location}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className='start'>Starting From: 
          <span>{price}</span></p>
      </div>
    </div>
    </div>
  )
}
