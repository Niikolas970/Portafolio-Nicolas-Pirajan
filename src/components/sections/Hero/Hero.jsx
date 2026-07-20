import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Download, Send, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReact, SiSpring, SiMysql, SiGit, SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import hero from "../../../data/hero";
import contact from "../../../data/contact";
import "./Hero.scss";

const ROLE_INTERVAL = 3200;
const ROLE_FADE = 300;

const TECH_ORBIT = [
    { name: "React", icon: SiReact, position: "top" },
    { name: "Java", icon: FaJava, position: "top-right" },
    { name: "Spring Boot", icon: SiSpring, position: "right" },
    { name: "MySQL", icon: SiMysql, position: "bottom" },
    { name: "Git", icon: SiGit, position: "bottom-left" },
    { name: "JavaScript", icon: SiJavascript, position: "left" },
];

function Hero() {
    const { t } = useTranslation();
    const roles = t(hero.roles, { returnObjects: true });
    const [indiceRol, setIndiceRol] = useState(0);
    const [visible, setVisible] = useState(true);
    const intervaloRef = useRef(null);

    useEffect(() => {
        const prefiereReducido = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefiereReducido) return;

        intervaloRef.current = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setIndiceRol((prev) => (prev + 1) % roles.length);
                setVisible(true);
            }, ROLE_FADE);
        }, ROLE_INTERVAL);

        return () => clearInterval(intervaloRef.current);
    }, [roles.length]);

    return (
        <section className="hero" id="hero">
            <div className="hero__fondo" aria-hidden="true"></div>

            <div className="hero__texto">
                <span className="hero__saludo">{t(hero.greeting)}</span>
                <h1 className="hero__nombre">{hero.name}</h1>
                <p className="hero__cargo">
                    <span
                        className="hero__rol"
                        style={{ opacity: visible ? 1 : 0 }}
                    >
                        {roles[indiceRol]}
                    </span>
                    <span className="hero__cursor" aria-hidden="true"></span>
                </p>
                <p className="hero__descripcion">{t(hero.description)}</p>

                <div className="hero__botones">
                    <a href={hero.cvUrl} download className="hero__btn hero__btn--primario">
                        <Download size={18} />
                        {t("hero.downloadCv")}
                    </a>

                    <a href="#contact" className="hero__btn hero__btn--outline">
                        <Send size={18} />
                        {t("hero.contactMe")}
                    </a>

                    <a
                        href={contact.github.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__btn hero__btn--icono"
                        aria-label={t("hero.githubAria")}
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href={contact.linkedin.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__btn hero__btn--icono"
                        aria-label={t("hero.linkedinAria")}
                    >
                        <FaLinkedin size={18} />
                    </a>
                </div>
            </div>

            <div className="hero__foto-wrap" aria-hidden="true">
                <div className="hero__glow"></div>
                <div className="hero__ring hero__ring--outer"></div>
                <div className="hero__ring hero__ring--inner"></div>

                <div className="hero__foto-ring">
                    <img
                        src={hero.photo}
                        alt="Foto de Nicolás Piraján"
                        className="hero__foto"
                    />
                </div>

                {TECH_ORBIT.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <span
                            className={`hero__tech-chip hero__tech-chip--${tech.position}`}
                            key={tech.name}
                        >
                            <Icon size={18} />
                        </span>
                    );
                })}
            </div>

            <a href="#about" className="hero__scroll-hint" aria-label={t("hero.scrollHintAria")}>
                <ChevronDown size={20} />
            </a>
        </section>
    );
}

export default Hero;
