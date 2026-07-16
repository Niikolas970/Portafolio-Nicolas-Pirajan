import {
    FaCode,
    FaServer,
    FaToolbox,
} from "react-icons/fa6";

const techCategories = [
    {
        id: "frontend",
        title: "Frontend",
        icon: FaCode,
        direction: "left",
        speed: 28,
    },
    {
        id: "backend",
        title: "Backend",
        icon: FaServer,
        direction: "right",
        speed: 32,
    },
    {
        id: "tools",
        title: "Herramientas",
        icon: FaToolbox,
        direction: "left",
        speed: 24,
    },
];

export default techCategories;