import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css";
import { DemoWeb } from "./components/DemoWeb/DemoWeb";
import { Process } from "./components/Process/Process";
import { CaseStudies } from "./components/CaseStudies/CaseStudies";
import { FAQ } from "./components/FAQ/FAQ";
import { Contact } from "./components/Contact/Contact";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Process />
        <DemoWeb />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
