import { IMAGES } from "./images";

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  formattedPrice: string;
  status: "For Sale" | "For Rent" | "New Launch";
  propertyType: "Apartment" | "House" | "Villa" | "Land" | "Office";
  beds: number;
  baths: number;
  areaSqFt: number;
  agentName: string;
  agentAvatar: string;
  image: string;
  imageAlt: string;
}

export const LISTINGS_DATA: PropertyListing[] = [
  {
    id: "casa-verde",
    title: "Casa Verde",
    location: "Los Angeles, California",
    city: "Los Angeles",
    price: 2850000,
    formattedPrice: "$2,850,000",
    status: "For Sale",
    propertyType: "Apartment",
    beds: 4,
    baths: 2,
    areaSqFt: 2200,
    agentName: "Joseph Riggs",
    agentAvatar: IMAGES.avatars.agent,
    image: IMAGES.listings.casaVerde.src,
    imageAlt: IMAGES.listings.casaVerde.alt,
  },
  {
    id: "glass-house",
    title: "The Glass House",
    location: "Los Angeles, California",
    city: "Los Angeles",
    price: 3850000,
    formattedPrice: "$3,850,000",
    status: "For Sale",
    propertyType: "House",
    beds: 3,
    baths: 3,
    areaSqFt: 3100,
    agentName: "Joseph Riggs",
    agentAvatar: IMAGES.avatars.agent,
    image: IMAGES.listings.glassHouse.src,
    imageAlt: IMAGES.listings.glassHouse.alt,
  },
  {
    id: "cedar-residence",
    title: "The Cedar Residence",
    location: "Los Angeles, California",
    city: "Los Angeles",
    price: 2850000,
    formattedPrice: "$2,850,000",
    status: "For Sale",
    propertyType: "House",
    beds: 5,
    baths: 4,
    areaSqFt: 4500,
    agentName: "Joseph Riggs",
    agentAvatar: IMAGES.avatars.agent,
    image: IMAGES.listings.cedarResidence.src,
    imageAlt: IMAGES.listings.cedarResidence.alt,
  },
  {
    id: "villa-serenita",
    title: "Villa Serenita",
    location: "Miami, Florida",
    city: "Miami",
    price: 4200000,
    formattedPrice: "$4,200,000",
    status: "For Sale",
    propertyType: "Villa",
    beds: 4,
    baths: 4,
    areaSqFt: 3800,
    agentName: "Joseph Riggs",
    agentAvatar: IMAGES.avatars.agent,
    image: IMAGES.listings.villaSerenita.src,
    imageAlt: IMAGES.listings.villaSerenita.alt,
  },
  {
    id: "horizon-peak",
    title: "Horizon Peak",
    location: "Austin, Texas",
    city: "Austin",
    price: 1950000,
    formattedPrice: "$1,950,000",
    status: "For Sale",
    propertyType: "House",
    beds: 3,
    baths: 2,
    areaSqFt: 2400,
    agentName: "Joseph Riggs",
    agentAvatar: IMAGES.avatars.agent,
    image: IMAGES.listings.horizonPeak.src,
    imageAlt: IMAGES.listings.horizonPeak.alt,
  },
  {
    id: "nordic-pine",
    title: "Nordic Pine Pavilion",
    location: "New York, New York",
    city: "New York",
    price: 5400000,
    formattedPrice: "$5,400,000",
    status: "For Sale",
    propertyType: "Office",
    beds: 5,
    baths: 5,
    areaSqFt: 5100,
    agentName: "Joseph Riggs",
    agentAvatar: IMAGES.avatars.agent,
    image: IMAGES.listings.nordicPine.src,
    imageAlt: IMAGES.listings.nordicPine.alt,
  },
];
