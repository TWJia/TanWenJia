import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWix } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="darkPink">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TWJia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://tanwenjia98.wixsite.com/tanwenjia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWix />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/wen-jia-tan-27904521b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
