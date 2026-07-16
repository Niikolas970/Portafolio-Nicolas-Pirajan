// Experience.jsx
import experience from "../../../data/experience";
import "./Experience.scss";

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience__container">

                <div className="experience__header">
                    <span className="experience__eyebrow">Experiencia</span>
                    <h2 className="experience__title">Experiencia y Formación</h2>
                </div>

                <ol className="experience__timeline">
                    {experience.map((item) => (
                        <li className="experience__item" key={item.id}>
                            <div className="experience__point"></div>
                            <div className="experience__content">
                                <span className="experience__date">{item.date}</span>
                                <h3 className="experience__item-title">{item.title}</h3>
                                <p className="experience__item-text">{item.description}</p>

                                {item.techs.length > 0 && (
                                    <div className="experience__techs">
                                        {item.techs.map((tech) => (
                                            <span className="experience__tech-pill" key={tech}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ol>

            </div>
        </section>
    );
}

export default Experience;