import React from 'react'
import './PropertyComponent.css'

interface PropertyComponentProps {
  image: string
  location: string
  title: string
  price: string
  completion: string
}

export default function PropertyComponent({ image, location, title, price, completion }: PropertyComponentProps) {
  return (
    <div>
       <div className="property-card h-100 d-flex flex-column">
      <img src={image} alt={title} className="img-fluid" />
      <div className="card-content p-3">
        <h4>{location}</h4>
        <h3>{title}</h3>
        <p>Price: {price}</p>
        <p>Completion: {completion}</p>
      </div>
    </div>
    </div>
  )
}
