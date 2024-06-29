import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  Carrental,
  News,
  Banksy,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Graphics Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Web Developer Intern",
    companyName: "Code Clause",
    icon: threejs,
    iconBg: "#fff",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Resulting in a 25% increase in conversion rate and a $500K boost in monthly revenue.",
      "Masterfully executed projects leveraging ReactJS and NodeJS, guaranteeing fast responsiveness",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Designer Intern",
    companyName: "Digital Corsel",
    icon: figma,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Design web applications using Figma and other related technologies.",
      "Collaborating with cross-functional teams including developers, product managers, and other developers to create high-quality products.",
      "Developed and executed a comprehensive social media ad campaign resulting in a 40 % increase in customer engagement.",
      "A 25 % boost in website traffic within the first month.",
    ],
  },
  {
    title: "Web Designer Intern",
    companyName: "The Factitious",
    icon: figma,
    iconBg: "#fff",
    date: "Sep 2021 - Oct 2021",
    points: [
      "Adhered to a relentless pursuit of innovation by consistently staying of 4.0 generations of cutting-edge web technologies.",
      "I acquired invaluable knowledge and expertise in theWeb Design,Web Research, and the art of effective Team Management.",
      "Design web applications using Figma and other related technologies.",
      "Collaborating with cross-functional teams including developers, product managers, and other developers to create high-quality products.",
    ],
  },
  {
    title: "Web Developer Intern",
    companyName: "LetsGrowMore",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Aug 2021 - Sep 2021",
    points: [
      "In this Internship, my role is to develop the website for our client as per the requirements.",
      "I acquired invaluable knowledge and expertise in the HTML, CSS, Bootstrap, JavaScript, React Js, etc.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects: TProject[] = [
  {
    name: "Car Rental",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "API Integration",
        color: 'white-text-gradient',
      }
    ],
    image: Carrental,
    sourceCodeLink: "https://modern-car-rental.netlify.app/",
  },
  {
    name: "News Personalized Web App",
    description:
      "Implemented efficient data fetching using Redux, reducing API call latency by 35%. User can able to see latest news as per there location with weather API features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: News,
    sourceCodeLink: "https://github.com/rohitdubey1352/theguardian_news__website",
  },
  {
    name: "Banksy",
    description:
      "Our system is designed to allow users to access there account details with reliability & ensuring a 99.9 % accuracy. User authentication with an impressive 99.9 % accuracy rate, users with seamless Login & Logout.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Banksy,
    sourceCodeLink: "https://github.com/rohitdubey1352/Banksy.github.io",
  },
  
];

export { services, technologies, experiences, projects };
