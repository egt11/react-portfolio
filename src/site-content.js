// portfolio sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export { Hero, About, Projects, Contact };

export const heroData = {
    name: "Eddhan",
    button: "Know more"
}

export const aboutData = {
    title: "about me",
    description: "I believe the best way to learn is by getting your hands dirty and building real projects. Every challenge is a chance to grow, and I’m always excited to turn ideas into working solutions."
}

export const projectsData = {
    title: "projects",
    projects : [
        {id: 0, name: "trello clone", description: "Developed a clone of Trello, a popular project management tool to enhance javascript skills. Implemented drag-and-drop features for tasks and used localStorage to save user data even after page reloads."},
        {id: 1, name: "full-stack bookstore e-commerce site", description: "Developed a clone of Trello, a popular project management tool to enhance javascript skills. Implemented drag-and-drop features for tasks and used localStorage to save user data even after page reloads."},
    ]
}