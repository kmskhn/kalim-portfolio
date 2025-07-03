import { Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation = () => {
  const navigation = [
    { name: "Projects & Skills", href: "/projects-skills" },
    { name: "Contact", href: "/contact" },
    // { name: "Skills", href: "/skills" },
    { name: "Resume", href: "/Kalimullah-Khan-Resume.pdf" },
  ];

  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {navigation.map((navitem, index) => (
              <Link
                key={navitem.name}
                href={navitem.href}
                className={`"duration-200 text-zinc-400 hover:text-white"`}
                target={index === 2 ? "_blank" : "_self"}
                rel={index === 2 ? "noopener noreferrer" : ""}
              >
                {navitem.name}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-white"
          >
            <Home size={20} color="#22d3ee" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </header>
  );
};
