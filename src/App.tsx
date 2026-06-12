import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css";
import { DemoWeb } from "./components/DemoWeb/DemoWeb";
import { Services } from "./components/Services/Services";
import { Benefits } from "./components/Benefits/Benefits";
import { Process } from "./components/Process/Process";
import { CaseStudies } from "./components/CaseStudies/CaseStudies";
import { Projects } from "./components/Projects/ProjectSection";
import { FAQ } from "./components/FAQ/FAQ";
import { Contact } from "./components/Contact/Contact";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DemoWeb />
      <Services />
      <Benefits />
      <Process />
      <CaseStudies />
      <Projects />
      <FAQ />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
