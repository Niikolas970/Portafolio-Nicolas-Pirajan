import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../../../data/projects";
import "./Projects.scss";

function Projects() {
    const { t } = useTranslation();

    return (
        <section className="projects" id="projects">
            <div className="projects__container">

                <div className="projects__header">
                    <span className="projects__eyebrow">{t("projects.eyebrow")}</span>
                    <h2 className="projects__title">{t("projects.title")}</h2>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => {
                        const Icon = project.icon;
                        const hasVideo = Boolean(project.video);
                        const hasImage = Boolean(project.image);
                        const title = t(project.title);

                        return (
                            <article className="project-card" key={project.id}>

                                <div
                                    className={
                                        "project-card__media" +
                                        (hasVideo ? " project-card__media--video" : "") +
                                        (!hasVideo && hasImage ? " project-card__media--image-hover" : "")
                                    }
                                    onMouseEnter={hasVideo ? (event) => {
                                        const video = event.currentTarget.querySelector("video");

                                        if (video) {
                                            video.play();
                                        }
                                    } : undefined}
                                    onMouseLeave={hasVideo ? (event) => {
                                        const video = event.currentTarget.querySelector("video");

                                        if (video) {
                                            video.pause();
                                            video.currentTime = 0;
                                        }
                                    } : undefined}
                                >
                                    <div className="project-card__fallback">
                                        <Icon size={32} />
                                    </div>

                                    {hasImage && (
                                        <img
                                            className="project-card__img"
                                            src={project.image}
                                            alt={title}
                                            loading="lazy"
                                        />
                                    )}

                                    {hasVideo && (
                                        <video
                                            className="project-card__video"
                                            src={project.video}
                                            muted
                                            loop
                                            playsInline
                                            preload="none"
                                        />
                                    )}
                                </div>

                                <div className="project-card__body">
                                    <h3 className="project-card__title">
                                        {title}
                                    </h3>

                                    <p className="project-card__description">
                                        {t(project.description)}
                                    </p>

                                    <ul className="project-card__techs">
                                        {project.techs.map((tech) => (
                                            <li className="project-card__tech" key={tech}>
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="project-card__links">
                                        {project.github && (
                                            <a
                                                className="project-card__link"
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={t("projects.githubAria", { title })}
                                            >
                                                <FaGithub size={18} />
                                                {t("projects.codeLabel")}
                                            </a>
                                        )}

                                        {project.demo && (
                                            <a
                                                className="project-card__link project-card__link--primary"
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={t("projects.demoAria", { title })}
                                            >
                                                <ExternalLink size={18} />
                                                {t("projects.demoLabel")}
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Projects;
