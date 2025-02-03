export type PropertyImagesType = {
  fullBuilding?: string;
  swimmingPool?: string;
  gym?: string;
  sitting?: string;
  kitchen?: string;
  bedroom?: string;
  clock?: string;
  balcony?: string;
  isFirst?: boolean;
};

export type FloorPlans = {
  floorPlanImage?: string[];
  floorPlanDescription?: string;
  floorPlanBedrooms?: string[];
  floorPlanSize?: string[];
  floorPlanPrice?: string[];
};

export type PropertyType = {
  id: number;
  images?: PropertyImagesType;
  title: string;
  bedrooms: string;
  description: string;
  brochure: string;
  amenities?: string[];
  features?: string[];
  completionDate?: string;
  paymentPlan?: string[];
  location: string;
  startingPrice: string;
  floorPlans?: FloorPlans;
};
