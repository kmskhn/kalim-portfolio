"use client";

import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { ExternalLink, Eye } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Skills from "../components/skills";

export default function ProjectsPage() {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const views = {};

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      slug: "priceline-c3",
      date: "July 2022 - Present",
      company: "Priceline.com | Software Engineer - Level 2",
      title: "C3Assist - Micro Frontend App.",
      techStack: "Remix, Graph QL, CSS-in-JS Styled Components.",
      description: "A customer service application for Priceline.com",
    },
    {
      slug: "axiomio-it-services",
      date: "July 2021 - July 2022",
      company: "AxiomIO IT Services Pvt Ltd | Software Engineer",
      title: "MIBL-POSP Website and Admin Portal - SPA",
      techStack: "React, Redux, Redux-Thunk, Sass, Bootstrap 4.",
      description:
        "Webiste and Admin portal for onborading and management of the pool of salespersons.",
    },
    {
      slug: "raw-engineering-inc-inseego",
      date: "Sept 2019 – July 2021",
      company: "Raw Engineering Inc | Application Engineer",
      title: "Inseego.com",
      techStack:
        "React, Javascript, Next.Js, React-Bootstrap, Sass, Accessibility, ADA compliance, ContentStack CMS.",
      description: "Webiste with SSG and SSR for Inseego.com",
    },
    {
      slug: "raw-engineering-inc-pella-redesign",
      date: "Sept 2019 – July 2021",
      company: "Raw Engineering Inc | Application Engineer",
      title: "Pella Re-Design (3 websites)",
      techStack:
        "React, Javascript, Gatsby, Accessibility, ADA compliance, CSS, Contentstack Headless CMS.",
      description:
        "Webistes and CMS management for Pella.com and Pella at Lowes",
    },
    // Add more projects following the same structure
  ];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-zinc-400">
            Why do software engineers prefer dark mode? Because light attracts
            bugs. 😉
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-x-8 lg:gap-y-10 justify-center">
          <Skills />
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            A few projects are part of my professional work, while others are
            personal endeavors.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {projects.map((project, index) => {
            return (
              <Card key={index}>
                <article className="flex flex-col justify-between relative w-full h-full p-4 md:p-8">
                  <div>
                    <div className="flex justify-between">
                      <div className="text-xs text-zinc-600">
                        <span>{project.company}</span>
                      </div>
                    </div>
                    <h2
                      id="project-post"
                      className="flex justify-between mt-4 text-xl font-bold text-zinc-400 group-hover:text-white sm:text-xl font-display"
                    >
                      {project.title}
                      {project.link && (
                        <Link href={project.link ?? ""} target="_blank">
                          <ExternalLink
                            size={20}
                            color="#22d3ee"
                            strokeWidth={1.75}
                          />
                        </Link>
                      )}
                    </h2>
                    <p className="text-sm leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.description}
                    </p>
                  </div>
                  <p className="mt-5 leading-8 duration-150 text-white">
                    Techstack : {project.techStack}
                  </p>
                </article>
              </Card>
            );
          })}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
