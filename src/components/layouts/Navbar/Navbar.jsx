// Navbar.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import logo from "../../../assets/images/logo-nicolas-pirajan.jpeg";
import hero from "../../../data/hero";
import "./Navbar.scss";

const NAV_LINKS = [
    { href: "#hero", labelKey: "nav.home" },
    { href: "#about", labelKey: "nav.about" },
    { href: "#skills", labelKey: "nav.skills" },
    { href: "#projects", labelKey: "nav.projects" },
    { href: "#experience", labelKey: "nav.experience" },
    { href: "#education", labelKey: "nav.education" },
    { href: "#contact", labelKey: "nav.contact" },
];

function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [seccionActiva, setSeccionActiva] = useState("");

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 20);

            const secciones = document.querySelectorAll("section[id]");
            let actual = "";

            secciones.forEach((seccion) => {
                const offsetTop = seccion.offsetTop - 100;
                if (window.scrollY >= offsetTop) {
                    actual = seccion.id;
                }
            });

            setSeccionActiva(actual);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleLinkClick() {
        setMenuAbierto(false);
    }

    function handleCambiarIdioma() {
        i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
    }

    return (
        <header className={"navbar" + (scrolled ? " navbar--scrolled" : "")}>
            <a href="#hero" className="navbar__logo">
                <img
                    src={logo}
                    alt="Foto de perfil de Nicolás Piraján"
                    className="navbar__logo-img"
                />
                <span className="navbar__logo-name">Nicolas Piraján</span>
            </a>

            <ul className={"navbar__links" + (menuAbierto ? " navbar__links--abierto" : "")}>
                {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={
                                seccionActiva === link.href.slice(1) ? "activo" : ""
                            }
                            onClick={handleLinkClick}
                        >
                            {t(link.labelKey)}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="navbar__actions">
                <a
                    href={hero.getCvUrl(i18n.language)}
                    download
                    className="navbar__cv-btn"
                >
                    <Download size={16} />
                    <span>{t("navbar.cv")}</span>
                </a>

                <button
                    type="button"
                    className="navbar__lang-btn"
                    onClick={handleCambiarIdioma}
                    aria-label={t("navbar.langSwitch")}
                >
                    {i18n.language === "es" ? "EN" : "ES"}
                </button>

                <ThemeToggle />

                <button
                    type="button"
                    className="navbar__hamburger"
                    aria-label={menuAbierto ? t("navbar.closeMenu") : t("navbar.openMenu")}
                    aria-expanded={menuAbierto}
                    onClick={() => setMenuAbierto((prev) => !prev)}
                >
                    {menuAbierto ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>
        </header>
    );
}

export default Navbar;
