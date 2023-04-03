import React from "react";

import AboutComponent from "../../components/guest/AboutComponent.jsx";
import Navbar from "../../components/guest/Navbar.jsx";

export default function About() {
  return (
    <React.Fragment>
      <Navbar />
      <AboutComponent />
    </React.Fragment>
  );
}
