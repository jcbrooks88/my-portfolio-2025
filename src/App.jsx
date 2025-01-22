import { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <main>
        {activeSection === "about" && <AboutMe />}
        {activeSection === "portfolio" && <Portfolio />}
        {activeSection === "contact" && <Contact />}
        {activeSection === "resume" && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

