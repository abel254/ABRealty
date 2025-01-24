import React from 'react'
import PropertyBanner from '../components/propertyComponents/PropertyBanner'
import PropertyGrid from '../components/propertyComponents/PropertyGrid'
import { PropertyType } from '../propsType/newProperty.type'

interface PropertyComponentProps {
  property: PropertyType;
  isFirst?: boolean; // Make isFirst optional
}


export default function Property() {
  return (
    <>
    <PropertyBanner />
    <PropertyGrid />
    </>
  )
}
