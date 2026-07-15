import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../../../data/projects";
import "./Projects.scss";

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">

                <div className="projects__header">
                    <span className="projects__eyebrow">Proyectos</span>
                    <h2 className="projects__title">Cosas que construí</h2>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => {
                        const Icon = project.icon;

                        return (
                            <article className="project-card" key={project.id}>

                                <div className="project-card__media">
                                    {project.image ? (
                                        <img
                                            className="project-card__img"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    ) : (
                                        <div className="project-card__fallback">
                                            <Icon size={32} />
                                        </div>
                                    )}
                                </div>

                                <div className="project-card__body">
                                    <h3 className="project-card__title">
                                        {project.title}
                                    </h3>

                                    <p className="project-card__description">
                                        {project.description}
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
                                                aria-label={`Repositorio de ${project.title}`}
                                            >
                                                <FaGithub size={18} />
                                                Código
                                            </a>
                                        )}

                                        {project.demo && (
                                            <a
                                                className="project-card__link project-card__link--primary"
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Demo de ${project.title}`}
                                            >
                                                <ExternalLink size={18} />
                                                Demo
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
