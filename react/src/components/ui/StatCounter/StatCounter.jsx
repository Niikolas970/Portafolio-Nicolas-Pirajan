// StatCounter.jsx
import { useEffect, useRef, useState } from "react";
import "./StatCounter.scss";

const DURATION = 900;

function StatCounter({ value, symbol, label }) {
    const [conteo, setConteo] = useState(0);
    const [animado, setAnimado] = useState(false);
    const elementoRef = useRef(null);

    useEffect(() => {
        if (symbol || value === null) return;

        const elemento = elementoRef.current;
        if (!elemento || !("IntersectionObserver" in window)) {
            setConteo(value);
            return;
        }

        const observador = new IntersectionObserver(
            (entradas, obs) => {
                entradas.forEach((entrada) => {
                    if (!entrada.isIntersecting || animado) return;

                    setAnimado(true);
                    const inicio = performance.now();

                    function paso(ahora) {
                        const progreso = Math.min((ahora - inicio) / DURATION, 1);
                        setConteo(Math.round(progreso * value));

                        if (progreso < 1) {
                            requestAnimationFrame(paso);
                        }
                    }

                    requestAnimationFrame(paso);
                    obs.unobserve(elemento);
                });
            },
            { threshold: 0.5 }
        );

        observador.observe(elemento);

        return () => observador.disconnect();
    }, [value, symbol, animado]);

    return (
        <div className="stat-counter" ref={elementoRef}>
            <span className="stat-counter__numero">
                {symbol ?? conteo}
            </span>
            <span className="stat-counter__label">{label}</span>
        </div>
    );
}

export default StatCounter;