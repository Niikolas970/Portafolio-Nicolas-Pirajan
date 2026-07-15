import navigation from "../../../data/navigation";
import socialLinks from "../../../data/socialLinks";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";
import "./Navbar.scss";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="#hero">
                    &lt; Nicolás /&gt;
                </a>
            </div>
            <ul className="navbar__menu">
                {navigation.map((item) => (
                    <li key={item.id}>
                        <a href={item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="navbar__actions">
                {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
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
                <ThemeToggle/>
            </div>
        </nav>
    );
}

export default Navbar;