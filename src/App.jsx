import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSections from "./sections/LogoSections.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <Projects/>
            <ShowcaseSection/>
            <LogoSections/>
            <FeatureCards/>
            <ExperienceSection />
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default App
