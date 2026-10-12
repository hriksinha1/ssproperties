import React, { useState, useRef, useMemo } from "react";
import { MapPin, Building2, Tag, Bed, ChevronDown, Search, MessageCircle, RotateCcw } from "lucide-react";
import { LISTINGS_DATA } from "../../data/listings";
import { PRICE_BANDS, WHATSAPP_URL } from "../../config/site";

export interface SearchDraftState {
  tab: "Buy" | "Rent" | "New Launch" | "Sell";
  location: string;
  propertyType: string;
  priceBand: string;
  bedrooms: string;
}

export interface PropertySearchProps {
  onCommitSearch: (filters: SearchDraftState) => void;
  resultCountMessage?: string | null;
  onClearFilters?: () => void;
  hasActiveFilters?: boolean;
}

const TABS: Array<"Buy" | "Rent" | "New Launch" | "Sell"> = ["Buy", "Rent", "New Launch", "Sell"];

export const PropertySearch: React.FC<PropertySearchProps> = ({
  onCommitSearch,
  resultCountMessage,
  onClearFilters,
  hasActiveFilters,
}) => {
  const [tab, setTab] = useState<"Buy" | "Rent" | "New Launch" | "Sell">("Buy");
  const [location, setLocation] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [priceBand, setPriceBand] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Unique localities from Kolkata listings data
  const localityOptions = useMemo(() => {
    const set = new Set<string>();
    LISTINGS_DATA.forEach((item) => set.add(item.locality));
    return Array.from(set).sort();
  }, []);

  const handleKeyDownTab = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % TABS.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + TABS.length) % TABS.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = TABS.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    setTab(TABS[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCommitSearch({
      tab,
      location,
      propertyType,
      priceBand,
      bedrooms,
    });
  };

  return (
    <div className="container-page relative z-20">
      <form
        onSubmit={handleSubmit}
        className="bg-surface rounded-search p-5 sm:p-6 md:p-8 shadow-search border border-line text-left transition-all"
        aria-label="Property search filters"
      >
        {/* Row 1: ARIA Tabs */}
        <div
          role="tablist"
          aria-label="Property Transaction Type"
          className="flex items-center gap-2 flex-wrap pb-4 border-b border-line"
        >
          {TABS.map((tabItem, idx) => {
            const isSelected = tab === tabItem;
            return (
              <button
                key={tabItem}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tabItem.toLowerCase().replace(/\s+/g, "-")}`}
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setTab(tabItem)}
                onKeyDown={(e) => handleKeyDownTab(e, idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer min-h-[44px] sm:min-h-[40px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 ${
                  isSelected
                    ? "bg-accent text-ink shadow-xs"
                    : "text-ink-muted hover:text-ink hover:bg-tint"
                }`}
              >
                {tabItem}
              </button>
            );
          })}
        </div>

        {/* Tab Panel for "Sell" Tab */}
        {tab === "Sell" ? (
          <div
            role="tabpanel"
            aria-labelledby="tab-sell"
            className="py-8 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-tint rounded-2xl my-4 border border-line"
          >
            <div className="flex flex-col gap-1 text-left max-w-xl">
              <h3 className="text-base sm:text-lg font-bold text-ink">
                Looking to sell or lease out your property in Kolkata?
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Share your property configuration, location (New Town, Rajarhat, South Kolkata, etc.), and expected timeline on WhatsApp. We will help with valuation and genuine buyer inquiries.
              </p>
            </div>

            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                "Hi SSProperty, I want to sell/lease my property in Kolkata. Here are the details:"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-accent hover:bg-accent-strong text-ink text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 transition-colors shrink-0 shadow-sm min-h-[44px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        ) : (
          /* Row 2 & 3: Standard Search Controls Grid */
          <div role="tabpanel" aria-labelledby={`tab-${tab.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-5 lg:divide-x divide-line">
              {/* Locality */}
              <div className="flex flex-col gap-1.5 lg:px-4 first:lg:pl-0">
                <label
                  htmlFor="search-location"
                  className="text-xs font-medium text-ink-muted flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                  <span>Locality</span>
                </label>
                <div className="relative">
                  <select
                    id="search-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full appearance-none bg-surface border border-line-strong rounded-xl text-sm font-semibold text-ink py-2.5 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-ink cursor-pointer min-h-[44px]"
                  >
                    <option value="all">All Kolkata localities</option>
                    {localityOptions.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="w-4 h-4 text-ink-muted absolute right-3 top-3.5 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex flex-col gap-1.5 lg:px-4">
                <label
                  htmlFor="search-type"
                  className="text-xs font-medium text-ink-muted flex items-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                  <span>Property type</span>
                </label>
                <div className="relative">
                  <select
                    id="search-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full appearance-none bg-surface border border-line-strong rounded-xl text-sm font-semibold text-ink py-2.5 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-ink cursor-pointer min-h-[44px]"
                  >
                    <option value="all">All property types</option>
                    <option value="Apartment">Apartment / Flat</option>
                    <option value="House">Independent House</option>
                    <option value="Villa">Row Villa</option>
                    <option value="Land">Plot / Land</option>
                    <option value="Office">Commercial Office</option>
                  </select>
                  <ChevronDown
                    className="w-4 h-4 text-ink-muted absolute right-3 top-3.5 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="flex flex-col gap-1.5 lg:px-4">
                <label
                  htmlFor="search-price"
                  className="text-xs font-medium text-ink-muted flex items-center gap-1.5"
                >
                  <Tag className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                  <span>Budget (INR)</span>
                </label>
                <div className="relative">
                  <select
                    id="search-price"
                    value={priceBand}
                    onChange={(e) => setPriceBand(e.target.value)}
                    className="w-full appearance-none bg-surface border border-line-strong rounded-xl text-sm font-semibold text-ink py-2.5 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-ink cursor-pointer min-h-[44px]"
                  >
                    {PRICE_BANDS.map((band) => (
                      <option key={band.id} value={band.id}>
                        {band.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="w-4 h-4 text-ink-muted absolute right-3 top-3.5 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Bedrooms / BHK */}
              <div className="flex flex-col gap-1.5 lg:px-4 last:lg:pr-0">
                <label
                  htmlFor="search-bedrooms"
                  className="text-xs font-medium text-ink-muted flex items-center gap-1.5"
                >
                  <Bed className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                  <span>Configuration</span>
                </label>
                <div className="relative">
                  <select
                    id="search-bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full appearance-none bg-surface border border-line-strong rounded-xl text-sm font-semibold text-ink py-2.5 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-ink cursor-pointer min-h-[44px]"
                  >
                    <option value="any">Any configuration</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4-plus">4+ BHK / Bungalow</option>
                  </select>
                  <ChevronDown
                    className="w-4 h-4 text-ink-muted absolute right-3 top-3.5 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Row: Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-line">
              <div className="flex items-center gap-3 text-xs text-ink-muted">
                {hasActiveFilters && onClearFilters && (
                  <button
                    type="button"
                    onClick={onClearFilters}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-line bg-tint text-ink hover:bg-surface transition-colors cursor-pointer min-h-[40px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Reset search filters</span>
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-accent hover:bg-accent-strong text-ink text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
              >
                <span>Search properties</span>
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {/* Polite Live Region Feedback */}
        {resultCountMessage && (
          <div
            role="status"
            aria-live="polite"
            className="mt-3 text-xs text-ink-muted bg-page px-4 py-2.5 rounded-xl border border-line"
          >
            {resultCountMessage}
          </div>
        )}
      </form>
    </div>
  );
};
