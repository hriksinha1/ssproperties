import React, { useState, useEffect, useMemo, useRef } from "react";
import { Hero } from "./components/sections/Hero";
import { FeaturedListings } from "./components/sections/FeaturedListings";
import { PersonalizedService } from "./components/sections/PersonalizedService";
import { LifestyleCategories } from "./components/sections/LifestyleCategories";
import { Testimonials } from "./components/sections/Testimonials";
import { Articles } from "./components/sections/Articles";
import { FAQ } from "./components/sections/FAQ";
import { ContactCTA } from "./components/sections/ContactCTA";
import { Footer } from "./components/layout/Footer";
import { LISTINGS_DATA, PropertyListing, PropertyType, formatListingPrice } from "./data/listings";
import { SearchDraftState } from "./components/sections/PropertySearch";
import { LifestyleCategory } from "./data/categories";
import { Dialog } from "./components/ui/Dialog";
import { SmartImage } from "./components/ui/SmartImage";
import { Bed, Bath, Maximize2, MapPin, MessageCircle } from "lucide-react";
import { BRAND_NAME, WHATSAPP_URL, PRICE_BANDS, AREA_UNIT, SAMPLE_CONTENT } from "./config/site";

export interface ListingFilters {
  status: "For Sale" | "For Rent" | "New Launch" | "all";
  location: string;
  propertyTypes: PropertyType[];
  priceBandId: string;
  bedrooms: string;
}

