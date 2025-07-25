import Link from "next/link";
import CareerTimeline from "./components/careerTimeline";

const navigation = [
  { name: "Projects & Skills", href: "/projects-skills" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/Kalimullah-Khan-Resume.pdf" },
];
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md duration-200 text-zinc-400 hover:text-white"
              target={index === 2 ? "_blank" : "_self"}
              rel={index === 2 ? "noopener noreferrer" : ""}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white/90 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Kalimullah Khan
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in w-screen max-w-4xl">
        {/* <h2 className="text-sm text-white ">
        Software Engineer Level 2 at<br/> Priceline.com (Booking Holdings)
        </h2> */}
        <CareerTimeline/>
      </div>
    </div>
  );
}
