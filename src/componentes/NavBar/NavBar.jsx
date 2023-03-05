import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
import logo from "../../../images/DesireeShop.jpeg";

import "../../componentes/NavBar/NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/">
          <img src={logo} className="imagen-logo"></img>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto Nav-link">
            <NavLink
              to="/categoria/Aceites"
              className={({ isActive }) =>
                isActive ? "btn btn-danger" : "btn btn-outline-danger m-1"
              }
            >
              Aceites
            </NavLink>
            <NavLink
              to="/categoria/Lubricantes"
              className={({ isActive }) =>
                isActive ? "btn btn-danger" : "btn btn-outline-danger  m-1"
              }
            >
              Lubricantes
            </NavLink>

            <Link to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
