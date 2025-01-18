import React from 'react'
import './PropertyGrid.css'
import { Col, Row } from 'react-bootstrap'
import { propertiesData } from '../../data/propertiesData'
import PropertyComponent from '../PropertyComponent'

export default function PropertyGrid({properties = propertiesData}) {
  return (
    <>
    <section className="property-grid">
       <div className="container property">
        <h3 className='heading'>Available Properties</h3>
       <Row className='gy-4'>
            {properties.map((property, index) => (
                <Col lg={4} key={index}>
                    <PropertyComponent {...property}/>
                </Col>
            ))}
        </Row>
       </div>
       <div className="single-property">
        {/* <button>Single Property</button> */}
        <a href="/singleProperty" className='button' target="_blank" rel="noopener noreferrer">Single Property</a>
       </div>
    </section>
    </>
  )
}
