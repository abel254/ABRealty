import React from 'react'
import './PropertyComponent.css'

interface PropertyComponentProps {
  image: string
  location: string
  title: string
  price: string
  description: string
}

export default function PropertyComponent({ image, location, title, price, description }: PropertyComponentProps) {
  return (
    <div className='card-component'>
       <div className="property-card h-100 d-flex flex-column">
        <div className="image">
        <img src={image} alt={title} className="img-fluid" />
        </div>
      <div className="card-content p-3">
        <h4>{location}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Starting From: {price}</p>
      </div>
    </div>
    </div>
  )
}
