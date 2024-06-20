import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ButtonIcon } from "./ButtonIcon";
import { useEffect, useState } from "react";
import { Projects } from "./Projects";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleNav = () => {
    if (isOpen) setIsOpen(!isOpen);
  };

  const buttonIcons = [
    {
      imageName: "fa-brands fa-github",
      link: "https://github.com/jackgrebenc/Optimized-CAE-using-YCbCr-colour-space",
      newPage: true,
      size: "28px",
    },
    {
      imageName: "fa-brands fa-linkedin",
      link: "https://www.linkedin.com/in/jack-grebenc-45b636174/",
      newPage: true,
      size: "28px",
    },
    {
      imageName: "fa fa-envelope",
      link: "mailto:grebencjack@gmail.com",
      newPage: false,
      size: "28px",
    },
  ];

  return (
    <Navbar className="fixed-top" bg="light" data-bs-theme="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Jack Grebenc</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse in={isOpen} id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className={`nav-link custom-nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
              onClick={toggleNav} // Hide dropdown when item is clicked
            >
              Home
            </NavLink>
            <NavLink
              className={`nav-link custom-nav-link ${
                location.pathname === "/about-me" ? "active" : ""
              }`}
              to="/about"
              onClick={toggleNav} // Hide dropdown when item is clicked
            >
              About
            </NavLink>
            <NavDropdown title="Projects" id="projects-nav-dropdown">
              {Projects.map((item) => (
                <NavDropdown.Item key={item.title} onClick={toggleNav}>
                  <NavLink
                    key={item.title}
                    className={`nav-link custom-nav-link ${
                      location.pathname === item.link ? "active" : ""
                    }`}
                    to={item.link}
                    onClick={toggleNav} // Hide dropdown when item is clicked
                  >
                    {item.title}
                  </NavLink>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="hidden-xs collapse navbar-collapse justify-content-end">
          <Navbar.Brand href="#">
            {buttonIcons?.map((buttonIcon, index) => (
              <ButtonIcon
                key={index}
                imageName={buttonIcon.imageName}
                newPage={buttonIcon.newPage}
                link={buttonIcon.link}
                size={buttonIcon.size}
              />
            ))}
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
