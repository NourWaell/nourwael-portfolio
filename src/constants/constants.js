import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  git,
  docker,
  quickr,
  landing,
  future_dashboard,
  hoobank,
  threejs,
  waelmohamed,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-End Specialized",
    icon: backend,
  },
  {
    title: "And More To Come...",
    icon: creator,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nextjs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Quickr",
    icon: quickr,
    iconBg: "#383E56",
    date: "October 2022 - February 2023",
    points: [
      "Translated Figma designs to visually appealing and functional user interfaces using React JS.",
      "Worked in a software development life cycle with a team of 6+ engineers to obtain the full logic for our React app.",
      "Contributed significantly in the maintenance of 50-60% of the front-end codebase, including the implementation of new features.",
      "Played a key role in a team re-creating a website from a mobile application, turning 50 pages into 4 web pages through 40 iterations to ensure a high level of quality and user experience.",
      "Led the creation of 1 landing page, user profile page, registration and sign-in forms with their authentication logic and fetching user's data from our API to display in user's profile.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Highly skilled in bringing Figma designs to life with React JS, Nour has led the development of key features and contributed significantly to the front-end codebase. An excellent candidate for any team looking for talent and dedication in a Frontend Software Engineering position.",
    name: "Wael Mohamed",
    designation: "Founder",
    company: "Quickr",
    image: waelmohamed,
  },
];

const projects = [
  {
    name: "Fundamentals Of Vanilla",
    description:
      "Landing page that focuses on mastering the fundamentals of vanilla front-end basics without using frameworks, it contains a lot of cool css and javascript features with a simple CRUD system",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/NourWaell/Dynamic-Landing-Page",
    demo: "https://static-template-puce.vercel.app/",
  },
  {
    name: "Future Dashboard",
    description:
      "Admin Dashboard that enables users to view stats, charts, their customers and admins list through a very clean dynamic web application with many great features inside.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: future_dashboard,
    source_code_link: "https://github.com/NourWaell/future_dashboard",
    demo: "https://future-dashboard.vercel.app/",
  },
  {
    name: "Modern Bank",
    description:
      "A simple react js app that focuses on creating a landing page for a futuristic bank and mastering tailwindcss layouts creations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/NourWaell/bank_modern_app",
    demo: "https://bank-modern-app-lac.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
