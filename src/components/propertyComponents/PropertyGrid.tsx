import React, { useLayoutEffect } from 'react'
import './PropertyGrid.css'
import { Col, Row } from 'react-bootstrap'
import { propertiesData } from '../../data/propertiesData'
import PropertyComponent from '../PropertyComponent'
import { PropertyType } from '../../propsType/newProperty.type';

interface NewPropertiesProps {
  properties?: PropertyType[];
}


export default function PropertyGrid({ properties = propertiesData }: NewPropertiesProps) {

  useLayoutEffect(()=> {
    window.scrollTo(0, 0)
  })
  
  return (
    <>
    <section className="property-grid">
       <div className="container property">
        <h3 className='heading'>Available Properties For Sale</h3>
       <Row className='gy-4 gx-4'>
            {properties.map((property) => (
                <Col lg={4} key={property.id} className='column'>
                    <PropertyComponent property={property} isFirst={false} onClick={() => {
                window.scrollTo({
                  top:0,
                  behavior: "smooth",
                })
              }}/>
                </Col>
            ))}
        </Row>
       </div>
    </section>
    </>
  )
}