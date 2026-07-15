
import technologies from "../../../data/technologies";
import techCategories from "../../../data/techCategories";
import "./Skills.scss";

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills__container">

                <div className="skills__header">
                    <span className="skills__eyebrow">Tecnologías</span>
                    <h2 className="skills__title">Tecnologías</h2>
                </div>

                <div className="skills__groups">
                    {techCategories.map((category) => (
                        <div className="skills__group" key={category.id}>
                            <h3 className="skills__group-title">{category.label}</h3>
                            <ul className="skills__list">
                                {technologies
                                    .filter((tech) => tech.category === category.id)
                                    .map((tech) => (
                                        <li className="skills__item" key={tech.name}>
                                            <i className={tech.icon} aria-hidden="true"></i>
                                            <span>
                                                {tech.name}
                                                {tech.nota && <small> {tech.nota}</small>}
                                            </span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;
