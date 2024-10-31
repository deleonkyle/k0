import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, Pagination, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa'; // Import React Icons
import { useTheme } from './ThemeContext'; // Import the context

function Projects() {
  const { darkMode } = useTheme(); // Get dark mode state

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Library Management System",
      description: "A Java-based application designed to manage library operations, including user authentication, book management, and a borrowing system.",
      image: "/assets/screenshots/libsys.png",
      link: "https://github.com/deleonkyle/LibraryManagementSystem",
      demo: "#", // Add demo link if available
      tags: ["Java", "MySQL", "Backend"],
    },
    {
      id: 2,
      title: "Cloud-Based Virtual Tour & Reservation System",
      description: "A cloud-based application that integrates virtual tours with a reservation system.",
      image: "/assets/screenshots/astra.png",
      link: "https://github.com/deleonkyle/astra_web_app",
      demo: "#", // Add demo link if available
      tags: ["Cloud", "Full Stack"],
    },
    {
      id: 3,
      title: "Digital Business Card Generator",
      description: "A customizable Digital Business Card Generator in React, allowing users to create and personalize cards.",
      image: "/assets/screenshots/dcg.png",
      link: "https://github.com/deleonkyle/Digital-Business-Card-Generator",
      demo: "https://digital-business-card-generator.onrender.com/", // Replace with the actual demo link
      tags: ["React", "Frontend"],
    },
    {
      id: 4,
      title: "Recipe Finder",
      description: "A web application that helps users discover and save their favorite recipes based on ingredients or dish names.",
      image: "/assets/screenshots/recipe-finder.png", // Replace with the actual path of the screenshot
      link: "https://github.com/deleonkyle/recipe-finder",
      demo: "https://recipe-finder-at2q.onrender.com", // Replace with the actual demo link if available
      tags: ["React", "Frontend", "API"],
    },
    {
      id: 5,
      title: "Podcast-to-Summary Generator",
      description: "A Python-based tool that transcribes podcasts and generates summaries, built with Streamlit.",
      image: "/assets/screenshots/psg.png", // Replace with the actual path of the screenshot
      link: "https://github.com/deleonkyle/podcast_summary_generator",
      demo: "https://podcastsummarygenerator.streamlit.app/",
      tags: ["Python", "Streamlit", "NLP"],
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3; // Number of projects to display per page
  const totalProjects = projects.length;
  const [loading, setLoading] = useState(true);

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };

    fetchData();
  }, []);

  // Calculate the indices of the projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Create pagination items
  const paginationItems = [];
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <section id="projects" className={`projects ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row>
          <Col>
            <h2 className={`section-title text-center mb-4`}>Featured Projects</h2>

            <Row>
              {currentProjects.map((project) => (
                <Col md={6} lg={4} key={project.id} className="mb-4">
                  <Card className={`h-100 ${darkMode ? 'bg-dark text-white' : 'bg-light'}`}>
                    <Image
                      src={project.image}
                      alt={`${project.title} Screenshot`}
                      fluid
                      className="card-img-top"
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="h5">{project.title}</Card.Title>
                      <div className="mb-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="badge bg-danger me-1">{tag}</span>
                        ))}
                      </div>
                      <Card.Text className="flex-grow-1">
                        {project.description}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button variant="danger" href={project.link} target="_blank" aria-label={`View ${project.title} on GitHub`} className="me-2">
                          <FaGithub /> View on GitHub
                        </Button>
                        {project.demo && project.demo !== "#" ? (
                          <Button variant="outline-danger" href={project.demo} target="_blank" aria-label={`View live demo of ${project.title}`}>
                            Live Demo
                          </Button>
                        ) : (
                          <span className="text-muted">Live Demo not available</span> // Message when demo is not available
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {totalProjects > projectsPerPage && (
              <Pagination className="justify-content-center mt-4 custom-pagination">
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                {paginationItems.map((item, index) => (
                  <Pagination.Item key={index} active={item.props.active} onClick={() => handlePageChange(item.props.children)}>
                    {item.props.children}
                  </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
              </Pagination>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
