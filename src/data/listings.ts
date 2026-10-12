import { IMAGES } from "./images";

export type PropertyStatus = "For Sale" | "For Rent" | "New Launch";
export type PropertyType = "Apartment" | "House" | "Villa" | "Land" | "Office";

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  city: string;
  locality: string;
  price: number;
  status: PropertyStatus;
  propertyType: PropertyType;
  bhkConfig: string;
  beds: number;
  baths: number;
  superBuiltUpSqFt: number;
  carpetAreaSqFt?: number;
  highlights?: string;
  image: string;
  imageAlt: string;
  srcSet?: string;
  isSample: boolean;
}

/**
 * Formats property prices in Indian Crore / Lakh or monthly rental format.
 * Examples:
 * - ₹2.15 Cr
 * - ₹98 Lakh
 * - ₹65,000 / mo
 */
export function formatListingPrice(price: number, status?: PropertyStatus): string {
  try {
    if (status === "For Rent" || (price < 100000 && price > 0)) {
      return `₹${price.toLocaleString("en-IN")} / mo`;
    }

    if (price >= 10000000) {
      const crVal = (price / 10000000).toFixed(2).replace(/\.00$/, "").replace(/(\.[1-9])0$/, "$1");
      return `₹${crVal} Cr`;
    }

    if (price >= 100000) {
      const lakhVal = (price / 100000).toFixed(1).replace(/\.0$/, "");
      return `₹${lakhVal} Lakh`;
    }

    return `₹${price.toLocaleString("en-IN")}`;
  } catch {
    return `₹${price.toLocaleString()}`;
  }
}

/**
 * Formats full numeric amount in Indian comma notation (e.g. ₹98,00,000).
 */
export function formatFullIndianPrice(price: number): string {
  try {
    return `₹${price.toLocaleString("en-IN")}`;
  } catch {
    return `₹${price.toLocaleString()}`;
  }
}

