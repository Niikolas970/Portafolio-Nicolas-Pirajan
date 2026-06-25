javascript
const nav = document.querySelector(".pro-nav");
const navLinks = document.querySelectorAll(".pro-nav__links a[href^='#']");
const secciones = document.querySelectorAll("section[id]");

if (nav) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

        let seccionActual = null;

        secciones.forEach(seccion => {
            const offsetTop = seccion.offsetTop - 100;

            if (window.scrollY >= offsetTop) {
                seccionActual = seccion.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("activo");

            if (link.getAttribute("href") === `#${seccionActual}`) {
                link.classList.add("activo");
            }
        });

    }, { passive: true });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

const hamburger = document.querySelector(".hamburger");
const menuLinks = document.querySelector(".pro-nav__links");

if (hamburger && menuLinks) {

    hamburger.addEventListener("click", () => {

        const abierto = menuLinks.classList.toggle("abierto");

        hamburger.setAttribute("aria-expanded", abierto);

        hamburger.querySelector("i").className = abierto
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars";

    });

    menuLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuLinks.classList.remove("abierto");

            hamburger.setAttribute("aria-expanded", "false");

            hamburger.querySelector("i").className = "fa-solid fa-bars";

        });

    });

}

const formulario = document.getElementById("formulario-contacto");

if (formulario) {

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("error-nombre");
    const errorCorreo = document.getElementById("error-correo");
    const errorMensaje = document.getElementById("error-mensaje");

    const exito = document.getElementById("form-exito");

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        let valido = true;

        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorMensaje.textContent = "";
        exito.textContent = "";

        if (nombre.value.trim().length < 2) {
            errorNombre.textContent = "Por favor ingresa tu nombre.";
            valido = false;
        }

        if (nombre.value.trim().length > 60) {
            errorNombre.textContent = "El nombre es demasiado largo.";
            valido = false;
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexCorreo.test(correo.value.trim())) {
            errorCorreo.textContent = "Ingresa un correo válido.";
            valido = false;
        }

        if (mensaje.value.trim().length < 10) {
            errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
            valido = false;
        }

        if (mensaje.value.trim().length > 500) {
            errorMensaje.textContent = "El mensaje no puede superar los 500 caracteres.";
            valido = false;
        }

        if (valido) {

            exito.textContent = "✓ Mensaje enviado. ¡Te responderé lo antes posible!";

            formulario.reset();

            nombre.focus();

            setTimeout(() => {
                exito.textContent = "";
            }, 4000);

        }

    });

}
