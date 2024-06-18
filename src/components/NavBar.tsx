import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState } from "react";
import { Projects } from "./Projects";

function NavBar() {
  const location = useLocation();

  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg">
      <Container>
        <Navbar.Brand>Jack Grebenc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
              end
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
