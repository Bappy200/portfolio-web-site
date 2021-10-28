import React from "react";
import { Row } from "react-bootstrap";
import banglaSport from '../../../images/banglaSports.PNG';
import calculator from '../../../images/calculator.PNG';
import softwareService from '../../../images/softwareService.PNG';
import team from '../../../images/team.PNG';
import ProectItem from "./ProjectsItem";
function Project() {
    const projectsData = [
        {
            title:'Software Service',
            image: softwareService,
            details:'This is a software service provider web site.User can only order software service.',
            technology:'React Js, Express Js, Mongo DB, Firebase, Heroku, Bootstrap',
            gitHub:'https://github.com/Bappy200/software_servic',
            liveLink:'https://sleepy-kare-d8190a.netlify.app/',
        },
        {
            title:'Calculator',
            image: calculator,
            details:'Add two number, Subtraction two number,Multiplication two number.',
            technology:'JavaScript, Html, CSS',
            gitHub:'https://github.com/Bappy200/Calcutator',
            liveLink:' https://bappy200.github.io/Calcutator',
        },
        {
            title:'Bangla Sport',
            image: banglaSport,
            details:'This project name is bangla triger sports.we are provide lot of information about sporte team .',
            technology:'React Js, Express Js, Mongo DB, Firebase, Heroku, Bootstrap',
            gitHub:'https://github.com/Bappy200/bangla-sports',
            liveLink:'https://inspiring-shaw-cdfb1e.netlify.app/',
        },
        {
            title:'Football Team',
            image: team,
            details:'This is a software service provider web site.User can only order software service and ',
            technology:'React Js, Express Js, Mongo DB, Firebase, Heroku, Bootstrap',
            gitHub:'https://github.com/Bappy200/bangla_tiger_sports',
            liveLink:'https://inspiring-shaw-cdfb1e.netlify.app/',
        },
    ]
  return (
    <section id='projects' className="projects-section content">
      <div className="heading-text">
        <h2>Our Projects</h2>
      </div>
      <Row>
            {
                projectsData.map(project => <ProectItem key={project.title} {...project}></ProectItem> )
            }
      </Row>
    </section>
  );
}

export default Project;
