import heroPhoto from "../assets/images/Nicolas-developer.jpeg";

const hero = {
    greeting: "hero.greeting",
    name: "Nicolás Piraján",
    roles: "hero.roles",
    description: "hero.description",
    getCvUrl: (lang) =>
        `${import.meta.env.BASE_URL}docs/cv-nicolas-pirajan${lang === "en" ? "-en" : ""}.pdf`,
    photo: heroPhoto,
    decorations: ["</>", "{ }", "Java"],
};

export default hero;
