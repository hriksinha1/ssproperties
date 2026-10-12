import React from "react";
import { BookOpen, ArrowRight, ArrowLeft } from "lucide-react";
import { ARTICLES_DATA, ArticleItem } from "../../data/articles";
import { SectionHeading } from "../ui/SectionHeading";
import { CircleIconButton } from "../ui/CircleIconButton";
import { ArticleCard } from "../cards/ArticleCard";

export interface ArticlesProps {
  onReadArticle?: (article: ArticleItem) => void;
}

export const Articles: React.FC<ArticlesProps> = ({ onReadArticle }) => {
  return (
    <section
      id="blog"
      aria-labelledby="articles-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-12">
        {/* Section Heading Row */}
        <SectionHeading
          id="articles-heading"
          eyebrow="Blogs & Articles"
          eyebrowIcon={<BookOpen className="w-3.5 h-3.5 text-emerald-800" />}
          titleLine1="Your Guide To Smarter"
          titleLine2="Property Decisions"
          description="Stay informed with expert insights, market trends, property tips, and the latest real estate news."
          rightAction={
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8EFAE] hover:bg-[#A9E18A] text-[#0E170E] text-xs font-semibold tracking-wide transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0E170E]"
              >
                <span>See All Blogs</span>
                <span className="w-5 h-5 rounded-full bg-[#0E170E] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>

              <div className="flex items-center gap-1.5" aria-label="Article navigation">
                <CircleIconButton
                  variant="outline"
                  size="sm"
                  aria-label="Previous article page"
                  disabled
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </CircleIconButton>
                <CircleIconButton
                  variant="dark"
                  size="sm"
                  aria-label="Next article page"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </CircleIconButton>
              </div>
            </div>
          }
        />

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES_DATA.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onRead={onReadArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
