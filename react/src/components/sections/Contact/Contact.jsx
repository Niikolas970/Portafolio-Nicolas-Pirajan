import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import socialLinks from "../../../data/socialLinks";
import "./Contact.scss";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Sin backend todavía — solo frontend.
        // Acá se conecta luego un servicio (EmailJS, Formspree, API propia, etc.)
        console.log("Formulario enviado:", formData);
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__container">

                <div className="contact__header">
                    <span className="contact__eyebrow">Contacto</span>
                    <h2 className="contact__title">Hablemos de tu proyecto</h2>
                    <p className="contact__subtitle">
                        Estoy disponible para nuevas oportunidades. Escribime y
                        te respondo lo antes posible.
                    </p>
                </div>

                <div className="contact__grid">

                    <div className="contact__info">

                        <div className="contact__info-item">
                            <div className="contact__info-icon">
                                <Mail size={18} />
                            </div>
                            <div>
                                <span className="contact__info-label">Email</span>
                                <span className="contact__info-value">
                                    nicolas.pirajan.dev@gmail.com
                                </span>
                            </div>
                        </div>

                        <div className="contact__info-item">
                            <div className="contact__info-icon">
                                <Phone size={18} />
                            </div>
                            <div>
                                <span className="contact__info-label">Teléfono</span>
                                <span className="contact__info-value">
                                    +57 300 000 0000
                                </span>
                            </div>
                        </div>

                        <div className="contact__info-item">
                            <div className="contact__info-icon">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <span className="contact__info-label">Ubicación</span>
                                <span className="contact__info-value">
                                    Colombia · Remoto
                                </span>
                            </div>
                        </div>

                        <div className="contact__socials">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        className="contact__social"
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

                    <form className="contact__form" onSubmit={handleSubmit}>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="name">
                                Nombre
                            </label>
                            <input
                                className="contact__input"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="contact__input"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="tucorreo@ejemplo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__field">
                            <label className="contact__label" htmlFor="message">
                                Mensaje
                            </label>
                            <textarea
                                className="contact__textarea"
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Contame sobre tu proyecto..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button className="contact__submit" type="submit">
                            Enviar mensaje
                            <Send size={18} />
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}

export default Contact;