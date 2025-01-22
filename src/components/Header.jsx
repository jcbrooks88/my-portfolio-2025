import { useState } from "react";
import Navigation from './Navigation';

function Header() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header>
      <h1>Jeffery Brooks: Turning Challenges into Opportunities with Code</h1>
      <Navigation activeSection={activeSection} onNavClick={handleNavClick} />
    </header>
  );
}

export default Header;
