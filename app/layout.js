import { Inter } from 'next/font/google'
import LocalFont from "@next/font/local";
import './globals.css'
import Particles from "./components/particles";

export const metadata = {
  title: 'Kalim Khan Portfolio',
  description: 'A Software Engineer, I work with a team of talented developers to build and maintain high-performance web applications using Javascript, React,Remix, Next, Gatsby, and Angular. I am flexible in terms of choice of technology and implementation, and passionate about understanding multiple aspects of building a software product.I have a M.Sc in Computer Science from Thakur College of Science & Commerce, where I gained a strong foundation in Web development. I also have multiple certifications in verified international academic qualifications issued by World Education Services. I am always eager to learn new skills and technologies, and to apply them to create innovative and user-friendly solutions. My goal is to leverage my web development expertise and contribute to the growth and success of Priceline and its customers.',
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
        {children}
      </body>
    </html>
  )
}
