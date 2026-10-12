import React from "react";
import { ARTICLES_DATA } from "../../data/articles";
import { SectionHeading } from "../ui/SectionHeading";
import { ArticleCard } from "../cards/ArticleCard";
import { SAMPLE_CONTENT } from "../../config/site";

export const Articles: React.FC = () => {
  // When SAMPLE_CONTENT is false and no article has a real href, do not render section
  const hasRealArticles = ARTICLES_DATA.some((a) => !a.isSample || !!a.href);
  if (!SAMPLE_CONTENT && !hasRealArticles) {
    return null;
  }

  return (
    <section
      id="blog"
      aria-labelledby="articles-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page flex flex-col gap-10 sm:gap-12">
        {/* Section Heading Row */}
        <SectionHeading
          id="articles-heading"
          eyebrow="Guides & Insights"
          titleLine1="Your Guide To Smarter"
          titleLine2="Property Decisions"
          description="Practical guidance and checklists to help you prepare for buying, renting or registering property in Kolkata."
        />

        {/* 3 Articles Grid (tablet spans 3rd card across 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {ARTICLES_DATA.map((article, idx) => (
            <div
              key={article.id}
              className={idx === 2 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
