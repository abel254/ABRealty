import React from 'react'
import { Container } from "react-bootstrap";
import { BannerComponent } from '../components/Banner';
import NewProperties from '../components/NewProperties';
import { propertiesData } from '../data/propertiesData';


export default function Home() {
  return (
    <>
        <Container>
            <BannerComponent />
            <NewProperties properties={propertiesData}/>
        </Container>
        </>
  )
}
