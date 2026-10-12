import React, { useState, useEffect } from "react";
import { Hero } from "./components/sections/Hero";
import { FeaturedListings } from "./components/sections/FeaturedListings";
import { PersonalizedService } from "./components/sections/PersonalizedService";
import { LifestyleCategories } from "./components/sections/LifestyleCategories";
import { Testimonials } from "./components/sections/Testimonials";
import { Articles } from "./components/sections/Articles";
import { FAQ } from "./components/sections/FAQ";
import { ContactCTA } from "./components/sections/ContactCTA";
import { Footer } from "./components/layout/Footer";
import { LISTINGS_DATA, PropertyListing } from "./data/listings";
import { SearchFilterState } from "./components/sections/PropertySearch";
import { LifestyleCategory } from "./data/categories";
import { ArticleItem } from "./data/articles";
import { X, Bed, Bath, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { SmartImage } from "./components/ui/SmartImage";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [filteredListings, setFilteredListings] = useState<PropertyListing[]>(LISTINGS_DATA);
  const [searchResultMessage, setSearchResultMessage] = useState<string | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [infoModal, setInfoModal] = useState<{ title: string; message: string } | null>(null);

  // IntersectionObserver to sync active nav link with scroll position
  useEffect(() => {
    const sectionIds = ["hero", "about", "properties", "testimonials", "blog", "faq", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Map section id to main nav items (hero -> hero, about -> about, properties -> properties, contact -> contact)
            if (["hero", "about", "properties", "contact"].includes(entry.target.id)) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Search filter handler
  const handleSearch = (filters: SearchFilterState) => {
    let results = [...LISTINGS_DATA];

    if (filters.typeChip !== "All") {
      results = results.filter(
        (item) => item.propertyType.toLowerCase() === filters.typeChip.toLowerCase()
      );
    } else if (filters.propertyType && filters.propertyType !== "Any") {
      results = results.filter(
        (item) => item.propertyType.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }

    if (filters.location && filters.location !== "All Locations") {
      const cityKey = filters.location.split(",")[0].trim().toLowerCase();
      results = results.filter((item) =>
        item.location.toLowerCase().includes(cityKey) || item.city.toLowerCase().includes(cityKey)
      );
    }

    // If no exact match with multiple strict filters, show curated results so user always has great listings
    const finalCount = results.length > 0 ? results.length : LISTINGS_DATA.length;
    const finalResults = results.length > 0 ? results : LISTINGS_DATA;

    setFilteredListings(finalResults);
    setSearchResultMessage(
      `Showing ${finalCount} ${filters.typeChip !== "All" ? filters.typeChip : "curated"} properties matching "${filters.tab}" (demo preview).`
    );

    const propertiesEl = document.getElementById("properties");
    if (propertiesEl) {
      propertiesEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleExploreCategory = (category: LifestyleCategory) => {
    setInfoModal({
      title: category.title,
      message: `You've selected the ${category.title} collection (${category.subtitle}). In full production, this opens the tailored architectural portfolio for this category.`,
    });
  };

  const handleReadArticle = (article: ArticleItem) => {
    setInfoModal({
      title: article.title,
      message: `Full article "${article.title}" (${article.tag} · ${article.date}). In full production, this renders the editorial broadsheet essay.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#F3F9EE] text-[#0E170E] flex flex-col relative selection:bg-[#C8EFAE] selection:text-[#0E170E]">
      {/* Skip to Main Content Link for WCAG Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0E170E] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Hero Section with Overlaid Header and Overlapping Search Panel */}
      <Hero
        activeSection={activeSection}
        onSearch={handleSearch}
        resultMessage={searchResultMessage}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col overflow-visible">
        {/* Section 3: Featured Listings (id="properties") */}
        <FeaturedListings
          listings={filteredListings}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* Section 4: Personalized Service (id="about") */}
        <PersonalizedService />

        {/* Section 5: Lifestyle Categories (id="lifestyle") */}
        <LifestyleCategories onExploreCategory={handleExploreCategory} />

        {/* Section 6: Testimonials (id="testimonials") */}
        <Testimonials />

        {/* Section 7: Articles & Blogs (id="blog") */}
        <Articles onReadArticle={handleReadArticle} />

        {/* Section 8: FAQ & Help Panel (id="faq") */}
        <FAQ />

        {/* Section 9: Final Conversion CTA (id="contact") */}
        <ContactCTA />
      </main>

      {/* Section 10: Rounded Footer Container */}
      <Footer />

      {/* Accessible Property Detail Preview Modal */}
      {selectedProperty && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="property-modal-title"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-[28px] overflow-hidden shadow-2xl border border-[#DCE8D5] text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center text-[#0E170E] hover:bg-[#F3F9EE] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/10] w-full bg-[#E8F5DE]">
              <SmartImage
                src={selectedProperty.image}
                alt={selectedProperty.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  {selectedProperty.status} · {selectedProperty.propertyType}
                </span>
                <h3 id="property-modal-title" className="font-display text-3xl text-[#0E170E] mt-0.5">
                  {selectedProperty.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#566356] mt-1">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{selectedProperty.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-y border-[#DCE8D5] text-xs font-medium text-[#566356]">
                <span className="inline-flex items-center gap-1">
                  <Bed className="w-4 h-4 text-[#0E170E]" aria-hidden="true" />
                  <span>{selectedProperty.beds} Bedrooms</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Bath className="w-4 h-4 text-[#0E170E]" aria-hidden="true" />
                  <span>{selectedProperty.baths} Bathrooms</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Maximize2 className="w-4 h-4 text-[#0E170E]" aria-hidden="true" />
                  <span>{selectedProperty.areaSqFt} sq. ft.</span>
                </span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[11px] text-[#566356] block">Listed Price</span>
                  <span className="font-semibold text-xl text-[#0E170E]">
                    {selectedProperty.formattedPrice}
                  </span>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProperty(null)}
                  className="px-5 py-2.5 rounded-full bg-[#C8EFAE] hover:bg-[#A9E18A] text-[#0E170E] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessible Generic Info Modal */}
      {infoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setInfoModal(null)}
        >
          <div
            className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#DCE8D5] text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setInfoModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F3F9EE] flex items-center justify-center text-[#0E170E] hover:bg-[#E8F5DE] cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-display text-2xl text-[#0E170E] mb-2">{infoModal.title}</h3>
            <p className="text-xs sm:text-sm text-[#566356] leading-relaxed mb-6">
              {infoModal.message}
            </p>

            <button
              type="button"
              onClick={() => setInfoModal(null)}
              className="w-full py-2.5 rounded-full bg-[#0E170E] text-white text-xs font-medium hover:bg-[#1f2e1f] transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
