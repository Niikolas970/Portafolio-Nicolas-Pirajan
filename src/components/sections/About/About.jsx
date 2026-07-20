// About.jsx
import { useTranslation } from "react-i18next";
import { User, Code2, Search, Sparkles, GraduationCap, School } from "lucide-react";
import "./About.scss";

import stats from "../../../data/stats";
import StatCounter from "../../ui/StatCounter/StatCounter";

function About() {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">
            <div className="about__container">

                <div className="about__header">
                    <span className="about__eyebrow">{t("about.eyebrow")}</span>
                    <h2 className="about__title">{t("about.title")}</h2>
                </div>

                <div className="about__grid">

                    <div className="about__card">
                        <div className="about__card-icon">
                            <User size={22} />
                        </div>
                        <h3 className="about__card-title">{t("about.cards.who.title")}</h3>
                        <p className="about__card-text">{t("about.cards.who.text")}</p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <Code2 size={22} />
                        </div>
                        <h3 className="about__card-title">{t("about.cards.what.title")}</h3>
                        <p className="about__card-text">{t("about.cards.what.text")}</p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <Search size={22} />
                        </div>
                        <h3 className="about__card-title">{t("about.cards.looking.title")}</h3>
                        <p className="about__card-text">{t("about.cards.looking.text")}</p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <Sparkles size={22} />
                        </div>
                        <h3 className="about__card-title">{t("about.cards.story.title")}</h3>
                        <p className="about__card-text">{t("about.cards.story.text")}</p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <GraduationCap size={22} />
                        </div>
                        <h3 className="about__card-title">{t("about.cards.bootcamp.title")}</h3>
                        <p className="about__card-text">{t("about.cards.bootcamp.text")}</p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <School size={22} />
                        </div>
                        <h3 className="about__card-title">{t("about.cards.degree.title")}</h3>
                        <p className="about__card-text">{t("about.cards.degree.text")}</p>
                    </div>

                    <div className="about__stats">
                        {stats.map((stat) => (
                            <StatCounter
                                key={stat.id}
                                value={stat.value}
                                symbol={stat.symbol}
                                label={t(stat.label)}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;
