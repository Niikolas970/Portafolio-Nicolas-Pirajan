import { Gamepad2, Stethoscope, Newspaper, Layers } from "lucide-react";
import oralLuanmImg from "../assets/images/Oral-Luanm-Proyect.png";
import blogScrumImg from "../assets/images/Blog-Scrum.png";
import videoPokeApi from "../assets/videos/video-pokemon.mp4"

const projects = [
    {
        id: 1,
        title: "Pokédex Interactiva",
        description:
            "Aplicación web que consume la PokéAPI para mostrar información detallada de cada Pokémon, con búsqueda y versiones shiny.",
        image: null,
        video: videoPokeApi,
        icon: Gamepad2,
        techs: ["HTML", "CSS", "JavaScript", "API REST"],
        github: "https://github.com/Niikolas970/proyecto-pokedex",
        demo: "https://niikolas970.github.io/proyecto-pokedex/",
    },
    {
        id: 2,
        title: "Oral Luanm — Registro Dental",
        description:
            "Interfaz web para el registro de pacientes de una clínica dental, con formularios validados y enfoque en accesibilidad.",
        image: oralLuanmImg,
        video: null,
        icon: Stethoscope,
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/larum99/Oral-LUANM-frontend",
        demo: "https://niikolas970.github.io/Proyecto-Oral-Luanm/",
    },
    {
        id: 3,
        title: "Blog Top 10 Colombia",
        description:
            "Proyecto colaborativo donde desempeñé el rol de Scrum Master, coordinando tareas y gestionando el repositorio del equipo.",
        image: blogScrumImg,
        video: null,
        icon: Newspaper,
        techs: ["HTML", "CSS", "Git", "Scrum"],
        github: null,
        demo: "https://niikolas970.github.io/TIFC2DEV-SDPF6-Simulaci-n-de-Proyecto-SCRUM/index.html",
    },
    {
        id: 4,
        title: "Portafolio Personal",
        description:
            "Portafolio con arquitectura modular en HTML, CSS y JavaScript, con un modo profesional y un modo aventura tipo RPG.",
        image: null,
        video: null,
        icon: Layers,
        techs: ["HTML", "CSS", "JavaScript"],
        github: null,
        demo: null,
    },
];

export default projects;
