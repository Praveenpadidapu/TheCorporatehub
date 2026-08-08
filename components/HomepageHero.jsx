"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./HomepageHero.css";
import { BsGraphDownArrow } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { IoDocumentOutline, IoSearch } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { RiCertificate2Line } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";


export default function HomepageHero() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const categories = [
        { name: "Business Registration", slug: "business-registration", icon: <IoDocumentOutline /> },
        { name: "Intellectual Property", slug: "intellectual-property", icon: <LuBrain /> },
        { name: "Accounting & Taxation", slug: "accounting-taxation", icon: <MdAttachMoney /> },
        { name: "Corporate Compliance", slug: "corporate-compliance", icon: <GrGroup /> },
        { name: "Business Growth", slug: "business-growth", icon: <BsGraphDownArrow /> },
        { name: "Licenses & Certifications", slug: "licenses-certifications", icon: <RiCertificate2Line /> }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Find closest category or fallback to business registration
            const queryLower = searchQuery.toLowerCase();
            const matched = categories.find(c => 
                c.name.toLowerCase().includes(queryLower) || 
                queryLower.includes(c.slug.replace('-', ' '))
            );
            if (matched) {
                router.push(`/services/${matched.slug}`);
            } else {
                router.push(`/services/business-registration`);
            }
        }
    };

    return (
        <div className="homepage-hero">
            <h1>Corporate Hub</h1>
            <form className="search-container" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Company / Director / Trademark / Patent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button" aria-label="Search">
                    <IoSearch />
                </button>
            </form>
            <div className="services">
                {categories.map((category) => (
                    <Link href={`/services/${category.slug}`} key={category.name} className="category-link">
                        <div 
                            className="category"
                            onClick={() => router.push(`/services/${category.slug}`)}
                        >
                            <div className="icon">{category.icon}</div>
                            <p>{category.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};