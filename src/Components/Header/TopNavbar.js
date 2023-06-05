import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const TopNavbar = () => {
  return (
    

    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <NavLink to="/" className="navbar-brand">Shopy</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/link" className="nav-link">Link</NavLink>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item to="">Action</NavDropdown.Item>
              <NavDropdown.Item to="">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="ujd">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/Products" className="nav-link">Products</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default TopNavbar;
