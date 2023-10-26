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
  magicimages,
  threejs,
  waelmohamed,
  quickrWeb,
  thewildoasis,
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
      "Successfully managed the project from inception to delivery, creating a user-friendly interface with good user experience for our product startup.",
      "Developed and executed project plans, timelines, and schedules, resulting in timely delivery of the application.",
      "Coordinated with the development team to ensure that the application was built according to specifications, delivering a fully functional product on schedule.",
      "Improved the overall performance of the application by 20% through implementing optimized code, improving user interface design, and ensuring the responsiveness of the application across multiple devices and platforms.",
      "Developed a user-friendly profile page, a responsive landing page and a login and registration page.",
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
    name: "Magic Images",
    description:
      "Magic Images is a web app that uses OpenAI's DALL-E API to generate unique images based on user input. Users can create and share images with the community using the MERN stack, along with additional technologies like TailwindCSS, Cloudinary, and FileSaver.",
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
        name: "mern",
        color: "pink-text-gradient",
      },
    ],
    image: magicimages,
    source_code_link: "https://github.com/NourWaell/magic-images",
    demo: "https://magic-images.vercel.app/",
  },
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
  {
    name: "Quickr",
    description:
      "Quickr is a technology company specializing in NFC solutions. We create NFC-enabled smart cards for secure data exchange in various industries, such as finance, healthcare, and hospitality. Our mission is to enhance convenience and security through innovative NFC technology, transforming how businesses and individuals interact.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: quickrWeb,
    source_code_link: "#",
    demo: "https://quickr.digital/",
  },
  {
    name: "The Wild Oasis",
    description:
      "The Wild Oasis is a comprehensive web application template designed to facilitate the management of bookings, stays, cabins, and guest information within a serene and picturesque oasis. Built on a foundation of modern technologies, this project leverages the power of Supabase for secure data storage and React for a seamless user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "reactquery",
        color: "green-text-gradient",
      },
    ],
    image: thewildoasis,
    source_code_link: "https://github.com/NourWaell/the-wild-oasis",
    demo: "https://the-wild-oasis-hotels.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
