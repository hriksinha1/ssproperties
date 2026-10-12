import React from "react";
import { ChevronRight } from "lucide-react";
import { ArticleItem } from "../../data/articles";
import { SmartImage } from "../ui/SmartImage";

export interface ArticleCardProps {
  article: ArticleItem;
  onRead?: (article: ArticleItem) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onRead }) => {
  return (
    <article
      tabIndex={0}
      className="group rounded-[24px] bg-white p-3.5 md:p-4 shadow-[0_8px_30px_rgba(15,30,15,0.06)] border border-[#DCE8D5]/60 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(15,30,15,0.12)] hover:-translate-y-1 text-left focus-visible:outline-2 focus-visible:outline-[#0E170E] focus-visible:outline-offset-2"
      aria-label={`${article.title}, published ${article.date}`}
    >
      <div>
        {/* Photo */}
        <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden bg-[#E8F5DE] mb-4">
          <SmartImage
            src={article.image}
            alt={article.imageAlt}
            subjectName={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#566356] uppercase tracking-wider mb-2">
          <span className="text-[#0E170E] font-semibold">{article.tag}</span>
          <span aria-hidden="true">•</span>
          <span>{article.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold text-[#0E170E] leading-snug line-clamp-2 mb-4 group-hover:text-emerald-950 transition-colors">
          {article.title}
        </h3>
      </div>

      {/* Soft Green Explore Now Button */}
      <button
        type="button"
        onClick={() => onRead?.(article)}
        className="w-full py-2.5 px-4 rounded-full bg-[#E8F5DE] hover:bg-[#C8EFAE] text-[#0E170E] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[42px]"
      >
        <span>Explore Now</span>
        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </article>
  );
};
