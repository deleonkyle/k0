import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from './ThemeContext';

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="align-items-center text-center">
          {/* Logo Section */}
          <Col md={4} className="mb-3 mb-md-0">
            <img 
              src="/logo.png" 
              alt="Kyle Kristopher De Leon Logo" 
              className="img-fluid" 
              style={{ maxWidth: '100px' }} 
            />
          </Col>

          {/* Copyright Section */}
          <Col md={4}>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Kyle Kristopher De Leon. All rights reserved.
          </p>
          </Col>

          {/* Attribution Section */}
          <Col md={4}>
            <p className="mb-0">
              Built with{' '}
              <a 
                href="https://reactjs.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-decoration-none ${darkMode ? 'text-light' : 'text-dark'}`}
                aria-label="ReactJS"
              >
                React
              </a>
              ,{' '}
              <a 
                href="https://getbootstrap.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-decoration-none ${darkMode ? 'text-light' : 'text-dark'}`}
                aria-label="Bootstrap"
              >
                Bootstrap
              </a>
              ,{' '}
              <a 
                href="https://react-icons.github.io/react-icons" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-decoration-none ${darkMode ? 'text-light' : 'text-dark'}`}
                aria-label="React Icons"
              >
                React Icons
              </a>
              , and more.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
