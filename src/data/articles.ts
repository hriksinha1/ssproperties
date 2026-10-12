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
    tag: "Buying Guide",
    title: "Complete Buyer's Guide: Purchasing a Flat in Kolkata & New Town",
    image: IMAGES.articles[0].src,
    imageAlt: IMAGES.articles[0].alt,
    srcSet: IMAGES.articles[0].srcSet,
    isSample: true,
  },
  {
    id: "article-2",
    tag: "Legal & Loans",
    title: "Key Checklist: WB RERA, Sanctioned Plans & Home Loan Pre-Approvals",
    image: IMAGES.articles[1].src,
    imageAlt: IMAGES.articles[1].alt,
    srcSet: IMAGES.articles[1].srcSet,
    isSample: true,
  },
  {
    id: "article-3",
    tag: "Localities",
    title: "New Town vs. South Kolkata: Choosing the Right Residential Corridor",
    image: IMAGES.articles[2].src,
    imageAlt: IMAGES.articles[2].alt,
    srcSet: IMAGES.articles[2].srcSet,
    isSample: true,
  },
];
