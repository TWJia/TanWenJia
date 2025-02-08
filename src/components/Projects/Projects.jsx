import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollToTop from "../ScrollToTop";
import "./Projects.css";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

const ProjectCards = (props) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate(props.detailsLink);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {Array.isArray(props.application) && props.application.length > 0 && (
          <Card.Text style={{ textAlign: "justify",color: "violet" }}>
            <br></br>
            <strong>Application Used:</strong>
            <br></br>
            {props.application.map((app, index) => (
              <span key={index}>
                {index !== 0 && <br />}
                {app}
              </span>
            ))} 
          </Card.Text>
        )}            
        <br></br>
        <div className="button-container">
        <Button variant="primary" onClick={handleDetailsClick}>
          Details
        </Button>
        {props.ghLink && (
          <>
            {"\n"}
            {"\n"}
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          </>
        )}
        {"\n"}
        {"\n"}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; {"Demo"}
          </Button>
        )}</div>
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Container>
        <h1 className="project-heading">
          My <strong className="darkPink">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NjczMzIwNTQ2/cutest-dog-breeds-jpg.jpg"
              isBlog={false}
              title="Pet Adoption Application"
              description="The aim of this project is to help a charity society, that cares for the welfare of abandoned pets and allow visitors to make online request for adoption of the abandoned pets."
              application={["ReactJS", "Local storage(Database)"]}
              detailsLink="/projects/petadopt"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://www.itarian.com/images/ticket-booking-system-wordpress.png"
              isBlog={false}
              title="Ticket Booking Movie Application"
              description="The aim of this project is to design and develop a cinema ticket booking system based on the B-C-E framework."
              application={["ReactJS", "Java Springboot", "MongoDB"]}
              detailsLink="/projects/moviebooking"
              ghLink="https://github.com/notheun/movie-booking-system.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://golfgamebook.com/wp-content/uploads/2022/10/TM-site-header-image_3-1024x745.png"
              isBlog={false}
              title="Tournament Management Platform"
              description="To develop an online platform to plan and run a league or a tournament of several different sports. The purpose of creating Tournahub is to address the challenges and inefficiencies inherent in traditional event management processes. This platform aims to streamline and enhance the management of tournaments and leagues by providing digital solutions."
              application={["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]}
              detailsLink="/projects/tournament"
              ghLink="https://github.com/TWJia/TournaHub/tree/main"
              demoLink="https://www.fyp23s424.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath="https://i.ytimg.com/vi/Vt-r2vCqSh8/maxresdefault.jpg"
              isBlog={false}
              title="One Stop Hub"
              description="The project aims to address challenges faced by businesses in Singapore by enhancing accessibility to public services, improving credibility, and ensuring reliable engagement with users. Developing a user-friendly digital system to assist businesses, particularly SMEs, in navigating processes such as business setup, accessing government services, and support schemes efficiently. Improving usability and user experience through high intent classification rates, rapid response times, scalability, and intelligent search recognition within public service systems."
              application={["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]}
              detailsLink="/projects/onestop"
              ghLink="https://github.com/TWJia/30K"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
