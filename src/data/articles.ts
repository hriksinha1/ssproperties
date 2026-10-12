import { IMAGES } from "./images";

export interface ArticleItem {
  id: string;
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
  srcSet?: string;
  href?: string;
  isSample: boolean;
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "article-1",
    tag: "Buying",
    title: "Guide to Finding the Right Home for Your Needs",
    image: IMAGES.articles[0].src,
    imageAlt: IMAGES.articles[0].alt,
    srcSet: IMAGES.articles[0].srcSet,
    isSample: true,
  },
  {
    id: "article-2",
    tag: "Preparation",
    title: "Key Factors to Review Before Making an Offer",
    image: IMAGES.articles[1].src,
    imageAlt: IMAGES.articles[1].alt,
    srcSet: IMAGES.articles[1].srcSet,
    isSample: true,
  },
  {
    id: "article-3",
    tag: "Neighborhoods",
    title: "How to Assess a Neighborhood Before Deciding",
    image: IMAGES.articles[2].src,
    imageAlt: IMAGES.articles[2].alt,
    srcSet: IMAGES.articles[2].srcSet,
    isSample: true,
  },
];
