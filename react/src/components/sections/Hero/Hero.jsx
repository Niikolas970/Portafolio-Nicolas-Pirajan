import socialLinks from "../../../data/socialLinks";
import perfilImg from "../../../assets/images/Nicolas-developer.jpeg";
import cvPdf from "../../../assets/docs/cv-nicolas-pirajan.pdf";
import "./Hero.scss";

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__container">

                <div className="hero__content">

                    <span className="hero__eyebrow">
                        Hola, soy
                    </span>

                    <h1 className="hero__title">
                        Nicolás Piraján
                    </h1>

                    <p className="hero__role">
                        Desarrollador Full Stack Java
                    </p>

                    <p className="hero__description">
                        Estudiante de Ingeniería de Software y egresado del Bootcamp
                        Generation Colombia. Construyo aplicaciones web con Java,
                        Spring Boot y JavaScript, apasionado por el código limpio y
                        las experiencias de usuario que realmente funcionan. Busco mi
                        primera oportunidad profesional para aportar, crecer y seguir
                        aprendiendo.
                    </p>

                    <div className="hero__actions">
                        <a
                            className="hero__btn hero__btn--primary"
                            href={cvPdf}
                            download
                        >
                            Descargar CV
                        </a>

                        <a
                            className="hero__btn hero__btn--secondary"
                            href="#contact"
                        >
                            Contactarme
                        </a>
                    </div>

                    <div className="hero__socials">
                        {socialLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    className="hero__social"
                                    key={item.id}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                </div>

                <div className="hero__visual">
                    <div className="hero__visual-glow"></div>

                    <div className="hero__visual-frame">
                        <img
                            className="hero__visual-img"
                            src={perfilImg}
                            alt="Nicolás Pirajan - Full Stack Java Developer"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;