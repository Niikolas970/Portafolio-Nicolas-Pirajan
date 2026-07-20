import { useTranslation } from "react-i18next";
import education from "../../../data/education";
import "./Education.scss";

function Education() {
    const { t } = useTranslation();

    return (
        <section className="education" id="education">
            <div className="education__container">

                <div className="education__header">
                    <span className="education__eyebrow">{t("education.eyebrow")}</span>
                    <h2 className="education__title">{t("education.title")}</h2>
                </div>

                <ol className="education__timeline">
                    {education.map((item) => (
                        <li className="education__item" key={item.id}>
                            <div className="education__point"></div>
                            <div className="education__content">
                                <span className="education__date">
                                    {item.date.startsWith("common.") ? t(item.date) : item.date}
                                </span>
                                <h3 className="education__item-title">{t(item.title)}</h3>
                                <p className="education__item-text">{t(item.description)}</p>
                            </div>
                        </li>
                    ))}
                </ol>

            </div>
        </section>
    );
}

export default Education;
