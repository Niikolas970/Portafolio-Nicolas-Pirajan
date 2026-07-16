// Contact.jsx
import { useState } from "react";
import { Mail, Copy, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contact from "../../../data/contact";
import "./Contact.scss";

const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validarNombre(valor) {
    const longitud = valor.trim().length;

    if (longitud === 0) return "Por favor ingresa tu nombre.";
    if (longitud < 2) return "El nombre es muy corto.";
    if (longitud > 60) return "El nombre es demasiado largo.";
    return "";
}

function validarCorreo(valor) {
    if (!REGEX_CORREO.test(valor.trim())) return "Ingresa un correo válido.";
    return "";
}

function validarMensaje(valor) {
    const longitud = valor.trim().length;

    if (longitud === 0) return "El mensaje no puede estar vacío.";
    if (longitud < 10) return "El mensaje debe tener al menos 10 caracteres.";
    if (longitud > 500) return "El mensaje no puede superar los 500 caracteres.";
    return "";
}

function Contact() {
    const [campos, setCampos] = useState({ nombre: "", correo: "", mensaje: "" });
    const [errores, setErrores] = useState({ nombre: "", correo: "", mensaje: "" });
    const [tocado, setTocado] = useState({ nombre: false, correo: false, mensaje: false });
    const [enviando, setEnviando] = useState(false);
    const [exito, setExito] = useState("");
    const [copiado, setCopiado] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setCampos((prev) => ({ ...prev, [name]: value }));

        if (tocado[name]) {
            setErrores((prev) => ({ ...prev, [name]: validarCampo(name, value) }));
        }
    }

    function validarCampo(name, value) {
        if (name === "nombre") return validarNombre(value);
        if (name === "correo") return validarCorreo(value);
        if (name === "mensaje") return validarMensaje(value);
        return "";
    }

    function handleBlur(e) {
        const { name, value } = e.target;
        setTocado((prev) => ({ ...prev, [name]: true }));
        setErrores((prev) => ({ ...prev, [name]: validarCampo(name, value) }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setExito("");

        const erroresActuales = {
            nombre: validarNombre(campos.nombre),
            correo: validarCorreo(campos.correo),
            mensaje: validarMensaje(campos.mensaje),
        };

        setErrores(erroresActuales);
        setTocado({ nombre: true, correo: true, mensaje: true });

        const esValido =
            !erroresActuales.nombre && !erroresActuales.correo && !erroresActuales.mensaje;

        if (!esValido) return;

        setEnviando(true);

        setTimeout(() => {
            setExito("✓ Mensaje enviado. ¡Te responderé lo antes posible!");
            setCampos({ nombre: "", correo: "", mensaje: "" });
            setErrores({ nombre: "", correo: "", mensaje: "" });
            setTocado({ nombre: false, correo: false, mensaje: false });
            setEnviando(false);

            setTimeout(() => setExito(""), 4000);
        }, 700);
    }

    async function handleCopiarCorreo() {
        try {
            await navigator.clipboard.writeText(contact.email);
            setCopiado(true);
            setTimeout(() => setCopiado(false), 2000);
        } catch (err) {
            console.warn("No se pudo copiar el correo automáticamente.", err);
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="contact__container">

                <div className="contact__header">
                    <span className="contact__eyebrow">Contacto</span>
                    <h2 className="contact__title">{contact.heading}</h2>
                    <p className="contact__description">{contact.description}</p>
                </div>

                <div className="contact__grid">

                    <form className="contact__form" noValidate onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="nombre">Nombre completo</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu nombre completo"
                                autoComplete="name"
                                value={campos.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    tocado.nombre ? (errores.nombre ? "invalido" : "valido") : ""
                                }
                                required
                            />
                            <span className="contact__form-error">{errores.nombre}</span>
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="correo">Correo electrónico</label>
                            <input
                                type="email"
                                id="correo"
                                name="correo"
                                placeholder="tu@correo.com"
                                autoComplete="email"
                                value={campos.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    tocado.correo ? (errores.correo ? "invalido" : "valido") : ""
                                }
                                required
                            />
                            <span className="contact__form-error">{errores.correo}</span>
                        </div>

                        <div className="contact__form-group">
                            <div className="contact__form-group-header">
                                <label htmlFor="mensaje">Mensaje</label>
                                <span
                                    className={
                                        "contact__form-counter" +
                                        (campos.mensaje.length > 450 ? " limite" : "")
                                    }
                                >
                                    {campos.mensaje.length} / 500
                                </span>
                            </div>
                            <textarea
                                id="mensaje"
                                name="mensaje"
                                rows={5}
                                maxLength={500}
                                placeholder="Cuéntame sobre tu proyecto, oportunidad o consulta..."
                                value={campos.mensaje}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    tocado.mensaje ? (errores.mensaje ? "invalido" : "valido") : ""
                                }
                                required
                            />
                            <span className="contact__form-error">{errores.mensaje}</span>
                        </div>

                        <button
                            type="submit"
                            className="contact__submit"
                            disabled={enviando}
                        >
                            <Send size={18} />
                            {enviando ? "Enviando..." : "Enviar mensaje"}
                        </button>

                        <p className="contact__form-success">{exito}</p>
                    </form>

                    <aside className="contact__info">
                        <h3 className="contact__info-title">También puedes encontrarme en</h3>
                        <p className="contact__info-text">{contact.availability}</p>

                        <div className="contact__links">
                            <a
                                className="contact__link"
                                href={contact.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={20} />
                                <div>
                                    <strong>GitHub</strong>
                                    <span>{contact.github.label}</span>
                                </div>
                            </a>

                            <a
                                className="contact__link"
                                href={contact.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin size={20} />
                                <div>
                                    <strong>LinkedIn</strong>
                                    <span>{contact.linkedin.label}</span>
                                </div>
                            </a>

                            <button
                                type="button"
                                className={
                                    "contact__link contact__link--button" +
                                    (copiado ? " copiado" : "")
                                }
                                onClick={handleCopiarCorreo}
                            >
                                <Mail size={20} />
                                <div>
                                    <strong>Correo electrónico</strong>
                                    <span>{contact.email}</span>
                                </div>
                                <Copy size={16} className="contact__link-copy" />
                            </button>
                        </div>
                    </aside>

                </div>

            </div>
        </section>
    );
}

export default Contact;
