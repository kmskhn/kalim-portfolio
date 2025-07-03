"use client";
import React from "react";
import Link from "next/link";

const comapniesList = [
  // {
  //   comapny: "Inception AI G42",
  //   content: "Tailwind is a utility-first CSS framework.",
  //   year: "April '25  –  present",
  //   designation: "Senior Frontend Engineer",
  // },
  {
    comapny: "Priceline.com (Booking Holdings  • Fortune 500)",
    url:'https://www.linkedin.com/company/priceline-com/',
    content: "Developed AI tools and microfrontend platforms to streamline customer service operations like refunds, cancellations, and airfare handling, enhancing agent efficiency and response times.",
    year: "Jul '22  –  April '25",
    designation: "Software Engineer Level 2",
  },
  {
    comapny: "AxiomIO",
        url:'https://www.linkedin.com/company/axiomio/',

    content: "Led front-end development of a fintech onboarding portal, integrating Stripe for payments and optimizing KYC and payout workflows",
    year: "Jul '21  –  Jul '22",
    designation: "Software Engineer",
  },
  {
    comapny: "Raw Engineering INC",
    url:'https://www.linkedin.com/company/raw-engineering/',
    content: "Built ADA-compliant, high-performance marketing websites using React, Gatsby, and Contentstack CMS, focusing on accessibility, SEO, and reusability.",
    year: "May '19  –  Jul '21",
    designation: "Application Engineer",
  },
  {
    comapny: "Mumbai University",
    url:'',
    content: "CGPA: 7.65 / 10",
    year: "June '16  –  June '18",
    designation: "Master's In Computer Science",
  },
];

import { useState } from "react";

const AccordionItem = ({ comapny, url, designation,  year, content, isOpen, onClick }) => (
  <li className="border-b border-gray-200 dark:border-gray-700 w-full">
    <button
      onClick={onClick}
      className="w-full flex justify-between p-4 text-left text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800/30 transition"
      aria-expanded={isOpen}
    >

      <p className="text-zinc-400">{comapny}</p>
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
      <div className="p-4 text-gray-700 dark:text-gray-300">{content}</div>
    </div>
  </li>
);

function CareerTimeline({ items = comapniesList }) {
 const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ul className="w-full mx-auto rounded-md list-none p-0 m-0">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          comapny={item.comapny}
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
