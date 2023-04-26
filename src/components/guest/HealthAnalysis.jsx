import React from "react";

import CardLink from "../common/card/CardLink.jsx";
import { useLocation } from "react-router-dom";

export default function HealthAnalysis() {
  const currentRoute = useLocation().pathname;
  const healthAnalysisCategory = [
    {
      title: "Breast Cancer Prediction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      path: "/breast-cancer-prediction",
    },
    {
      title: "Chronic Kidney Disease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      path: "/chronic-kidney-disease",
    },
    {
      title: "Diabetic Prediction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      path: "/diabetic-prediction",
    },
    {
      title: "Heart Disease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      path: "/heart-disease",
    },
    {
      title: "Liver Disease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      path: "/liver-disease",
    },
    {
      title: "Predict Heart Attack",
      description:
        "The major risk factors for heart disease include high blood pressure, raised blood cholesterol, diabetes, smoking and obesity.",
      path: "/heart-attack-risk-predictor",
    },
    {
      title: "Detect Pneumonia X-Ray",
      description:
        "An x-ray exam will allow your doctor to see your lungs, heart and blood vessels to help determine if you have pneumonia",
      path: "/pneumonia-x-ray-detector",
    },
  ];

  const displayHealthAnalysisCategories = () => {
    let healthAnalysisCategories = healthAnalysisCategory.map((category, index) => {
      return (
        <div className="col-12 col-sm-6 col-lg-4" key={index}>
          <CardLink
            to={currentRoute + category.path}
            title={category.title}
            description={category.description}
          />
        </div>
      );
    });

    if (healthAnalysisCategory.length > 0) {
      return (
        <div className="row animated fadeInDown g-4">
          {healthAnalysisCategories}
        </div>
      );
    } else {
      return <div className="text-center">No categories found</div>;
    }
  };

  return (
    <React.Fragment>
      <div className="my-5 container">
        <h1 className="mb-5 font-bold">
          Health <span className="text-theme-red">Analysis</span>
        </h1>

        {displayHealthAnalysisCategories()}
      </div>
    </React.Fragment>
  );
}
