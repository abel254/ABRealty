import React from "react";
import "./FloorPlanComponent.css";

interface FloorPlanProps {
  floorPlanImage: string;
  floorPlanDescription?: string;
  floorPlanBedrooms?: string;
  floorPlanSize?: string;
  floorPlanPrice?: string;
}

export default function FloorPlanComponent({
  floorPlanImage,
  floorPlanDescription,
  floorPlanBedrooms,
  floorPlanSize,
  floorPlanPrice,
}: FloorPlanProps) {
  return (
    <div className="floor-component">

      <div className="floor-image">
        <img src={floorPlanImage} alt="floor-plan" />
      </div>
      <div className="floor-description">
        <h5>{floorPlanBedrooms} Bedroom</h5>
        <div className="floor-size">
          <p>{floorPlanSize}sqmt</p>
          <p>- KES {floorPlanPrice}</p>
        </div>
      </div>
    </div>
  );
}