export const LISTINGS_DATA: PropertyListing[] = [
  {
    id: "green-terraces",
    title: "The Green Terraces",
    location: "Action Area II, New Town, Kolkata",
    city: "Kolkata",
    locality: "New Town",
    price: 9800000,
    status: "For Sale",
    propertyType: "Apartment",
    bhkConfig: "3 BHK Flat",
    beds: 3,
    baths: 3,
    superBuiltUpSqFt: 1650,
    carpetAreaSqFt: 1280,
    highlights: "South-facing wide balcony · Covered parking · Gated society with clubhouse",
    image: IMAGES.listings.greenTerraces.src,
    imageAlt: IMAGES.listings.greenTerraces.alt,
    srcSet: IMAGES.listings.greenTerraces.srcSet,
    isSample: true,
  },
  {
    id: "skyview-residences",
    title: "Skyview Residences",
    location: "Chinar Park, Rajarhat, Kolkata",
    city: "Kolkata",
    locality: "Rajarhat",
    price: 5200000,
    status: "For Sale",
    propertyType: "Apartment",
    bhkConfig: "2 BHK Flat",
    beds: 2,
    baths: 2,
    superBuiltUpSqFt: 1080,
    carpetAreaSqFt: 840,
    highlights: "Close to Yellow Line Metro · 24x7 Security · Power backup",
    image: IMAGES.listings.skyview.src,
    imageAlt: IMAGES.listings.skyview.alt,
    srcSet: IMAGES.listings.skyview.srcSet,
    isSample: true,
  },
  {
    id: "vista-enclave",
    title: "The Vista Enclave",
    location: "EM Bypass (Near Ruby), Kolkata",
    city: "Kolkata",
    locality: "EM Bypass",
    price: 21500000,
    status: "For Sale",
    propertyType: "Apartment",
    bhkConfig: "4 BHK Luxury",
    beds: 4,
    baths: 4,
    superBuiltUpSqFt: 2750,
    carpetAreaSqFt: 2180,
    highlights: "Panoramic wetland view · 2 reserved car parkings · Infinity pool & gym",
    image: IMAGES.listings.vistaEnclave.src,
    imageAlt: IMAGES.listings.vistaEnclave.alt,
    srcSet: IMAGES.listings.vistaEnclave.srcSet,
    isSample: true,
  },
  {
    id: "south-city-bungalow",
    title: "South Heritage Bungalow",
    location: "Garia South, Kolkata",
    city: "Kolkata",
    locality: "Garia",
    price: 14500000,
    status: "For Sale",
    propertyType: "House",
    bhkConfig: "4 BHK House",
    beds: 4,
    baths: 3,
    superBuiltUpSqFt: 2400,
    carpetAreaSqFt: 2100,
    highlights: "Independent G+1 structure · Private open terrace · Quiet residential lane",
    image: IMAGES.listings.southBungalow.src,
    imageAlt: IMAGES.listings.southBungalow.alt,
    srcSet: IMAGES.listings.southBungalow.srcSet,
    isSample: true,
  },
  {
    id: "vedic-greens-villa",
    title: "Vedic Greens Row Villa",
    location: "Shikharpur, Rajarhat, Kolkata",
    city: "Kolkata",
    locality: "Rajarhat",
    price: 18500000,
    status: "New Launch",
    propertyType: "Villa",
    bhkConfig: "3 BHK Villa",
    beds: 3,
    baths: 3,
    superBuiltUpSqFt: 2200,
    carpetAreaSqFt: 1850,
    highlights: "Private manicured lawn · Vaastu compliant · Resort clubhouse access",
    image: IMAGES.listings.vedicGreens.src,
    imageAlt: IMAGES.listings.vedicGreens.alt,
    srcSet: IMAGES.listings.vedicGreens.srcSet,
    isSample: true,
  },
  {
    id: "greenfield-plot",
    title: "Greenfield Residential Plot",
    location: "Rajarhat Chowmatha Extension, Kolkata",
    city: "Kolkata",
    locality: "Rajarhat",
    price: 4200000,
    status: "For Sale",
    propertyType: "Land",
    bhkConfig: "3 Kottah Plot",
    beds: 0,
    baths: 0,
    superBuiltUpSqFt: 2160,
    carpetAreaSqFt: 2160,
    highlights: "Freehold title · 30 ft wide front road · Immediate mutation & registry ready",
    image: IMAGES.listings.greenfieldPlot.src,
    imageAlt: IMAGES.listings.greenfieldPlot.alt,
    srcSet: IMAGES.listings.greenfieldPlot.srcSet,
    isSample: true,
  },
  {
    id: "tech-suite-sector-v",
    title: "Horizon Tech Office Suite",
    location: "Sector V, Salt Lake, Kolkata",
    city: "Kolkata",
    locality: "Salt Lake",
    price: 65000,
    status: "For Rent",
    propertyType: "Office",
    bhkConfig: "Furnished Office",
    beds: 0,
    baths: 2,
    superBuiltUpSqFt: 1850,
    carpetAreaSqFt: 1420,
    highlights: "Plug & play 24 workstations · Central AC · High-speed elevators · Metro 500m",
    image: IMAGES.listings.techSuite.src,
    imageAlt: IMAGES.listings.techSuite.alt,
    srcSet: IMAGES.listings.techSuite.srcSet,
    isSample: true,
  },
  {
    id: "ballygunge-suites",
    title: "Ballygunge Heritage Flat",
    location: "Ballygunge Circular Road, South Kolkata",
    city: "Kolkata",
    locality: "South Kolkata",
    price: 55000,
    status: "For Rent",
    propertyType: "Apartment",
    bhkConfig: "3 BHK Flat",
    beds: 3,
    baths: 3,
    superBuiltUpSqFt: 1900,
    carpetAreaSqFt: 1550,
    highlights: "Fully furnished · Servant quarter · 24-hr water & dedicated covered parking",
    image: IMAGES.listings.ballygungeSuites.src,
    imageAlt: IMAGES.listings.ballygungeSuites.alt,
    srcSet: IMAGES.listings.ballygungeSuites.srcSet,
    isSample: true,
  },
];
