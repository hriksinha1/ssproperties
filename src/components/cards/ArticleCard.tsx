import React from "react";
import { ChevronRight } from "lucide-react";
import { ArticleItem } from "../../data/articles";
import { SmartImage } from "../ui/SmartImage";

export interface ArticleCardProps {
  article: ArticleItem;
  onRead?: (article: ArticleItem) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group rounded-card bg-surface p-4 shadow-card border border-line flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left">
      <div>
        {/* Photo */}
        <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden bg-tint mb-4">
          <SmartImage
            src={article.image}
            srcSet={article.srcSet}
            alt={article.imageAlt}
            subjectName={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Metadata Topic Tag */}
        <div className="flex items-center gap-2 text-xs font-semibold text-ink uppercase tracking-wider mb-2">
          <span>{article.tag}</span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold text-ink leading-snug line-clamp-2 mb-4">
          {article.title}
        </h3>
      </div>

      {/* Real link or Coming Soon pill */}
      {article.href ? (
        <a
          href={article.href}
          className="w-full py-2.5 px-4 rounded-full bg-tint hover:bg-accent text-ink text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
        >
          <span>Read guide</span>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      ) : (
        <div className="w-full py-2.5 px-4 rounded-full bg-tint/60 text-ink-muted text-xs font-medium flex items-center justify-center min-h-[44px] select-none border border-line/60">
          <span>Coming soon</span>
        </div>
      )}
    </article>
  );
};
