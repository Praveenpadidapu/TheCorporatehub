"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import "./HomepageHero.css";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { IoDocumentOutline, IoSearch } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { RiCertificate2Line } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { FiX, FiChevronRight, FiCheckCircle } from "react-icons/fi";

const iconMap = {
  IoDocumentOutline: <IoDocumentOutline />,
  LuBrain: <LuBrain />,
  MdAttachMoney: <MdAttachMoney />,
  GrGroup: <GrGroup />,
  BsGraphUpArrow: <BsGraphUpArrow />,
  RiCertificate2Line: <RiCertificate2Line />
};

export default function HomepageHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchWrapperRef = useRef(null);
  const router = useRouter();

  const categories = [
    { name: "Business Registration", slug: "business-registration", icon: <IoDocumentOutline /> },
    { name: "Intellectual Property", slug: "intellectual-property", icon: <LuBrain /> },
    { name: "Accounting & Taxation", slug: "accounting-taxation", icon: <MdAttachMoney /> },
    { name: "Corporate Compliance", slug: "corporate-compliance", icon: <GrGroup /> },
    { name: "Business Growth", slug: "business-growth", icon: <BsGraphUpArrow /> },
    { name: "Licenses & Certifications", slug: "licenses-certifications", icon: <RiCertificate2Line /> }
  ];

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Compute live search suggestions based on query
  const suggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    const results = [];
    const addedSubIds = new Set();

    // 1. Search across main categories
    servicesData.forEach((cat) => {
      const catMatch =
        cat.title.toLowerCase().includes(query) ||
        cat.slug.toLowerCase().includes(query) ||
        (cat.shortDescription && cat.shortDescription.toLowerCase().includes(query)) ||
        (cat.accordionData?.about?.content && cat.accordionData.about.content.toLowerCase().includes(query));

      if (catMatch) {
        results.push({
          id: `cat-${cat.slug}`,
          type: "category",
          title: cat.title,
          categoryTitle: cat.title,
          categorySlug: cat.slug,
          iconName: cat.iconName,
          subtitle: cat.shortDescription || "Full corporate category services",
        });
      }
    });

    // 2. Search across subservices inside each category
    servicesData.forEach((cat) => {
      const subServices = cat.accordionData?.onClickServices?.subServices || [];
      const providedItems = cat.accordionData?.servicesWeProvide?.items || [];

      subServices.forEach((sub) => {
        if (addedSubIds.has(sub.id)) return;

        const nameMatch = sub.name?.toLowerCase().includes(query);
        const taglineMatch = sub.tagline?.toLowerCase().includes(query);
        const processMatch = sub.process?.some((p) => p.toLowerCase().includes(query));
        const docMatch = sub.documentsNeeded?.some((d) => d.toLowerCase().includes(query));

        // Also check if matches any item in "servicesWeProvide"
        const provMatch = providedItems.some(
          (p) => p.name?.toLowerCase().includes(query) || p.desc?.toLowerCase().includes(query)
        );

        if (nameMatch || taglineMatch || processMatch || docMatch || provMatch) {
          addedSubIds.add(sub.id);
          results.push({
            id: sub.id,
            type: "subservice",
            title: sub.name,
            subserviceId: sub.id,
            categoryTitle: cat.title,
            categorySlug: cat.slug,
            iconName: cat.iconName,
            subtitle: sub.tagline || `${cat.title} sub-service`,
            turnaround: sub.turnaround,
          });
        }
      });
    });

    return results.slice(0, 7); // Cap to top 7 most relevant results
  }, [searchQuery]);

  const handleSelectSuggestion = (item) => {
    setIsOpen(false);
    setSearchQuery("");
    if (item.type === "subservice" && item.subserviceId) {
      router.push(`/services/${item.categorySlug}?subservice=${item.subserviceId}`);
    } else {
      router.push(`/services/${item.categorySlug}`);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
      handleSelectSuggestion(suggestions[selectedIndex]);
      return;
    }

    if (suggestions.length > 0) {
      handleSelectSuggestion(suggestions[0]);
      return;
    }

    if (searchQuery.trim()) {
      const queryLower = searchQuery.toLowerCase();
      const matchedCat = categories.find(
        (c) =>
          c.name.toLowerCase().includes(queryLower) ||
          queryLower.includes(c.slug.replace("-", " "))
      );
      if (matchedCat) {
        router.push(`/services/${matchedCat.slug}`);
      } else {
        router.push(`/services/business-registration`);
      }
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="homepage-hero">
      <h1>Corporate Hub</h1>

      <div className="search-wrapper" ref={searchWrapperRef}>
        <form className="search-container" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Company / Director / Trademark / Patent / GST"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            aria-autocomplete="list"
          />

          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => {
                setSearchQuery("");
                setIsOpen(false);
              }}
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}

          <button type="submit" className="search-button" aria-label="Search">
            <IoSearch />
          </button>
        </form>

        {/* Live Search Autocomplete Dropdown */}
        {isOpen && searchQuery.trim().length > 0 && (
          <div className="search-dropdown" role="listbox">
            {suggestions.length > 0 ? (
              suggestions.map((item, idx) => (
                <div
                  key={item.id}
                  className={`search-dropdown-item ${idx === selectedIndex ? "active" : ""}`}
                  onClick={() => handleSelectSuggestion(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  role="option"
                  aria-selected={idx === selectedIndex}
                >
                  <div className="search-item-icon">
                    {iconMap[item.iconName] || <IoDocumentOutline />}
                  </div>

                  <div className="search-item-info">
                    <div className="search-item-top">
                      <span className="search-item-title">{item.title}</span>
                      <span className="search-item-category-badge">{item.categoryTitle}</span>
                    </div>
                    <p className="search-item-subtitle">{item.subtitle}</p>
                  </div>

                  <FiChevronRight className="search-item-arrow" />
                </div>
              ))
            ) : (
              <div className="search-no-results">
                <p>No direct matches found for &quot;{searchQuery}&quot;</p>
                <span>Press Enter to explore Business Registration services</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="services">
        {categories.map((category) => (
          <Link href={`/services/${category.slug}`} key={category.name} className="category-link">
            <div className="category">
              <div className="icon">{category.icon}</div>
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}