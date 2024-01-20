import Image from "next/image";

const Skills = () => {
  const technologies = [
    { name: "React", logo: "react-logo.svg" },
    { name: "Redux", logo: "redux-logo.svg" },
    { name: "Next.Js", logo: "next-js.svg" },
    { name: "Gatsby", logo: "gatsby-logo.svg" },
    { name: "Remix", logo: "Remix-logo.svg" },
    { name: "GraphQL", logo: "graphql-logo.svg" },
    { name: "Typescript", logo: "typescript-logo.svg" },
    { name: "React Testing Library", logo: "/react-testing-library.png" },
    { name: "Jest", logo: "/jest-logo.png" },
    { name: "Headless CMS", logo: "strapi-logo.svg" },
    { name: "Tailwind", logo: "tailwind-logo.svg" },
    { name: "Styled Components", logo: "styled-components-logo.svg" },
    { name: "Sass", logo: "sass-logo.svg" },
    { name: "Bootstrap", logo: "bootstrap-logo.svg" },
    { name: "HTML", logo: "html-logo.svg" },
    { name: "CSS", logo: "css-logo.svg" },
    { name: "Javascript", logo: "javascript-logo.svg" },
    { name: "Accessibility", logo: "accessibility-logo.svg" },
    { name: "Performance Optimization",logo: "performance-logo.svg" },
    { name: "GIT", logo: "git-logo.svg" },
  ];

  const works = [
    { name: "Responsive design" },
    { name: "Agile methodologies" },
   

  ]


  return technologies.map((skill, index) => (
    <div key={index} className="text-center ">
      <div className="skill-item w-[100px] h-[100px] mx-auto">
        <Image
          src={skill.logo}
          alt={`${skill.name} logo`}
          width={100}
          height={100}
          className={`h-[100px] ${skill.name === "Next.Js" && 'bg-slate-50 rounded-full'}`}
        />
      </div>
      <p className="mt-3">{skill.name}</p>
    </div>
  ));
};

export default Skills;
