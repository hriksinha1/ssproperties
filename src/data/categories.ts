import { IMAGES } from "./images";
import { PropertyType } from "./listings";

export interface LifestyleCategory {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  propertyTypes: PropertyType[];
  image: string;
  imageAlt: string;
  srcSet?: string;
}

export const LIFESTYLE_CATEGORIES: LifestyleCategory[] = [
  {
    id: "family-houses",
    title: "Family Houses",
    subtitle: "Space for everyday life",
    ctaText: "View houses",
    propertyTypes: ["House", "Villa"],
    image: IMAGES.categories.familyHouses.src,
    imageAlt: IMAGES.categories.familyHouses.alt,
    srcSet: IMAGES.categories.familyHouses.srcSet,
  },
  {
    id: "apartments-offices",
    title: "Apartments & Offices",
    subtitle: "Compact, connected, close to everything",
    ctaText: "View apartments & offices",
    propertyTypes: ["Apartment", "Office"],
    image: IMAGES.categories.apartmentsOffices.src,
    imageAlt: IMAGES.categories.apartmentsOffices.alt,
    srcSet: IMAGES.categories.apartmentsOffices.srcSet,
  },
  {
    id: "office-buildings",
    title: "Office Buildings",
    subtitle: "Space for work and business",
    ctaText: "View offices",
    propertyTypes: ["Office"],
    image: IMAGES.categories.officeBuildings.src,
    imageAlt: IMAGES.categories.officeBuildings.alt,
    srcSet: IMAGES.categories.officeBuildings.srcSet,
  },
];
