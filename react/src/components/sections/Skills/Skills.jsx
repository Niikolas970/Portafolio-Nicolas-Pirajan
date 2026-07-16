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
                    {techCategories.map((category) => {
                        const CategoryIcon = category.icon;
                        const techsDeCategoria = technologies.filter(
                            (tech) => tech.category === category.id
                        );

                        return (
                            <div className="skills__group" key={category.id}>
                                <h3 className="skills__group-title">
                                    <CategoryIcon size={18} />
                                    {category.title}
                                </h3>

                                <div className="skills__carousel">
                                    <div
                                        className={`skills__track skills__track--${category.direction}`}
                                        style={{ "--carousel-speed": `${category.speed}s` }}
                                    >
                                        {[...techsDeCategoria, ...techsDeCategoria].map(
                                            (tech, index) => {
                                                const TechIcon = tech.icon;

                                                return (
                                                    <div
                                                        className="skills__card"
                                                        key={`${tech.id}-${index}`}
                                                    >
                                                        <TechIcon size={22} />
                                                        <span>
                                                            {tech.name}
                                                            {tech.learning && (
                                                                <small> (Aprendiendo)</small>
                                                            )}
                                                        </span>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Skills;