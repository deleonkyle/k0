import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Linkedin, Github, Instagram, Mail, MapPin, Send, Globe } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function Contact() {
  const { darkMode } = useTheme();
  const [formStatus, setFormStatus] = useState({ show: false, message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormStatus({
        show: true,
        message: 'Thank you for your message! I will get back to you soon.',
        type: 'success',
      });
      // Clear the form fields here if necessary
      e.currentTarget.reset();
    }, 2000); // Simulate a delay
  };

  const contactInfo = [
    {
      icon: <Mail className="text-danger" size={24} />, // Change color to danger
      title: 'Email',
      content: 'deleonkylekristopher@gmail.com',
      link: 'mailto:deleonkylekristopher@gmail.com'
    },
    {
      icon: <MapPin className="text-danger" size={24} />, // Change color to danger
      title: 'Location',
      content: 'Philippines',
      link: null
    },
    {
      icon: <Globe className="text-danger" size={24} />, // Change color to danger
      title: 'Website',
      content: 'github.com/deleonkyle',
      link: 'https://github.com/deleonkyle'
    }
  ];

  return (
    <section id="contact" className={`py-5 ${darkMode ? 'bg-dark text-white' : ''}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="display-4 mb-3">Let's Connect!</h2>
            <p className="lead">
              I'm always interested in hearing about new opportunities and collaborations.
              Feel free to reach out!
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={5}>
            <div>
              <h3 className="mb-4">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="d-flex align-items-center mb-4">
                  <div className="me-3">{info.icon}</div>
                  <div>
                    <h6 className="mb-1">{info.title}</h6>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className={`text-decoration-none ${darkMode ? 'text-light' : 'text-dark'}`}
                        aria-label={info.title}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="mb-0">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}

              <h3 className="mb-4 mt-5">Social Media</h3>
              <div className="d-flex gap-3">
                <a
                  href="https://www.linkedin.com/in/kyle-kristopher-de-leon-41731a324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-${darkMode ? 'outline-light' : 'outline-dark'} d-flex align-items-center`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="text-danger me-2" size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/deleonkyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-${darkMode ? 'outline-light' : 'outline-dark'} d-flex align-items-center`}
                  aria-label="GitHub Profile"
                >
                  <Github className="text-danger me-2" size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/your-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-${darkMode ? 'outline-light' : 'outline-dark'} d-flex align-items-center`}
                  aria-label="Instagram Profile"
                >
                  <Instagram className="text-danger me-2" size={20} />
                  Instagram
                </a>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className={``}>
              <div className="p-4">
                <h3 className="mb-4">Send Me a Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter your name"
                          required
                          className={darkMode ? 'bg-dark text-white' : ''}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter your email"
                          required
                          className={darkMode ? 'bg-dark text-white' : ''}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="What is this regarding?"
                      required
                      className={darkMode ? 'bg-dark text-white' : ''}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Your message here..."
                      required
                      className={darkMode ? 'bg-dark text-white' : ''}
                    />
                  </Form.Group>
                  <Button type="submit" variant="danger" className="d-flex align-items-center" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="me-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </Form>
                {formStatus.show && (
                  <Alert variant={formStatus.type} className="mt-3">
                    {formStatus.message}
                  </Alert>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
