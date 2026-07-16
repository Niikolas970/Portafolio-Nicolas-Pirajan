// About.jsx
import { User, Code2, Search, Sparkles, GraduationCap, School } from "lucide-react";
import "./About.scss";

import stats from "../../../data/stats";
import StatCounter from "../../ui/StatCounter/StatCounter";

function About() {
    return (
        <section className="about" id="about">
            <div className="about__container">

                <div className="about__header">
                    <span className="about__eyebrow">Sobre mí</span>
                    <h2 className="about__title">La idea corta, sin vueltas</h2>
                </div>

                <div className="about__grid">

                    <div className="about__card">
                        <div className="about__card-icon">
                            <User size={22} />
                        </div>
                        <h3 className="about__card-title">¿Quién soy?</h3>
                        <p className="about__card-text">
                            Soy Nicolás Piraján, desarrollador Full Stack Java en
                            formación y estudiante de Ingeniería de Software, radicado
                            en Bogotá, Colombia. Me apasiona construir soluciones
                            digitales útiles, rápidas y fáciles de usar.
                        </p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <Code2 size={22} />
                        </div>
                        <h3 className="about__card-title">¿Qué hago?</h3>
                        <p className="about__card-text">
                            Diseño y desarrollo aplicaciones web completas: backend con
                            Java y Spring Boot, frontend con React.
                        </p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <Search size={22} />
                        </div>
                        <h3 className="about__card-title">¿Qué busco?</h3>
                        <p className="about__card-text">
                            Mi primera oportunidad profesional como desarrollador
                            Junior, ya sea en Backend con Java o como Full Stack, en un
                            equipo donde pueda aportar valor, seguir aprendiendo y
                            crecer técnica y profesionalmente.
                        </p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <Sparkles size={22} />
                        </div>
                        <h3 className="about__card-title">Mi historia</h3>
                        <p className="about__card-text">
                            Disfruto enfrentar nuevos desafíos y aprender constantemente:
                            desarrollé una Pokédex consumiendo la PokéAPI, resolví
                            conflictos de integración (merge conflicts) en repositorios
                            colaborativos, y diseñé este portafolio con una experiencia
                            interactiva inspirada en un videojuego RPG.
                        </p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <GraduationCap size={22} />
                        </div>
                        <h3 className="about__card-title">Bootcamp Generation</h3>
                        <p className="about__card-text">
                            Completé el Bootcamp Full Stack Java de Generation Colombia,
                            donde participé en proyectos individuales y colaborativos
                            aplicando Git, GitHub y SCRUM, asumiendo roles de
                            desarrollador, Scrum Master y administrador de repositorios.
                        </p>
                    </div>

                    <div className="about__card">
                        <div className="about__card-icon">
                            <School size={22} />
                        </div>
                        <h3 className="about__card-title">Ingeniería de Software</h3>
                        <p className="about__card-text">
                            Curso actualmente Ingeniería de Software en Uniempresarial –
                            Fundación Universitaria Empresarial de la Cámara de Comercio
                            de Bogotá, fortaleciendo mis conocimientos en programación,
                            estructuras de datos, bases de datos e ingeniería de
                            software.
                        </p>
                    </div>

                    <div className="about__stats">
                        {stats.map((stat) => (
                            <StatCounter
                                key={stat.id}
                                value={stat.value}
                                symbol={stat.symbol}
                                label={stat.label}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;
