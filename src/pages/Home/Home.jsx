import Navbar from "../../components/layouts/Navbar/Navbar";

import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Skills from "../../components/sections/Skills/Skills";
import Projects from "../../components/sections/Projects/Projects";
import Experience from "../../components/sections/Experience/Experience";
import Contact from "../../components/sections/Contact/Contact";

import Footer from "../../components/layouts/Footer/Footer";
import Education from "../../components/sections/Education/Education";

function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Projects />

            <Experience />

            <Education/>

            <Contact />

            <Footer />
        </>
    );
}

export default Home;