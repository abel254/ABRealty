import React from "react";
import "./NewProperties.css";
import PropertyComponent from "./PropertyComponent";
import { propertiesData } from "../data/propertiesData";
import { PropertyType } from "../propsType/newProperty.type";

interface NewPropertiesProps {
  properties?: PropertyType[];
}

export default function NewProperties({
  properties = propertiesData,
}: NewPropertiesProps) {
  return (
    <section className="new-properties">
      <div className="container new-component">
        <h2 className="text-left mb-4">New Properties</h2>
        <div className="row row-one gx-4 gy-4">
          {/* First large property card occupying 50% of section width */}
          <div className="first col-lg-6">
            <PropertyComponent
              property={properties[0]}
              isFirst={true}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </div>
          {/* Grid of remaining 4 property cards */}
          <div className="col-lg-6 column-two">
            <div className="row row-two gx-4 gy-4">
              {properties.slice(1, 5).map((property, index) => (
                <div className="col-lg-6 comp-column" key={index}>
                  <PropertyComponent
                    property={property}
                    isFirst={false}
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
