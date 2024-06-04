import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-2">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(!isOpen); // Toggle the open state on click
                }}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                Projects
              </NavLink>
              <div
                className={isOpen ? "dropdown-menu show" : "dropdown-menu"}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink
                  className="dropdown-item"
                  to="/typing-test"
                  onClick={(e) => {
                    setIsOpen(!isOpen); // Toggle the open state on click
                  }}
                >
                  Typing Test Web App
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/deep-learning-cae"
                  onClick={(e) => {
                    setIsOpen(!isOpen); // Toggle the open state on click
                  }}
                >
                  Deep Learning CAE
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