const INITIAL_FILTERS: ListingFilters = {
  status: "all",
  location: "all",
  propertyTypes: [],
  priceBandId: "any",
  bedrooms: "any",
};

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [filters, setFilters] = useState<ListingFilters>(INITIAL_FILTERS);
  const [activeCategoryLabel, setActiveCategoryLabel] = useState<string | null>(null);

  // Property detail dialog state
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const propertyTriggerRef = useRef<HTMLElement | null>(null);

  // IntersectionObserver to sync active nav link with scroll position
  useEffect(() => {
    const sectionIds = ["hero", "about", "properties", "lifestyle", "testimonials", "blog", "faq", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -40% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Filter listings based on current unified filters state
  const filteredListings = useMemo(() => {
    return LISTINGS_DATA.filter((item) => {
      // Status filter
      if (filters.status !== "all" && item.status !== filters.status) {
        return false;
      }

      // Location filter
      if (filters.location !== "all" && item.city.toLowerCase() !== filters.location.toLowerCase()) {
        return false;
      }

      // Property type filter
      if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(item.propertyType)) {
        return false;
      }

      // Price band filter
      if (filters.priceBandId !== "any") {
        const band = PRICE_BANDS.find((b) => b.id === filters.priceBandId);
        if (band && (item.price < band.min || item.price > band.max)) {
          return false;
        }
      }

      // Bedrooms filter
      if (filters.bedrooms !== "any") {
        if (filters.bedrooms === "1-2" && (item.beds < 1 || item.beds > 2)) return false;
        if (filters.bedrooms === "3-4" && (item.beds < 3 || item.beds > 4)) return false;
        if (filters.bedrooms === "5-plus" && item.beds < 5) return false;
      }

      return true;
    });
  }, [filters]);

  const hasActiveFilters = useMemo(() => {
    return (
      filters.status !== "all" ||
      filters.location !== "all" ||
      filters.propertyTypes.length > 0 ||
      filters.priceBandId !== "any" ||
      filters.bedrooms !== "any" ||
      activeCategoryLabel !== null
    );
  }, [filters, activeCategoryLabel]);

  // Handle Search Panel commit
  const handleCommitSearch = (draft: SearchDraftState) => {
    let nextStatus: ListingFilters["status"] = "all";
    if (draft.tab === "Buy") nextStatus = "For Sale";
    else if (draft.tab === "Rent") nextStatus = "For Rent";
    else if (draft.tab === "New Launch") nextStatus = "New Launch";

    let nextTypes: PropertyType[] = [];
    if (draft.propertyType !== "all") {
      nextTypes = [draft.propertyType as PropertyType];
    }

    setFilters({
      status: nextStatus,
      location: draft.location,
      propertyTypes: nextTypes,
      priceBandId: draft.priceBand,
      bedrooms: draft.bedrooms,
    });
    setActiveCategoryLabel(null);

    const propertiesEl = document.getElementById("properties");
    if (propertiesEl) {
      propertiesEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle immediate chip selection on Featured Listings
  const handleSelectTypeChip = (chip: string) => {
    setActiveCategoryLabel(null);
    if (chip === "All") {
      setFilters((prev) => ({ ...prev, propertyTypes: [] }));
    } else {
      setFilters((prev) => ({ ...prev, propertyTypes: [chip as PropertyType] }));
    }
  };

  // Handle category card click
  const handleExploreCategory = (category: LifestyleCategory) => {
    setFilters((prev) => ({
      ...prev,
      propertyTypes: category.propertyTypes,
    }));
    setActiveCategoryLabel(category.title);

    const propertiesEl = document.getElementById("properties");
    if (propertiesEl) {
      propertiesEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClearFilters = () => {
    setFilters(INITIAL_FILTERS);
    setActiveCategoryLabel(null);
  };

  const selectedTypeChip = useMemo(() => {
    if (filters.propertyTypes.length === 1) {
      return filters.propertyTypes[0];
    }
    return "All";
  }, [filters.propertyTypes]);

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col relative selection:bg-accent selection:text-ink">
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-ink focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Hero Section with Overlaid Header and Overlapping Search Panel */}
      <Hero
        activeSection={activeSection}
        onCommitSearch={handleCommitSearch}
        onClearFilters={handleClearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 flex flex-col overflow-visible">
        {/* Section 3: Featured Listings (id="properties") */}
        <FeaturedListings
          listings={filteredListings}
          totalListingsCount={LISTINGS_DATA.length}
          selectedTypeChip={selectedTypeChip}
          onSelectTypeChip={handleSelectTypeChip}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
          activeCategoryLabel={activeCategoryLabel}
          onSelectProperty={(prop, triggerEl) => {
            propertyTriggerRef.current = triggerEl;
            setSelectedProperty(prop);
          }}
        />

        {/* Section 4: Personalized Service (id="about") */}
        <PersonalizedService />

        {/* Section 5: Lifestyle Categories (id="lifestyle") */}
        <LifestyleCategories onExploreCategory={handleExploreCategory} />

        {/* Section 6: Testimonials (id="testimonials") */}
        <Testimonials />

        {/* Section 7: Articles & Guides (id="blog") */}
        <Articles />

        {/* Section 8: FAQ & Help Panel (id="faq") */}
        <FAQ />

        {/* Section 9: Final Conversion CTA (id="contact") */}
        <ContactCTA />
      </main>

      {/* Section 10: Rounded Footer Container */}
      <Footer />

      {/* Accessible Property Detail Dialog */}
      {selectedProperty && (
        <Dialog
          isOpen={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
          titleId="property-dialog-title"
          triggerRef={propertyTriggerRef}
        >
          <div className="aspect-[16/10] w-full bg-tint overflow-hidden">
            <SmartImage
              src={selectedProperty.image}
              srcSet={selectedProperty.srcSet}
              alt={selectedProperty.imageAlt}
              subjectName={selectedProperty.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-5 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                  {selectedProperty.status} · {selectedProperty.propertyType}
                </span>
                {SAMPLE_CONTENT && selectedProperty.isSample && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-tint text-ink border border-line">
                    Sample listing
                  </span>
                )}
              </div>
              <h3 id="property-dialog-title" className="font-display text-3xl sm:text-4xl text-ink">
                {selectedProperty.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-ink-muted mt-1">
                <MapPin className="w-4 h-4 shrink-0 text-ink-muted" aria-hidden="true" />
                <span>{selectedProperty.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-3.5 border-y border-line text-xs sm:text-sm font-medium text-ink-muted flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5">
                <Bed className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>{selectedProperty.beds} Bedrooms</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Bath className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>{selectedProperty.baths} Bathrooms</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-ink" aria-hidden="true" />
                <span>{selectedProperty.areaSqFt} {AREA_UNIT}</span>
              </span>
            </div>

            <div className="flex items-center justify-between pt-1 flex-wrap gap-4">
              <div>
                <span className="text-xs text-ink-muted block">Price</span>
                <span className="font-semibold text-xl sm:text-2xl text-ink tabular-nums">
                  {formatListingPrice(selectedProperty.price)}
                </span>
              </div>

              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  `Hi ${BRAND_NAME}, I'd like to ask about ${selectedProperty.title} (${selectedProperty.location}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-accent hover:bg-accent-strong text-ink text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors min-h-[44px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Ask about this property</span>
              </a>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
