import { Gamepad2, Stethoscope, Newspaper, Layers } from "lucide-react";
import oralLuanmImg from "../assets/images/Oral-Luanm-Proyect.png";
import blogScrumImg from "../assets/images/Blog-Scrum.png";
import videoPokeApi from "../assets/videos/video-pokemon.mp4"

const projects = [
    {
        id: 1,
        title: "projects.items.pokedex.title",
        description: "projects.items.pokedex.description",
        image: null,
        video: videoPokeApi,
        icon: Gamepad2,
        techs: ["HTML", "CSS", "JavaScript", "API REST"],
        github: "https://github.com/Niikolas970/proyecto-pokedex",
        demo: "https://niikolas970.github.io/proyecto-pokedex/",
    },
    {
        id: 2,
        title: "projects.items.oralLuanm.title",
        description: "projects.items.oralLuanm.description",
        image: oralLuanmImg,
        video: null,
        icon: Stethoscope,
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/larum99/Oral-LUANM-frontend",
        demo: "https://niikolas970.github.io/Proyecto-Oral-Luanm/",
    },
    {
        id: 3,
        title: "projects.items.blog.title",
        description: "projects.items.blog.description",
        image: blogScrumImg,
        video: null,
        icon: Newspaper,
        techs: ["HTML", "CSS", "Git", "Scrum"],
        github: "https://github.com/Niikolas970/TIFC2DEV-SDPF6-Simulaci-n-de-Proyecto-SCRUM.git",
        demo: "https://niikolas970.github.io/TIFC2DEV-SDPF6-Simulaci-n-de-Proyecto-SCRUM/index.html",
    },
    {
        id: 4,
        title: "projects.items.portfolio.title",
        description: "projects.items.portfolio.description",
        image: null,
        video: null,
        icon: Layers,
        techs: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Niikolas970/Portafolio-Nicolas-Pirajan.git",
        demo: null,
    },
];

export default projects;
