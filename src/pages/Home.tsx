import React from 'react'
import { Container } from "react-bootstrap";
import { BannerComponent } from '../components/Banner';
import NewProperties from '../components/NewProperties';
import { propertiesData } from '../data/propertiesData';
import AboutUsHome from '../components/AboutUsHome';


export default function Home() {
  return (
    <>
            <BannerComponent />
            <NewProperties properties={propertiesData}/>
            <AboutUsHome />
        </>
  )
}
