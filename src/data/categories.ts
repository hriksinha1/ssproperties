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
    id: "apartments-flats",
    title: "Apartments & Flats",
    subtitle: "2 BHK, 3 BHK & 4 BHK homes in premier residential complexes across Kolkata",
    ctaText: "View apartments",
    propertyTypes: ["Apartment"],
    image: IMAGES.categories.apartmentsOffices.src,
    imageAlt: IMAGES.categories.apartmentsOffices.alt,
    srcSet: IMAGES.categories.apartmentsOffices.srcSet,
  },
  {
    id: "family-houses",
    title: "Independent Houses & Villas",
    subtitle: "Spacious standalone bungalows and gated row villas with private terraces",
    ctaText: "View houses & villas",
    propertyTypes: ["House", "Villa"],
    image: IMAGES.categories.familyHouses.src,
    imageAlt: IMAGES.categories.familyHouses.alt,
    srcSet: IMAGES.categories.familyHouses.srcSet,
  },
  {
    id: "commercial-plots",
    title: "Commercial & Land Plots",
    subtitle: "Grade-A IT office spaces in Sector V and freehold residential plots in Rajarhat",
    ctaText: "View commercial & plots",
    propertyTypes: ["Office", "Land"],
    image: IMAGES.categories.commercialLand.src,
    imageAlt: IMAGES.categories.commercialLand.alt,
    srcSet: IMAGES.categories.commercialLand.srcSet,
  },
];
