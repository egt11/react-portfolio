// portfolio sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import { RiFacebookBoxFill, RiGithubFill, RiLinkedinFill, RiTwitterXFill, RiTwitterXLine } from "@remixicon/react";

export { Hero, About, Projects, Contact, Footer };

// hero section
export const heroData = {
    name: "Eddhan",
    button: "know more",
};

// about section
export const aboutData = {
    title: "about me",
    description:
        "I believe that learning happens through action. By building projects from the ground up, I gain real experience, deepen my understanding, and continue moving toward the developer I aspire to become.",
    button: "view resume",
    image: "images/about_image.webp",
    alt: "picture of me",
};

// projects section
export const projectsData = {
    title: "projects",
    projects: [
        {
            id: 0,
            name: "trello clone",
            description:
                "Developed a clone of Trello, a popular project management tool, with drag-and-drop feature for tasks and localStorage to save user data.",
            image: "images/projects/project_trello.webp",
            alt: "project image",
            button: "view demo",
            href: "https://egt11.github.io/project-trello/"
        },
        {
            id: 1,
            name: "full-stack bookstore e-commerce site",
            description:
                "Built a full-stack e-commerce website with HTML, CSS, and JavaScript on the front end, and PHP + MySQL on the backend. Includes a book search feature using the Google Books API and an admin panel for managing products and users.",
            image: "images/projects/project_e-comm.webp",
            alt: "project image",
            button: "view demo",
            href: "#"
        },
    ],
};

// icons
export const icons = {
    socials: [
        { name: "linkedin", icon: RiLinkedinFill, link: "www.linkedin.com/in/eddhan-gabryell-tan-47646536b" },
        { name: "facebook", icon: RiFacebookBoxFill, link: "https://www.facebook.com/eddhanpoinks" },
        { name: "github", icon: RiGithubFill, link: 'https://github.com/egt11' }
    ],
    techStack: [{}]
}

// animations
export const fadeIn = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

export const fadeInStagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.7 } }
}

export const fadeInStaggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

export const fadeInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
}

export const fadeInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 }
}

