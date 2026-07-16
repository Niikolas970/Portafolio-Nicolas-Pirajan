import education from "../../../data/education";
import "./Education.scss";

function Education() {
    return (
        <section className="education" id="education">
            <div className="education__container">

                <div className="education__header">
                    <span className="education__eyebrow">Educación</span>
                    <h2 className="education__title">Educación</h2>
                </div>

                <ol className="education__timeline">
                    {education.map((item) => (
                        <li className="education__item" key={item.id}>
                            <div className="education__point"></div>
                            <div className="education__content">
                                <span className="education__date">{item.date}</span>
                                <h3 className="education__item-title">{item.title}</h3>
                                <p className="education__item-text">{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>

            </div>
        </section>
    );
}

export default Education;