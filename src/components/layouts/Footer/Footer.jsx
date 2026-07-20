// Footer.jsx
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contact from "../../../data/contact";
import "./Footer.scss";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer__info">
                <p className="footer__copy">© 2026 Nicolás Piraján</p>
                <p className="footer__role">{t("footer.role")}</p>
            </div>

            <div className="footer__links">
                <a
                    href={contact.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("footer.githubAria")}
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href={contact.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("footer.linkedinAria")}
                >
                    <FaLinkedin size={20} />
                </a>

                <a
                    href={`mailto:${contact.email}`}
                    aria-label={t("footer.emailAria")}
                >
                    <Mail size={20} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
