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


/* ===========================================
   BARRA DE PROGRESO DE SCROLL
   =========================================== */

const barraProgreso = document.getElementById("progreso-scroll");

if (barraProgreso) {

    window.addEventListener("scroll", () => {

        const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
        const progreso = alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0;

        barraProgreso.style.width = `${progreso}%`;

    }, { passive: true });

}


/* ===========================================
   MODO CLARO / OSCURO
   =========================================== */

const toggleBtn  = document.querySelector(".theme-toggle");
const iconoTema  = document.querySelector(".toggle-circle i");

// Si no existe el botón en la página, no hacemos nada
if (toggleBtn && iconoTema) {

    // Restaurar preferencia guardada (si el usuario ya eligió antes)
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "light") {
        activarLightMode();
    }

    toggleBtn.addEventListener("click", function () {
        const esModoClaro = document.body.classList.contains("light-mode");

        if (esModoClaro) {
            desactivarLightMode();
        } else {
            activarLightMode();
        }
    });
}

function activarLightMode() {
    document.body.classList.add("light-mode");
    toggleBtn.classList.add("active");
    toggleBtn.setAttribute("aria-pressed", "true");
    iconoTema.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("tema", "light");
}

function desactivarLightMode() {
    document.body.classList.remove("light-mode");
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-pressed", "false");
    iconoTema.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("tema", "dark");
}

/* ===========================================
   REVEAL AL HACER SCROLL (Intersection Observer)
   =========================================== */

const elementosReveal = document.querySelectorAll(".reveal, .timeline__item");

if ("IntersectionObserver" in window && elementosReveal.length) {

    const observador = new IntersectionObserver((entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }

        });

    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

    elementosReveal.forEach(el => observador.observe(el));

} else {

    elementosReveal.forEach(el => el.classList.add("visible"));

}


/* ===========================================
   HERO — ROL ROTATIVO
   =========================================== */

const rolRotativo = document.getElementById("rol-rotativo");

if (rolRotativo) {

    const roles = [
        "Desarrollador Full Stack Java",
        "Desarrollador Backend Java",
        "Estudiante de Ingeniería de Software",
        "Entusiasta de código limpio"
    ];

    let indiceRol = 0;

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

        setInterval(() => {

            indiceRol = (indiceRol + 1) % roles.length;

            rolRotativo.style.opacity = "0";

            setTimeout(() => {
                rolRotativo.textContent = roles[indiceRol];
                rolRotativo.style.opacity = "1";
            }, 300);

        }, 3200);

        rolRotativo.style.transition = "opacity 0.3s ease";

    }

}


/* ===========================================
   SOBRE MÍ — CONTADORES ANIMADOS
   =========================================== */

const contadores = document.querySelectorAll("[data-contador]");

if ("IntersectionObserver" in window && contadores.length) {

    const observadorContadores = new IntersectionObserver((entradas, obs) => {

        entradas.forEach(entrada => {

            if (!entrada.isIntersecting) return;

            const elemento = entrada.target;
            const meta = Number(elemento.dataset.contador);
            const duracion = 900;
            const inicio = performance.now();

            function paso(ahora) {

                const progreso = Math.min((ahora - inicio) / duracion, 1);
                elemento.textContent = Math.round(progreso * meta);

                if (progreso < 1) {
                    requestAnimationFrame(paso);
                }

            }

            requestAnimationFrame(paso);
            obs.unobserve(elemento);

        });

    }, { threshold: 0.5 });

    contadores.forEach(el => observadorContadores.observe(el));

} else {

    contadores.forEach(el => {
        el.textContent = el.dataset.contador;
    });

}


/* ===========================================
   PROYECTOS — FILTROS POR TECNOLOGÍA
   =========================================== */

const filtros = document.querySelectorAll(".filtro-pill");
const tarjetasProyectos = document.querySelectorAll(".proyecto-card");
const mensajeVacio = document.getElementById("proyectos-vacio");

if (filtros.length && tarjetasProyectos.length) {

    filtros.forEach(filtro => {

        filtro.addEventListener("click", () => {

            filtros.forEach(f => f.classList.remove("activo"));
            filtro.classList.add("activo");

            const seleccion = filtro.dataset.filtro;
            let visibles = 0;

            tarjetasProyectos.forEach(tarjeta => {

                const tecnologias = (tarjeta.dataset.tecnologias || "").split(",");
                const coincide = seleccion === "todos" || tecnologias.includes(seleccion);

                tarjeta.classList.toggle("oculto", !coincide);

                if (coincide) visibles++;

            });

            if (mensajeVacio) {
                mensajeVacio.hidden = visibles !== 0;
            }

        });

    });

}


/* ===========================================
   CONTACTO — VALIDACIÓN EN VIVO Y CONTADOR
   =========================================== */

const formulario = document.getElementById("formulario-contacto");

