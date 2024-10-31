import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Code2, Globe, BookOpen, Coffee, Download, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function About() {
  const { darkMode } = useTheme();

  const facts = [
    { icon: <Code2 size={24} />, count: '5+', label: 'Projects Completed' },
    { icon: <Coffee size={24} />, count: '1000+', label: 'Cups of Coffee' },
    { icon: <Globe size={24} />, count: '10+', label: 'Technologies Mastered' },
    { icon: <BookOpen size={24} />, count: '24/7', label: 'Learning New Tech' },
  ];

  return (
    <section id="about" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="mb-5">
          <Col lg={4} className="text-center mb-4 mb-lg-0">
            <div className="position-relative" style={{ maxWidth: '300px', margin: '0 auto' }}>
              <img
                src="/me.jpg"
                alt="Kyle Kristopher De Leon"
                className="img-fluid rounded-circle shadow-lg"
                width={300}
                height={300}
              />
              <div
                className={`position-absolute bottom-0 start-50 translate-middle-x p-3 rounded-pill ${
                  darkMode ? 'bg-danger' : 'bg-white'
                } shadow`}
              >
                <p className="mb-0 fw-bold">Full-Stack Developer</p>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="ps-lg-4">
              <h2 className="display-4 mb-4">About Me</h2>
              <p className="lead mb-4">
                Hi there! I'm <strong>Kyle Kristopher De Leon</strong>, a passionate web developer 
                specializing in creating intuitive and responsive web applications. With a strong foundation 
                in modern web technologies, I transform ideas into elegant digital solutions.
              </p>
              <Row className="g-4 mb-4">
                {facts.map((fact, index) => (
                  <Col sm={6} md={3} key={index}>
                    <Card className={`border-0 text-center h-100 ${darkMode ? 'bg-dark-subtle' : 'bg-white'} shadow-sm`}>
                      <Card.Body>
                        <div className="text-danger mb-2">{fact.icon}</div>
                        <h4 className="mb-2">{fact.count}</h4>
                        <p className="mb-0 small">{fact.label}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col>
            <p className="lead mb-4">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="d-flex justify-content-center gap-3">
            <Button 
                variant="danger" 
                href="/assets/DELEON_CV.pdf" 
                download 
                className="d-inline-flex align-items-center"
              >
                <Download size={18} className="me-2" />
                Download CV
              </Button>
              <Button variant="outline-danger" className="d-inline-flex align-items-center">
                <Mail size={18} className="me-2" />
                Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
