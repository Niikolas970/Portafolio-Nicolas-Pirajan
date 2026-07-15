import { useState, useEffect, useRef } from "react";
import navigation from "../../../data/navigation";
import socialLinks from "../../../data/socialLinks";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import "./Navbar.scss";

function Navbar() {
    // Scroll inteligente: oculta el navbar al bajar, lo muestra al subir
    const [hidden, setHidden] = useState(false);
    // Le agrega un poco de fondo/sombra extra cuando ya scrolleaste
    const [scrolled, setScrolled] = useState(false);
    // Menú hamburguesa (mobile)
    const [menuOpen, setMenuOpen] = useState(false);
    // Indicador de sección activa
    const [activeHref, setActiveHref] = useState(navigation[0]?.href || "");

    const lastScrollY = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            // Si bajás y ya pasaste los 100px, se oculta
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setScrolled(currentScrollY > 20);
            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Indicador de página activa: detecta qué sección está visible
    useEffect(() => {
        const sections = navigation
            .map((item) => document.querySelector(item.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveHref(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" } // se activa cuando la sección pasa por el medio de la pantalla
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Cierra el menú mobile si el usuario clickea un link
    function handleLinkClick() {
        setMenuOpen(false);
    }

    return (
        <header className={`navbar ${hidden ? "navbar--hidden" : ""} ${scrolled ? "navbar--scrolled" : ""}`}>

            <nav className="navbar__container">

                {/* Logo */}
                <a className="navbar__brand" href="#hero">
                    &lt; Nicolás /&gt;
                </a>

                {/* Menú */}
                <ul className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
                    {navigation.map((item) => (
                        <li
                            className="navbar__item"
                            key={item.id}
                        >
                            
                                className={`navbar__link ${activeHref === item.href ? "navbar__link--active" : ""}`}
                                href={item.href}
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Acciones */}
                <div className="navbar__actions">
                    {socialLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                            
                                className="navbar__social"
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

                    <ThemeToggle />

                    {/* Botón hamburguesa (solo se ve en mobile por CSS) */}
                    <button
                        className={`navbar__toggle ${menuOpen ? "navbar__toggle--active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menú"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

            </nav>

        </header>
    );
}

export default Navbar;