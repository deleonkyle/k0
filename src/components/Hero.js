import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section
      id="home"
      className="hero d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: '100vh',
        backgroundImage: 'url(/cover.png)', // Reference to the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        }}
      ></div>
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row>
          <Col>
            <h1 className="display-4" data-aos="fade-down">
              Hi, I'm Kyle!
            </h1>
            <p className="lead" data-aos="fade-up">
              Aspiring Full-Stack Developer | Web Designer
            </p>
            <Button href="#contact" variant="danger" className="btn-lg" data-aos="zoom-in">
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
