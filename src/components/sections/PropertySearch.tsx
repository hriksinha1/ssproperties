import React, { useState } from "react";
import { MapPin, Building2, Tag, Bed, ChevronDown, Search } from "lucide-react";
import { Chip } from "../ui/Chip";

export interface SearchFilterState {
  tab: "Buy" | "Rent" | "Sell" | "New Launch";
  location: string;
  propertyType: string;
  priceRange: string;
  rooms: string;
  typeChip: string;
}

export interface PropertySearchProps {
  onSearch: (filters: SearchFilterState) => void;
  resultCountMessage?: string | null;
}

const TABS: Array<"Buy" | "Rent" | "Sell" | "New Launch"> = ["Buy", "Rent", "Sell", "New Launch"];
const TYPE_CHIPS = ["All", "Apartment", "House", "Land", "Office"];

export const PropertySearch: React.FC<PropertySearchProps> = ({
  onSearch,
  resultCountMessage,
}) => {
  const [tab, setTab] = useState<"Buy" | "Rent" | "Sell" | "New Launch">("Buy");
  const [location, setLocation] = useState("Los Angeles, California");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [priceRange, setPriceRange] = useState("$2M - $5M");
  const [rooms, setRooms] = useState("3-4 Rooms");
  const [typeChip, setTypeChip] = useState("All");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      tab,
      location,
      propertyType,
      priceRange,
      rooms,
      typeChip,
    });
  };

  const handleKeyDownTabList = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % TABS.length;
      setTab(TABS[nextIndex]);
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + TABS.length) % TABS.length;
      setTab(TABS[prevIndex]);
    }
  };

  return (
    <div className="w-full max-w-[1160px] mx-auto px-4 relative z-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[28px] p-5 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(15,30,15,0.14)] border border-[#DCE8D5]/80 text-left transition-all"
        aria-label="Property search filters"
      >
        {/* Row 1: Tabs */}
        <div
          role="tablist"
          aria-label="Property Transaction Type"
          className="flex items-center gap-1.5 overflow-x-auto pb-3 sm:pb-4 border-b border-[#DCE8D5]/60 no-scrollbar"
        >
          {TABS.map((tabItem, idx) => {
            const isSelected = tab === tabItem;
            return (
              <button
                key={tabItem}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setTab(tabItem)}
                onKeyDown={(e) => handleKeyDownTabList(e, idx)}
                className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer min-h-[38px] ${
                  isSelected
                    ? "bg-[#C8EFAE] text-[#0E170E] shadow-xs"
                    : "text-[#566356] hover:text-[#0E170E] hover:bg-[#F3F9EE]"
                }`}
              >
                {tabItem}
              </button>
            );
          })}
        </div>

        {/* Row 2: 4 Dropdown Controls with vertical dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 py-5 lg:divide-x divide-[#DCE8D5]/70">
          {/* Location */}
          <div className="flex flex-col gap-1 lg:px-4 first:lg:pl-0">
            <label htmlFor="search-location" className="text-[11px] font-medium text-[#566356] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0E170E]" aria-hidden="true" />
              <span>Location</span>
            </label>
            <div className="relative">
              <select
                id="search-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-semibold text-[#0E170E] py-1.5 pr-8 focus:outline-none cursor-pointer"
              >
                <option value="Los Angeles, California">Los Angeles, California</option>
                <option value="Miami, Florida">Miami, Florida</option>
                <option value="New York, New York">New York, New York</option>
                <option value="Austin, Texas">Austin, Texas</option>
                <option value="All Locations">All Locations</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#566356] absolute right-1 top-2 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          {/* Property Type */}
          <div className="flex flex-col gap-1 lg:px-4">
            <label htmlFor="search-type" className="text-[11px] font-medium text-[#566356] flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#0E170E]" aria-hidden="true" />
              <span>Property Type</span>
            </label>
            <div className="relative">
              <select
                id="search-type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-semibold text-[#0E170E] py-1.5 pr-8 focus:outline-none cursor-pointer"
              >
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Land">Land</option>
                <option value="Office">Office</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#566356] absolute right-1 top-2 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-1 lg:px-4">
            <label htmlFor="search-price" className="text-[11px] font-medium text-[#566356] flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#0E170E]" aria-hidden="true" />
              <span>Price Range</span>
            </label>
            <div className="relative">
              <select
                id="search-price"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-semibold text-[#0E170E] py-1.5 pr-8 focus:outline-none cursor-pointer"
              >
                <option value="Any">Any Price</option>
                <option value="$500K - $1M">$500K - $1M</option>
                <option value="$1M - $2M">$1M - $2M</option>
                <option value="$2M - $5M">$2M - $5M</option>
                <option value="$5M+">$5M+</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#566356] absolute right-1 top-2 pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          {/* Rooms */}
          <div className="flex flex-col gap-1 lg:px-4 last:lg:pr-0">
            <label htmlFor="search-rooms" className="text-[11px] font-medium text-[#566356] flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#0E170E]" aria-hidden="true" />
              <span>Rooms</span>
            </label>
            <div className="relative">
              <select
                id="search-rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                className="w-full appearance-none bg-transparent text-sm font-semibold text-[#0E170E] py-1.5 pr-8 focus:outline-none cursor-pointer"
              >
                <option value="Any">Any Rooms</option>
                <option value="1-2 Rooms">1-2 Rooms</option>
                <option value="3-4 Rooms">3-4 Rooms</option>
                <option value="5+ Rooms">5+ Rooms</option>
              </select>
              <ChevronDown className="w-4 h-4 text-[#566356] absolute right-1 top-2 pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Row 3: Filter Chips & Search Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#DCE8D5]/60">
          <div className="flex items-center gap-2 flex-wrap">
            {TYPE_CHIPS.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                active={typeChip === chip}
                onClick={() => setTypeChip(chip)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C8EFAE] hover:bg-[#A9E18A] text-[#0E170E] text-xs font-semibold tracking-wide inline-flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer min-h-[44px]"
          >
            <span>Search Property</span>
            <Search className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Polite Live Region Feedback */}
        {resultCountMessage && (
          <div
            role="status"
            aria-live="polite"
            className="mt-3 text-xs text-[#566356] bg-[#F3F9EE] px-4 py-2 rounded-xl border border-[#DCE8D5]"
          >
            {resultCountMessage}
          </div>
        )}
      </form>
    </div>
  );
};
