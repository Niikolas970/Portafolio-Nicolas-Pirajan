// 1. IMPORTACIONES DE ICONOS
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
    SiJavascript,
    SiReact,
    SiSass,
    SiBootstrap,
    SiSpring,
    SiMysql,
    SiGit,
    SiGithub, // <-- Cambiado a este que es 100% compatible y exportado en todas las versiones
    SiFigma,
} from "react-icons/si";

import { FaTerminal, FaUsers, FaCode, FaServer, FaToolbox, FaJava } from "react-icons/fa6"; 

// 2. CATEGORÍAS PRINCIPALES
export const techCategories = [
    {
        id: "frontend",
        title: "Frontend",
        icon: FaCode,
    },
    {
        id: "backend",
        title: "Backend",
        icon: FaServer,
    },
    {
        id: "tools",
        title: "Herramientas & Otros",
        icon: FaToolbox,
    },
];

// 3. LISTADO DE TECNOLOGÍAS
export const technologies = [
    // --- Frontend ---
    { name: "HTML5", icon: FaHtml5, category: "frontend" },
    { name: "CSS3", icon: FaCss3, category: "frontend" },
    { name: "JavaScript", icon: SiJavascript, category: "frontend" },
    { name: "React", icon: SiReact, category: "frontend" },
    { name: "Sass", icon: SiSass, category: "frontend" },
    { name: "Bootstrap", icon: SiBootstrap, category: "frontend" },

    // --- Backend ---
    { name: "Java", icon: FaJava, category: "backend" },
    { name: "Spring Boot", icon: SiSpring, category: "backend" },
    { name: "MySQL", icon: SiMysql, category: "backend" },

    // --- Herramientas ---
    { name: "Git", icon: SiGit, category: "tools" },
    { name: "GitHub", icon: SiGithub, category: "tools" },
    { name: "VS Code", icon: BiLogoVisualStudio, category: "tools" }, // <-- Apunta al icono clásico de VS
    { name: "Figma", icon: SiFigma, category: "tools" },
    { name: "Terminal", icon: FaTerminal, category: "tools" },
    { name: "Trabajo en Equipo", icon: FaUsers, category: "tools" },
];