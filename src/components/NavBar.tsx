import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Projects } from "./Projects";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-2">
      <nav className="navbar navbar-expand navbar-light border-bottom border-dark justify-content-center">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="/"
                aria-current="page"
                onClick={() => {
                  if (isOpen) setIsOpen(!isOpen); // Toggle the open state on click
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                Projects
              </NavLink>
              <div
                className={isOpen ? "dropdown-menu show" : "dropdown-menu"}
                aria-labelledby="navbarDropdownMenuLink"
              >
                {Projects.map((item) => (
                  <NavLink
                    className="dropdown-item"
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
