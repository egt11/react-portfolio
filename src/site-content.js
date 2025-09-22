// portfolio sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export { Hero, About, Projects, Contact };

export const heroData = {
    name: "Eddhan",
    button: "know more",
};

export const aboutData = {
    title: "about me",
    description:
        "I believe that learning happens through action. By building projects from the ground up, I gain real experience, deepen my understanding, and continue moving toward the developer I aspire to become.",
    button: "view resume",
    image: "/images/about_image.jpg",
    alt: "picture of me",
};

export const projectsData = {
    title: "projects",
    projects: [
        {
            id: 0,
            name: "trello clone",
            description:
                "Developed a clone of Trello, a popular project management tool to enhance javascript skills. Implemented drag-and-drop features for tasks and used localStorage to save user data even after page reloads.",
            image: "/images/projects/project_trello.jpg",
            alt: "project image",
            button: "view demo",
            href: "https://egt11.github.io/project-trello/"
        },
        {
            id: 1,
            name: "full-stack bookstore e-commerce site",
            description:
                "Built a full-stack e-commerce website with HTML, CSS, and JavaScript on the front end, and PHP + MySQL on the backend. Includes a book search feature using the Google Books API and an admin panel for managing products and users.",
            image: "/images/projects/project_e-comm.jpg",
            alt: "project image",
            button: "view demo",
            href: "#"
        },
    ],
};
