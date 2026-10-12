import { IMAGES } from "./images";
import { CURRENCY_CODE, CURRENCY_LOCALE } from "../config/site";

export type PropertyStatus = "For Sale" | "For Rent" | "New Launch";
export type PropertyType = "Apartment" | "House" | "Villa" | "Land" | "Office";

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  status: PropertyStatus;
  propertyType: PropertyType;
  beds: number;
  baths: number;
  areaSqFt: number;
  image: string;
  imageAlt: string;
  srcSet?: string;
  isSample: boolean;
}

export function formatListingPrice(price: number): string {
  try {
    return new Intl.NumberFormat(CURRENCY_LOCALE, {
      style: "currency",
      currency: CURRENCY_CODE,
      maximumFractionDigits: 0,
    }).format(price);
  } catch {
    return `$${price.toLocaleString()}`;
  }
}

export const LISTINGS_DATA: PropertyListing[] = [
  {
    id: "casa-verde",
    title: "Casa Verde",
    location: "Los Angeles, California",
    city: "Los Angeles",
    price: 2850000,
    status: "For Sale",
    propertyType: "Apartment",
    beds: 4,
    baths: 2,
    areaSqFt: 2200,
    image: IMAGES.listings.casaVerde.src,
    imageAlt: IMAGES.listings.casaVerde.alt,
    srcSet: IMAGES.listings.casaVerde.srcSet,
    isSample: true,
  },
  {
    id: "glass-house",
    title: "The Glass House",
    location: "Los Angeles, California",
    city: "Los Angeles",
    price: 3850000,
    status: "For Rent",
    propertyType: "House",
    beds: 3,
    baths: 3,
    areaSqFt: 3100,
    image: IMAGES.listings.glassHouse.src,
    imageAlt: IMAGES.listings.glassHouse.alt,
    srcSet: IMAGES.listings.glassHouse.srcSet,
    isSample: true,
  },
  {
    id: "cedar-residence",
    title: "The Cedar Residence",
    location: "Los Angeles, California",
    city: "Los Angeles",
    price: 2850000,
    status: "For Sale",
    propertyType: "House",
    beds: 5,
    baths: 4,
    areaSqFt: 4500,
    image: IMAGES.listings.cedarResidence.src,
    imageAlt: IMAGES.listings.cedarResidence.alt,
    srcSet: IMAGES.listings.cedarResidence.srcSet,
    isSample: true,
  },
  {
    id: "villa-serenita",
    title: "Villa Serenita",
    location: "Miami, Florida",
    city: "Miami",
    price: 4200000,
    status: "For Sale",
    propertyType: "Villa",
    beds: 4,
    baths: 4,
    areaSqFt: 3800,
    image: IMAGES.listings.villaSerenita.src,
    imageAlt: IMAGES.listings.villaSerenita.alt,
    srcSet: IMAGES.listings.villaSerenita.srcSet,
    isSample: true,
  },
  {
    id: "horizon-peak",
    title: "Horizon Peak",
    location: "Austin, Texas",
    city: "Austin",
    price: 1950000,
    status: "New Launch",
    propertyType: "House",
    beds: 3,
    baths: 2,
    areaSqFt: 2400,
    image: IMAGES.listings.horizonPeak.src,
    imageAlt: IMAGES.listings.horizonPeak.alt,
    srcSet: IMAGES.listings.horizonPeak.srcSet,
    isSample: true,
  },
  {
    id: "nordic-pine",
    title: "Nordic Pine Pavilion",
    location: "New York, New York",
    city: "New York",
    price: 5400000,
    status: "For Sale",
    propertyType: "House",
    beds: 5,
    baths: 5,
    areaSqFt: 5100,
    image: IMAGES.listings.nordicPine.src,
    imageAlt: IMAGES.listings.nordicPine.alt,
    srcSet: IMAGES.listings.nordicPine.srcSet,
    isSample: true,
  },
];
