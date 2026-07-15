// technologies.js
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { FaJava, FaTerminal, FaUsers } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";

import {
    SiJavascript,
    SiReact,
    SiSass,
    SiBootstrap,
    SiSpring,
    SiMysql,
    SiGit,
    SiGithub,
    SiFigma,
    SiIntellijidea,
    SiScrumalliance,
    SiGnubash,
} from "react-icons/si";

const technologies = [

    // ===========================
    // Frontend
    // ===========================

    {
        id: 1,
        name: "HTML5",
        icon: FaHtml5,
        category: "frontend",
    },
    {
        id: 2,
        name: "CSS3",
        icon: FaCss3,
        category: "frontend",
    },
    {
        id: 3,
        name: "JavaScript",
        icon: SiJavascript,
        category: "frontend",
    },
    {
        id: 4,
        name: "React",
        icon: SiReact,
        category: "frontend",
    },
    {
        id: 5,
        name: "SCSS",
        icon: SiSass,
        category: "frontend",
    },
    {
        id: 6,
        name: "Bootstrap",
        icon: SiBootstrap,
        category: "frontend",
    },

    // ===========================
    // Backend
    // ===========================

    {
        id: 7,
        name: "Java",
        icon: FaJava,
        category: "backend",
    },
    {
        id: 8,
        name: "Spring Boot",
        icon: SiSpring,
        category: "backend",
        learning: true,
    },
    {
        id: 9,
        name: "MySQL",
        icon: SiMysql,
        category: "backend",
    },

    // ===========================
    // Herramientas
    // ===========================

    {
        id: 10,
        name: "Git",
        icon: SiGit,
        category: "tools",
    },
    {
        id: 11,
        name: "GitHub",
        icon: SiGithub,
        category: "tools",
    },
    {
        id: 12,
        name: "VS Code",
        icon: BiLogoVisualStudio,
        category: "tools",
    },
    {
        id: 13,
        name: "Figma",
        icon: SiFigma,
        category: "tools",
    },
    {
        id: 14,
        name: "Terminal",
        icon: FaTerminal,
        category: "tools",
    },
    {
        id: 15,
        name: "Trabajo en Equipo",
        icon: FaUsers,
        category: "tools",
    },
    {
        id: 16,
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        category: "tools",
    },
    {
        id: 17,
        name: "SCRUM",
        icon: SiScrumalliance,
        category: "tools",
    },
    {
        id: 18,
        name: "Git Bash",
        icon: SiGnubash,
        category: "tools",
    },

];

export default technologies;