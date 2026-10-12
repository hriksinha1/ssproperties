import React from "react";
import { ChevronRight, MessageCircle } from "lucide-react";
import { ArticleItem } from "../../data/articles";
import { WHATSAPP_URL } from "../../config/site";
import { SmartImage } from "../ui/SmartImage";

export interface ArticleCardProps {
  article: ArticleItem;
  onRead?: (article: ArticleItem) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const guideLink =
    article.href ||
    `${WHATSAPP_URL}?text=${encodeURIComponent(
      `Hi SSProperty, I would like to get information regarding your guide: "${article.title}".`
    )}`;

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
        <div className="flex items-center gap-2 text-xs font-bold text-ink uppercase tracking-wider mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-tint border border-line text-ink">
            {article.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-bold text-ink leading-snug line-clamp-2 mb-4">
          {article.title}
        </h3>
      </div>

      {/* Guide Link or WhatsApp Request */}
      <a
        href={guideLink}
        target={article.href ? undefined : "_blank"}
        rel={article.href ? undefined : "noopener noreferrer"}
        className="w-full py-2.5 px-4 rounded-full bg-tint hover:bg-accent text-ink text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
      >
        {article.href ? (
          <>
            <span>Read guide</span>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </>
        ) : (
          <>
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Ask for guide on WhatsApp</span>
          </>
        )}
      </a>
    </article>
  );
};
