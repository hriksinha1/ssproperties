import { IMAGES } from "./images";

export interface ArticleItem {
  id: string;
  tag: string;
  date: string;
  title: string;
  image: string;
  imageAlt: string;
  slug: string;
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "article-1",
    tag: "USA",
    date: "Sep 22, 2026",
    title: "The Ultimate Guide to Finding Your Perfect Home",
    image: IMAGES.articles[0].src,
    imageAlt: IMAGES.articles[0].alt,
    slug: "ultimate-guide-finding-perfect-home",
  },
  {
    id: "article-2",
    tag: "CANADA",
    date: "Sep 20, 2026",
    title: "5 Things to Know Before Buying a Property",
    image: IMAGES.articles[1].src,
    imageAlt: IMAGES.articles[1].alt,
    slug: "five-things-to-know-before-buying-property",
  },
  {
    id: "article-3",
    tag: "NEW JERSEY",
    date: "Sep 17, 2026",
    title: "How to Choose the Right Neighborhood for Your Lifestyle",
    image: IMAGES.articles[2].src,
    imageAlt: IMAGES.articles[2].alt,
    slug: "how-to-choose-neighborhood-for-lifestyle",
  },
];
