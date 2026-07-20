import { useTranslation } from "react-i18next";
import experience from "../../../data/experience";
import "./Experience.scss";

function Experience() {
    const { t } = useTranslation();

    return (
        <section className="experience" id="experience">
            <div className="experience__container">

                <div className="experience__header">
                    <span className="experience__eyebrow">{t("experience.eyebrow")}</span>
                    <h2 className="experience__title">{t("experience.title")}</h2>
                </div>

                <ol className="experience__timeline">
                    {experience.map((item) => {
                        const techs = item.techsKey
                            ? t(item.techsKey, { returnObjects: true })
                            : [];

                        return (
                            <li className="experience__item" key={item.id}>
                                <div className="experience__point"></div>
                                <div className="experience__content">
                                    <span className="experience__date">
                                        {item.date.startsWith("common.") ? t(item.date) : item.date}
                                    </span>
                                    <h3 className="experience__item-title">{t(item.title)}</h3>
                                    <p className="experience__item-text">{t(item.description)}</p>

                                    {techs.length > 0 && (
                                        <div className="experience__techs">
                                            {techs.map((tech) => (
                                                <span className="experience__tech-pill" key={tech}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ol>

            </div>
        </section>
    );
}

export default Experience;
