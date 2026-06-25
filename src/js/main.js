// ===== TEMA (oscuro / claro) =====

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