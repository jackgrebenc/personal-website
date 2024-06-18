import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Projects } from "./Projects";
import home from "../assets/home.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-2">
      <nav className="navbar navbar-expand navbar-light bg-light justify-content-center">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                aria-current="page"
                onClick={() => {
                  if (isOpen) setIsOpen(!isOpen); // Toggle the open state on click
                }}
              >
                Home
              </NavLink>
            </li>
            {Projects.map((item) => (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={item.link}
                  aria-current="page"
                  onClick={() => {
                    if (isOpen) setIsOpen(!isOpen); // Toggle the open state on click
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
