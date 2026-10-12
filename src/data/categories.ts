import { IMAGES } from "./images";

export interface LifestyleCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export const LIFESTYLE_CATEGORIES: LifestyleCategory[] = [
  {
    id: "family-houses",
    title: "Family Houses",
    subtitle: "More room for life to happen.",
    image: IMAGES.categories.familyHouses.src,
    imageAlt: IMAGES.categories.familyHouses.alt,
  },
  {
    id: "apartments-offices",
    title: "Apartments & Offices",
    subtitle: "Contemporary homes close to everything.",
    image: IMAGES.categories.apartmentsOffices.src,
    imageAlt: IMAGES.categories.apartmentsOffices.alt,
  },
  {
    id: "office-buildings",
    title: "Office Buildings",
    subtitle: "Distinctive properties for something bigger.",
    image: IMAGES.categories.officeBuildings.src,
    imageAlt: IMAGES.categories.officeBuildings.alt,
  },
];
