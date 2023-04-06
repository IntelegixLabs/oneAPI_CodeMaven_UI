import React, { useState } from "react";

import HeadImage from "../../assets/images/head-image.png";

export default function HomeComponent() {
  const [fullName, setFullName] = useState();
  const [age, setAge] = useState();
  const [sex, setSex] = useState();
  const [race, setRace] = useState();

  const [diastolicBP, setDiastolicBP] = useState();
  const [redBloocCells, setRedBloodCells] = useState();
  const [sedimantationRate, setSedimantationRate] = useState();

  const [serumAlbumin, setSerumAlbumin] = useState();
  const [serumCholesterol, setSerumCholesterol] = useState();
  const [serumIron, setSerumIron] = useState();
  const [serumMagnesium, setSerumMagnesium] = useState();
  const [serumProtein, setSerumProtein] = useState();

  const [systolicBP, setSystolicBP] = useState();
  const [tibc, setTibc] = useState();
  const [ts, setTs] = useState();

  const [whiteBloodCells, setWhiteBloodCells] = useState();
  const [bmi, setBmi] = useState();
  const [pulsePressure, setPulsePressure] = useState();

  return (
    <React.Fragment>
      <div className="mt-4 mb-5 mt-sm-5 container">
        <div className="row mx-2 mx-sm-0">
          <div className="col-md-6">
            <h1 className="mb-5 font-bold">
              Now, the noble aspiration
              <br />
              is <span className="text-theme-red">humanity.</span>
            </h1>
            <p>
              Machine Learning has been revolutionizing on healthcare domain. ML
              models can now detect patterns that depicts an underlying
              diseases.
            </p>
            <p>
              In this way, the AI techniques can be considered as second pair of
              eyes that can decode patient health knowledge extracted from large
              data sets by summing up facts & observations of diseases.
            </p>
            <p>
              Due to COVID-19 pandemic, existing digital diagnosis methods are
              being more preferred as people are willing to follow Covid norms &
              stay safe.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={HeadImage} alt="Image" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
