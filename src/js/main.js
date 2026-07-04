/* ===========================================
   MAIN.JS
   Controlador global del portafolio SPA:
   - Modo claro / oscuro (sincronizado entre TODOS los
     botones .theme-toggle presentes en la página: el del
     header del Hero y el de la navbar profesional).
   - Scroll suave universal para cualquier enlace interno (#),
     incluye el botón "Entrar", la flecha del Hero y los
     enlaces de la navbar profesional.
   =========================================== */


/* ===== MODO CLARO / OSCURO ===== */

const botonesTema = document.querySelectorAll(".theme-toggle");

function aplicarTema(esClaro) {

    document.body.classList.toggle("light-mode", esClaro);

    botonesTema.forEach(boton => {

        boton.classList.toggle("active", esClaro);
        boton.setAttribute("aria-pressed", String(esClaro));

        const icono = boton.querySelector(".toggle-circle i");

        if (icono) {
            icono.classList.toggle("fa-sun", esClaro);
            icono.classList.toggle("fa-moon", !esClaro);
        }

    });

    localStorage.setItem("tema", esClaro ? "light" : "dark");

}

if (botonesTema.length) {

    // Restaurar preferencia guardada (si el usuario ya eligió antes)
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "light") {
        aplicarTema(true);
    }

    botonesTema.forEach(boton => {

        boton.addEventListener("click", () => {
            const esClaroActual = document.body.classList.contains("light-mode");
            aplicarTema(!esClaroActual);
        });

    });

}


/* ===========================================
   NAVEGACIÓN INTERNA — SCROLL SUAVE UNIVERSAL
   Cubre el botón "Entrar" del modo profesional, la flecha
   animada del Hero, y cualquier enlace de la navbar profesional.
   Ya no existen enlaces a profesional.html en ningún lugar.
   =========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();
            destino.scrollIntoView({ behavior: "smooth" });
        }

    });

});