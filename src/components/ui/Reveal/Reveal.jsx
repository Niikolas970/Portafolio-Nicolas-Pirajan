// Reveal.jsx
import { useEffect, useRef, useState } from "react";
import "./Reveal.scss";

function Reveal({ children }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const prefiereReducido = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefiereReducido) {
            setVisible(true);
            return;
        }

        const nodo = ref.current;
        if (!nodo) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(nodo);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
        );

        observer.observe(nodo);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={"reveal" + (visible ? " reveal--visible" : "")}>
            {children}
        </div>
    );
}

export default Reveal;