if (formulario) {

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("error-nombre");
    const errorCorreo = document.getElementById("error-correo");
    const errorMensaje = document.getElementById("error-mensaje");

    const contadorMensaje = document.getElementById("contador-mensaje");
    const botonEnviar = document.getElementById("btn-enviar");

    const exito = document.getElementById("form-exito");

    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function marcarCampo(campo, spanError, condicionValida, mensajeError) {

        if (condicionValida) {
            campo.classList.remove("invalido");
            campo.classList.add("valido");
            spanError.textContent = "";
        } else {
            campo.classList.remove("valido");
            campo.classList.add("invalido");
            spanError.textContent = mensajeError;
        }

        return condicionValida;

    }

    function validarNombre() {
        const longitud = nombre.value.trim().length;
        return marcarCampo(
            nombre, errorNombre,
            longitud >= 2 && longitud <= 60,
            longitud === 0 ? "Por favor ingresa tu nombre." : longitud < 2
                ? "El nombre es muy corto."
                : "El nombre es demasiado largo."
        );
    }

    function validarCorreo() {
        return marcarCampo(
            correo, errorCorreo,
            regexCorreo.test(correo.value.trim()),
            "Ingresa un correo válido."
        );
    }

    function validarMensaje() {
        const longitud = mensaje.value.trim().length;
        return marcarCampo(
            mensaje, errorMensaje,
            longitud >= 10 && longitud <= 500,
            longitud === 0 ? "El mensaje no puede estar vacío." : longitud < 10
                ? "El mensaje debe tener al menos 10 caracteres."
                : "El mensaje no puede superar los 500 caracteres."
        );
    }

    nombre.addEventListener("blur", validarNombre);
    correo.addEventListener("blur", validarCorreo);
    mensaje.addEventListener("blur", validarMensaje);

    mensaje.addEventListener("input", () => {

        const longitud = mensaje.value.length;

        if (contadorMensaje) {
            contadorMensaje.textContent = `${longitud} / 500`;
            contadorMensaje.classList.toggle("limite", longitud > 450);
        }

        if (mensaje.classList.contains("invalido") || mensaje.classList.contains("valido")) {
            validarMensaje();
        }

    });

    nombre.addEventListener("input", () => {
        if (nombre.classList.contains("invalido") || nombre.classList.contains("valido")) validarNombre();
    });

    correo.addEventListener("input", () => {
        if (correo.classList.contains("invalido") || correo.classList.contains("valido")) validarCorreo();
    });

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        exito.textContent = "";

        const nombreValido = validarNombre();
        const correoValido = validarCorreo();
        const mensajeValido = validarMensaje();

        if (nombreValido && correoValido && mensajeValido) {

            if (botonEnviar) {
                botonEnviar.disabled = true;
                botonEnviar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
            }

            setTimeout(() => {

                exito.textContent = "✓ Mensaje enviado. ¡Te responderé lo antes posible!";

                formulario.reset();
                [nombre, correo, mensaje].forEach(campo => campo.classList.remove("valido", "invalido"));

                if (contadorMensaje) {
                    contadorMensaje.textContent = "0 / 500";
                    contadorMensaje.classList.remove("limite");
                }

                if (botonEnviar) {
                    botonEnviar.disabled = false;
                    botonEnviar.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar mensaje';
                }

                nombre.focus();

                setTimeout(() => {
                    exito.textContent = "";
                }, 4000);

            }, 700);

        }

    });

}


/* ===========================================
   COPIAR CORREO AL PORTAPAPELES
   =========================================== */

const botonCopiarCorreo = document.getElementById("copiar-correo");

if (botonCopiarCorreo) {

    botonCopiarCorreo.addEventListener("click", async () => {

        const correo = botonCopiarCorreo.dataset.correo;

        try {

            await navigator.clipboard.writeText(correo);

            botonCopiarCorreo.classList.add("copiado");

            setTimeout(() => {
                botonCopiarCorreo.classList.remove("copiado");
            }, 2000);

        } catch (err) {

            // Si el navegador bloquea el portapapeles, no rompemos nada:
            // el enlace de correo sigue siendo visible para copiar a mano.
            console.warn("No se pudo copiar el correo automáticamente.", err);

        }

    });

}


/* ===========================================
   BOTÓN VOLVER ARRIBA
   =========================================== */

const botonSubir = document.getElementById("btn-subir");

if (botonSubir) {

    window.addEventListener("scroll", () => {

        botonSubir.classList.toggle("visible", window.scrollY > 500);

    }, { passive: true });

    botonSubir.addEventListener("click", () => {

        window.scrollTo({ top: 0, behavior: "smooth" });

    });

}


/* ===========================================
   CARRUSEL DE TECNOLOGÍAS (sin cambios de lógica)
   =========================================== */

function iniciarCarruseles() {

    const tracks = document.querySelectorAll(".carousel-track");

    tracks.forEach(function (track) {

        const direccion = track.dataset.direction;
        const velocidad = Number(track.dataset.speed);

        track.innerHTML += track.innerHTML;
        const anchoOriginal = track.scrollWidth / 2;
        let posicion = direccion === "right"
            ? -anchoOriginal
            : 0;
        let pausado = false;
        track.parentElement.addEventListener("mouseenter", function () {
            pausado = true;
        });
        track.parentElement.addEventListener("mouseleave", function () {
            pausado = false;
        });
        function animar() {
            if (!pausado) {
                if (direccion === "left") {
                    posicion -= velocidad;
                    if (Math.abs(posicion) >= anchoOriginal) {
                        posicion = 0;
                    }
                } else {
                    posicion += velocidad;
                    if (posicion >= 0) {
                        posicion = -anchoOriginal;
                    }
                }
                track.style.transform = `translateX(${posicion}px)`;
            }
            requestAnimationFrame(animar);
        }
        animar();
    });

}

iniciarCarruseles();
