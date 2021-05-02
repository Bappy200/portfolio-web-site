import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import myImage from '../../../images/my-image.png';
import "./MainHeader.css";
import ParticelesAnimation from "./ParticelesAnimation";
function MainHeader() {
  return (
    <>
      <ParticelesAnimation></ParticelesAnimation>
      <main>
        <div className="header-content content">
          <div className="text-area">
            <h1>
              Hi,
              <br />
              I'm Sajjadul Islam Bappy
              <br />
              Full Stack Developer
            </h1>
            <a className='brand-button' href="https://drive.google.com/file/d/1PxuzUSq_rsd-s26oIEAlhuRp7SPytMZM/view?usp=sharing" target="blank"><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>  Resume</a>
          </div>
          <div className="image-area">
            <img src={myImage} alt="im" />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainHeader;
