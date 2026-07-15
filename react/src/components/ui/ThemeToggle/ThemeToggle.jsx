import "./ThemeToggle.scss";

function ThemeToggle() {
    return (
        <button
            className="theme-toggle"
            type="button"
            aria-label="Cambiar tema"
        >
            🌙
        </button>
    );
}

export default ThemeToggle;