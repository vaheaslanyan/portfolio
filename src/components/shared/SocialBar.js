import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialBar = () => {
  return (
    <React.Fragment>
      <div className="social-content">
        <div className="social-item">
          <a href="#">
            <FontAwesomeIcon icon={faGit} />
          </a>
        </div>
        <div className="social-item">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="social-item">
          <a href="#">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialBar;
