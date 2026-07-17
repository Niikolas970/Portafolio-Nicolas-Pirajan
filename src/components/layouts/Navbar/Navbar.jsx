// Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import logo from "../../../assets/images/logo-nicolas-pirajan.jpeg";
import "./Navbar.scss";

const NAV_LINKS = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#skills", label: "Tecnologías" },
    { href: "#projects", label: "Proyectos" },
    { href: "#experience", label: "Experiencia" },
    { href: "#education", label: "Educación" },
    { href: "#contact", label: "Contacto" },
];

function Navbar() {
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
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="navbar__actions">
                <a
                    href="/assets/docs/cv-nicolas-pirajan.pdf"
                    download
                    className="navbar__cv-btn"
                >
                    <Download size={16} />
                    CV
                </a>

                <ThemeToggle />

                <button
                    type="button"
                    className="navbar__hamburger"
                    aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
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
