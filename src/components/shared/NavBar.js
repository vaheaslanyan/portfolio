import React from "react";

//fontawesome

import SocialBar from "./SocialBar";

//Bootstrap
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar-main">
        <SocialBar />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
