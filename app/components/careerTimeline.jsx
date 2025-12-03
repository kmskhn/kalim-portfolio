"use client";
import React from "react";
import Link from "next/link";

const companiesList = [
  {
    company: "Imagine Learning (LearningMate Payroll)",
    url: "https://www.linkedin.com/company/imagine-learning/about/",
    content: [
      "Set up the Vite + React + TypeScript + Vitest stack and defined frontend standards.",
      "Designed an embeddable AI student companion widget using Shadow DOM for isolation.",
      "Optimized bundle size with lazy loading, code-splitting, and removal of heavy dependencies.",
    ],
    year: "Sept '25 – present",
    designation: "Senior Software Engineer",
  },
  {
    company: "Inception AI (G42), UAE",
    url: "https://www.linkedin.com/company/inception-g42-company/about/",
    content: [
      "Built an AI-powered meetings platform with real-time audio/video and calendar sync.",
      "Developed an AI summarizer that cut post-meeting review time by ~90%.",
      "Added live document insights and a RAG chat assistant, optimizing chat performance with virtualization.",
    ],
    year: "Apr '25 – Sept '25",
    designation: "Senior Software Engineer",
  },
  {
    company: "Priceline.com (Booking Holdings • Fortune 500)",
    url: "https://www.linkedin.com/company/priceline-com/",
    content: [
      "Built Penny, an AI chat travel assistant for bookings, refunds, and itinerary changes.",
      "Helped reduce agent-assisted queries by 65% and average resolution time by 45%, driving $12M+ yearly savings.",
      "Developed an AI IVR system with ChatGPT-4 and Amazon Connect to automate calls and cut handling time.",
    ],
    year: "Jul '22 – April '25",
    designation: "Software Engineer Level 2",
  },
  {
    company: "AxiomIO",
    url: "https://www.linkedin.com/company/axiomio/",
    content: [
      "Led frontend for a fintech onboarding and admin portal for 1000+ salespersons.",
      "Integrated OCR-based KYC and Stripe for payments and subscriptions.",
      "Delivered a responsive React + Redux UI integrated with REST APIs.",
    ],
    year: "Jul '21 – Jul '22",
    designation: "Software Engineer",
  },
  {
    company: "Raw Engineering INC",
    url: "https://www.linkedin.com/company/raw-engineering/",
    content: [
      "Built ADA-compliant marketing sites using React, Gatsby, and Contentstack CMS.",
      "Developed 100+ responsive pages with SSG/SSR for performance and SEO.",
      "Improved Core Web Vitals and accessibility using Lighthouse and WCAG audits.",
    ],
    year: "May '19 – Jul '21",
    designation: "Application Engineer",
  },
  {
    company: "Mumbai University",
    url: "",
    content: [
      "Master's in Computer Science with CGPA 7.65 / 10.",
    ],
    year: "June '16 – June '18",
    designation: "Master's in Computer Science",
  },
];



import { useState } from "react";

const AccordionItem = ({ company, url, designation,  year, content, isOpen, onClick }) => (
  <li className="border-b border-gray-200 dark:border-gray-700 w-full">
    <button
      onClick={onClick}
      className="w-full flex justify-between p-4 text-left text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800/30 transition"
      aria-expanded={isOpen}
    >

      <p className="text-lg font-semibold text-[#22d3ee]">{company}</p>

      {/* <Link href={url} target="_blank">{comapny}</Link> */}
      <div className="flex items-center gap-2">
        <p className="text-zinc-400 font-thin"><em>{designation}</em> | <span>{year}</span></p>
      <svg
        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
      </div>
      
    </button>
    <div
  className={`overflow-hidden transition-[max-height] duration-300 ${
    isOpen ? "max-h-96" : "max-h-0"
  }`}
>
  <div className="p-4">
    <ul className="list-disc pl-5 space-y-1 text-sm text-[#22d3ee]/70">
      {content.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
</div>

  </li>
);

function CareerTimeline({ items = companiesList }) {
 const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ul className="w-full mx-auto rounded-md list-none p-0 m-0">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          company={item.company}
          url={item.url}
          year={item.year}
          designation={item.designation}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => toggle(index)}
        />
      ))}
    </ul>
  );
};


export default CareerTimeline;
