import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState } from "react";
import { Projects } from "./Projects";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the collapse
  const location = useLocation();

  const toggleNav = () => {
    if (isOpen) setIsOpen(!isOpen);
  }; // Function to toggle navbar collapse

  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Jack Grebenc</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
              end
              onClick={toggleNav} // Hide dropdown when item is clicked
            >
              Home
            </NavLink>
            {Projects.map((item) => (
              <NavLink
                key={item.title}
                className={`nav-link ${
                  location.pathname === item.link ? "active" : ""
                }`}
                to={item.link}
                onClick={toggleNav} // Hide dropdown when item is clicked
              >
                {item.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
