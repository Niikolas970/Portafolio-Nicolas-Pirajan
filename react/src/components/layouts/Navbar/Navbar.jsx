import navigation from "../../../data/navigation";
import socialLinks from "../../../data/socialLinks";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">

                {/* Logo */}
                <a className="navbar__brand" href="#hero">
                    &lt; Nicolás /&gt;
                </a>

                {/* Menú */}
                <ul className="navbar__menu">
                    {navigation.map((item) => (
                        <li
                            className="navbar__item"
                            key={item.id}
                        >
                            <a
                                className="navbar__link"
                                href={item.href}
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
                            <a
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

                </div>

            </div>
        </nav>
    );
}

export default Navbar;