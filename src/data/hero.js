import heroPhoto from "../assets/images/Nicolas-developer.jpeg";

const hero = {
    greeting: "Hola, soy",
    name: "Nicolás Piraján",
    roles: [
        "Desarrollador Full Stack Java",
        "Desarrollador Backend Java",
        "Estudiante de Ingeniería de Software",
        "Entusiasta de código limpio",
    ],
    description:
        "Estudiante de Ingeniería de Software y egresado del Bootcamp Generation Colombia. Construyo aplicaciones web con Java, Spring Boot y JavaScript, apasionado por el código limpio y las experiencias de usuario que realmente funcionan. Busco mi primera oportunidad profesional para aportar, crecer y seguir aprendiendo.",
    cvUrl: `${import.meta.env.BASE_URL}docs/cv-nicolas-pirajan.pdf`,
    photo: heroPhoto,
    decorations: ["</>", "{ }", "Java"],
};

export default hero;