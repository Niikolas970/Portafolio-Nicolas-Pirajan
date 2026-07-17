import Navbar from "../../components/layouts/Navbar/Navbar";

import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Skills from "../../components/sections/Skills/Skills";
import Projects from "../../components/sections/Projects/Projects";
import Experience from "../../components/sections/Experience/Experience";
import Contact from "../../components/sections/Contact/Contact";

import Footer from "../../components/layouts/Footer/Footer";
import Education from "../../components/sections/Education/Education";
import Reveal from "../../components/ui/Reveal/Reveal";

function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <Reveal>
                    <About />
                </Reveal>

                <Reveal>
                    <Skills />
                </Reveal>

                <Reveal>
                    <Projects />
                </Reveal>

                <Reveal>
                    <Experience />
                </Reveal>

                <Reveal>
                    <Education/>
                </Reveal>

                <Reveal>
                    <Contact />
                </Reveal>
            </main>

            <Reveal>
                <Footer />
            </Reveal>
        </>
    );
}

export default Home;