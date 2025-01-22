import PropTypes from "prop-types"; // Import PropTypes
import '../app.css'

const Navigation = ({ activeSection, onNavClick }) => {
  const navItems = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      <ul className="no-bullets">
        {navItems.map((item) => (
          <li
            key={item}
            className={activeSection === item ? "active" : ""}
            onClick={() => onNavClick(item)}
            style={{ cursor: 'pointer' }} // Ensure the list item looks clickable
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Add prop validation
Navigation.propTypes = {
  activeSection: PropTypes.string.isRequired, // Expecting a string for activeSection
  onNavClick: PropTypes.func.isRequired, // Expecting a function for onNavClick
};

export default Navigation;


