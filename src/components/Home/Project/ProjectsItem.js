import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from "react-bootstrap";
import './Project.css';

function ProectItem({title, image, details, technology, gitHub, liveLink}) {
    return (
        <Col sm={12} md={6} >
        <Card className='project-item'>
          <Card.Img className='project-image' variant="top" src={image}/>
          <Card.Body>
            <Card.Title className='project-name'>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <div className="technology">
                <h6>Technology: </h6>
                <Card.Text>{technology}</Card.Text>
            </div>
            <div className="links">
              <a href={gitHub} target='blank' title='gitHub'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
              <a href={liveLink} target='blank' title='live'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default ProectItem
