import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/" exact>
            React-Bootstrap
          </NavLink>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/product">
                Product
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
              <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    history.replace("/hospitalPage");
                  }}
                >
                  Hospital List
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    history.replace("/category");
                  }}
                >
                  News Category
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
