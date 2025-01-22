import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="no-bullets">
        <li>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? 'active' : '')}
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

