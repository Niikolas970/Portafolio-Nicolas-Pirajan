// Footer.jsx
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contact from "../../../data/contact";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__info">
                <p className="footer__copy">© 2026 Nicolás Piraján</p>
                <p className="footer__role">Desarrollador Full Stack Java</p>
            </div>

            <div className="footer__links">
                <a
                    href={contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Nicolás"
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href={contact.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Nicolás"
                >
                    <FaLinkedin size={20} />
                </a>

                <a
                    href={`mailto:${contact.email}`}
                    aria-label="Correo de Nicolás"
                >
                    <Mail size={20} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
