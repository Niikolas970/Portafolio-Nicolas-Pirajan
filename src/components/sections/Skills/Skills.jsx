import { useTranslation } from "react-i18next";
import technologies from "../../../data/technologies";
import techCategories from "../../../data/techCategories";
import "./Skills.scss";

function Skills() {
    const { t } = useTranslation();

    return (
        <section className="skills" id="skills">
            <div className="skills__container">

                <div className="skills__header">
                    <span className="skills__eyebrow">{t("skills.eyebrow")}</span>
                    <h2 className="skills__title">{t("skills.title")}</h2>
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
                                    {t(category.title)}
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
                                                            {tech.nameKey ? t(tech.name) : tech.name}
                                                            {tech.learning && (
                                                                <small> {t("skills.learning")}</small>
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
