// ThemeToggle.jsx
import { useState, useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.scss";

const ANIMATION_DURATION = 650; // ms
const THEME_STORAGE_KEY = "tema";

function getTemaGuardado() {
    if (typeof window === "undefined") return "dark";
    const guardado = localStorage.getItem(THEME_STORAGE_KEY);
    return guardado === "light" ? "light" : "dark";
}

function aplicarTemaAlDocumento(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem(THEME_STORAGE_KEY, tema);
}

function ThemeToggle() {
    const [tema, setTema] = useState(getTemaGuardado);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutSwap = useRef(null);
    const timeoutEnd = useRef(null);

    useEffect(() => {
        aplicarTemaAlDocumento(tema);
    }, []);

    useEffect(() => {
        return () => {
            clearTimeout(timeoutSwap.current);
            clearTimeout(timeoutEnd.current);
        };
    }, []);

    function handleToggle() {
        if (isAnimating) return;

        setIsAnimating(true);

        const nuevoTema = tema === "dark" ? "light" : "dark";

        timeoutSwap.current = setTimeout(() => {
            setTema(nuevoTema);
            aplicarTemaAlDocumento(nuevoTema);
        }, ANIMATION_DURATION / 2);

        timeoutEnd.current = setTimeout(() => {
            setIsAnimating(false);
        }, ANIMATION_DURATION);
    }

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={handleToggle}
            aria-label="Cambiar tema"
            aria-pressed={tema === "light"}
            style={{ "--toggle-duration": `${ANIMATION_DURATION}ms` }}
        >
            <span className="theme-toggle__sphere">

                {isAnimating && (
                    <>
                        <span className="theme-toggle__glow" />
                        <span className="theme-toggle__portal" />
                        <span className="theme-toggle__flash" />
                    </>
                )}

                <span
                    className={
                        "theme-toggle__icon" +
                        (isAnimating ? " theme-toggle__icon--warp" : "")
                    }
                >
                    {tema === "dark" ? <Moon size={18} /> : <Sun size={18} />}
                </span>

            </span>
        </button>
    );
}

export default ThemeToggle;