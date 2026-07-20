import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

const LANG_STORAGE_KEY = "idioma";

function detectarIdioma() {
    if (typeof window === "undefined") return "es";

    const guardado = localStorage.getItem(LANG_STORAGE_KEY);
    if (guardado === "es" || guardado === "en") return guardado;

    const idiomaNavegador = navigator.language?.slice(0, 2);
    return idiomaNavegador === "en" ? "en" : "es";
}

i18n.use(initReactI18next).init({
    resources: {
        es: { translation: es },
        en: { translation: en },
    },
    lng: detectarIdioma(),
    fallbackLng: "es",
    interpolation: {
        escapeValue: false,
    },
});

i18n.on("languageChanged", (idioma) => {
    document.documentElement.setAttribute("lang", idioma);
    localStorage.setItem(LANG_STORAGE_KEY, idioma);
});

document.documentElement.setAttribute("lang", i18n.language);

export default i18n;
