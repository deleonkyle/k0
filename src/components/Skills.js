import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge, Tab, Nav } from 'react-bootstrap';
import { Database, Layout, Server, Terminal } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function Skills() {
  const { darkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: <Layout className="mb-2" size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'React.js', level: 85, details: 'Hooks, Context, Redux, Passion for creating interactive UIs' },
        { name: 'JavaScript', level: 80, details: 'ES6+, TypeScript, Always eager to learn more' },
        { name: 'HTML5/CSS3', level: 90, details: 'Semantic HTML, Flexbox, Grid, Aesthetic design sense' },
        { name: 'Bootstrap', level: 85, details: 'Responsive Design, Components, Efficient styling' },
        { name: 'Tailwind CSS', level: 75, details: 'Utility-First CSS, Focus on productivity' }
      ]
    },
    backend: {
      icon: <Server className="mb-2" size={24} />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications',
      skills: [
        { name: 'Python', level: 75, details: 'Flask, Django, Enthusiastic about building APIs' },
        { name: 'Java', level: 70, details: 'Spring Boot, Interested in enterprise solutions' },
        { name: 'Node.js', level: 65, details: 'Express.js, REST APIs, Enjoy collaborative projects' },
        { name: 'MySQL', level: 80, details: 'Database Design, Optimization, Committed to clean code' }
      ]
    },
    database: {
      icon: <Database className="mb-2" size={24} />,
      title: 'Database Management',
      description: 'Managing and optimizing databases',
      skills: [
        { name: 'MySQL', level: 80, details: 'Data modeling, Query optimization' },
        { name: 'MariaDB', level: 70, details: 'Enhanced version of MySQL, Optimized for performance' },
        { name: 'SQLite', level: 65, details: 'Lightweight, Self-contained SQL database' }
      ]
    },
    tools: {
      icon: <Terminal className="mb-2" size={24} />,
      title: 'Development Tools',
      description: 'Essential tools for modern development',
      skills: [
        { name: 'Git', level: 85, details: 'Version Control, GitHub, Enjoy collaborating on Git' },
        { name: 'VS Code', level: 90, details: 'Extensions, Debugging, Optimize my workflow' },
        { name: 'AWS', level: 60, details: 'EC2, S3, Lambda, Eager to learn cloud technologies' },
        { name: 'Docker', level: 65, details: 'Containerization, Passion for DevOps' }
      ]
    }
  };

  return (
    <section id="skills" className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-4 mb-3">Technical Skills</h2>
            <p className="lead mb-5">
              A comprehensive overview of my technical expertise and development capabilities
            </p>
          </Col>
        </Row>

        <Tab.Container activeKey={activeCategory} onSelect={(k) => setActiveCategory(k)}>
          <Row>
            <Col lg={3}>
              <Nav variant="pills" className="flex-column mb-4">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <Nav.Item key={key}>
                    <Nav.Link 
                      eventKey={key}
                      className={`d-flex align-items-center mb-2 
                        ${activeCategory === key ? 'active-tab' : ''}`}
                      style={{
                        color: darkMode ? 'white' : 'black' // Set text color based on dark mode
                      }}
                    >
                      {category.icon}
                      <span className={`ms-2 ${activeCategory === key ? 'text-danger' : (darkMode ? 'text-white' : 'text-black')}`}>
                        {category.title}
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>

            <Col lg={9}>
              <Tab.Content>
                {Object.entries(skillCategories).map(([key, category]) => (
                  <Tab.Pane key={key} eventKey={key}>
                    <Card className={`border-0 shadow-sm ${darkMode ? 'bg-dark' : ''}`}>
                      <Card.Body>
                        <h3 className="mb-4 text-danger">{category.title}</h3>
                        <p className={`mb-4 ${darkMode ? 'text-white' : 'text-muted'}`}>{category.description}</p>
                        
                        <Row className="g-4">
                          {category.skills.map((skill, index) => (
                            <Col md={6} key={index}>
                              <Card className={`border-0 h-100 ${darkMode ? 'bg-dark-subtle' : 'bg-light'}`}>
                                <Card.Body>
                                  <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="mb-0">{skill.name}</h5>
                                    <Badge bg="danger">{skill.level}%</Badge>
                                  </div>
                                  <ProgressBar 
                                    now={skill.level} 
                                    variant={darkMode ? 'light' : 'danger'} 
                                    className="mb-3"
                                    style={{ height: '8px' }}
                                  />
                                  <div className="small">
                                    <p className="mb-0">
                                      <strong>Details:</strong> {skill.details}
                                    </p>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          ))} 
                        </Row>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      <style jsx>{`
        .active-tab {
          color: red !important; /* Change active tab text color to danger */
          background-color: rgba(255, 0, 0, 0.1) !important; /* Light red background */
        }
        .nav-link:hover {
          transform: scale(1.02); /* Adjust hover scale for animation */
          transition: transform 0.2s ease; /* Smooth transition */
        }
      `}</style>
    </section>
  );
}
