import React from "react";

import HomeComponent from "../../components/guest/HomeComponent.jsx";
import Navbar from "../../components/guest/Navbar.jsx";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <HomeComponent />
    </React.Fragment>
  );
}
