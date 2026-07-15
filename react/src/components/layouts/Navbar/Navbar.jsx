import "./Navbar.scss";
import navigation from "../../../data/navigation";

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

        </nav>
    );
}

export default Navbar;