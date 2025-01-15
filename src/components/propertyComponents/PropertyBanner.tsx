import React from 'react'
import './PropertyBanner.css'
import { Col, Row } from 'react-bootstrap'
import { MdManageSearch } from "react-icons/md";

export default function PropertyBanner() {
  return (
   <>
   <section className='top-banner'>
    <Row className='gx-0'>
      <Col lg={5}>
      <div className="intro">
      <h3>Best Properties Around</h3>
      <p>At ABRealty, we help you find ideal property investments by focusing on prime locations, superior quality, and promising ROI.</p>
      <MdManageSearch />
      </div>
      </Col>
      <Col lg={7}>
      <div className="image">
      <img src="/assets/entrance.jpg" alt="entrance" />
      </div>
      </Col>
    </Row>
   </section>
   </>
  )
}
