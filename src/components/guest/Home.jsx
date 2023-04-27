import React from "react";
import { Link } from "react-router-dom";

import HeadImage from "../../assets/images/head-image.png";

export default function Home() {
  return (
    <React.Fragment>
      <div className="mt-4 mb-5 mt-sm-5 container">
        <div className="row mx-2 mx-sm-0 animated fadeInDown">
          <div className="col-md-6">
            <h1 className="mb-5 font-bold">
              Now, the noble aspiration
              <br />
              is <span className="text-theme-red">humanity.</span>
            </h1>
            <p className="p-large">
              Machine Learning has been revolutionizing on healthcare domain. ML
              models can now detect patterns that depicts an underlying
              diseases.
            </p>
            <br />
            <Link className="btn btn-primary btn-lg" to="/health-analysis">
              Health Analysis <i className="fa-solid fa-arrow-right fa-fw"></i>
            </Link>
            &nbsp;&nbsp;
            <Link className="btn btn-success btn-lg" to="/study">
              <i className="fa-solid fa-book fa-fw"></i> Knowledge Base
            </Link>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={HeadImage} alt="Home Image" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
