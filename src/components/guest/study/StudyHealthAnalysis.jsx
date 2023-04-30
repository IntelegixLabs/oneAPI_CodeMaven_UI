import React from "react";
import { Link } from "react-router-dom";

export default function StudyHealthAnalysis() {
  return (
    <React.Fragment>
      <h1>Study Health Analysis</h1>
      <Link to="/study/health-analysis/breast-cancer">Breast Cancer</Link>
      <Link to="/study/health-analysis/diabetic">Study Diabetic</Link>
    </React.Fragment>
  );
}
