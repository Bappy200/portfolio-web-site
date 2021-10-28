import { faFacebook, faGithub, faHackerrank, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a href="https://github.com/Bappy200" target='_blank'>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href="https://www.hackerrank.com/sbappyi" target='_blank'>
            <FontAwesomeIcon icon={faHackerrank}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/sajjadul-ib/" target='_blank'>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a href="https://www.facebook.com/mdsajjadulislam.bappy.7" target='_blank'>
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#home">Home</a>
          </li>
          <li class="list-inline-item">
            <a href="#about">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#skilled">Sklled</a>
          </li>
        </ul>
        <p class="copyright">Sajjadul islam Bappy © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Footer;
