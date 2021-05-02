import React from "react";
import { Col, Row } from "react-bootstrap";
import aboutImage from "../../../images/aboutImage1.png";
import "./About.css";
function About() {
  return (
    <section className="about-section content">
      <Row>
        <Col sm className="about-image">
          <img src={aboutImage} alt="aboutimage" />
        </Col>
        <Col sm className="about-text">
          <h2>About Us</h2>
          <h3>I Design & Development</h3>
          <p>
            l love programming and development. I try to my best for criative
            some thinge new technology.Every day i learning some thing new and
            more more practice.Proven ability to leverage full-stack knowledge
            and experience to build interactive and user interface website
            designs to scale.
          </p>
          <button className='brand-button'>More Details</button>
        </Col>
      </Row>
    </section>
  );
}

export default About;
