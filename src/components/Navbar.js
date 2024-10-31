import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import './Navbar.css';

function MyNavbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Navbar
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      expand="lg"
      fixed="top"
      className="py-3 shadow-sm"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center font-weight-bold">
          <img
            src="/logo.png"  // Your logo path
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Main navigation links */}
          <Nav className="mr-auto">
            <Nav.Link href="#about" className="mx-2 nav-item">About</Nav.Link>
            <Nav.Link href="#projects" className="mx-2 nav-item">Projects</Nav.Link>
            <Nav.Link href="#skills" className="mx-2 nav-item">Skills</Nav.Link>
            <Nav.Link href="#contact" className="mx-2 nav-item">Contact</Nav.Link>
          </Nav>

          {/* Right-aligned buttons */}
          <Nav className="ms-auto">
            <Nav.Link
              as="button"
              className="dark-mode-toggle d-flex align-items-center"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun size={20} className="mr-2" /> : <FaMoon size={20} className="mr-2" />}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
