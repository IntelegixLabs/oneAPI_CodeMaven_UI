import React from "react";
import { Link } from "react-router-dom";

export default function Study() {
  return (
    <div className="mt-4 mb-5 mt-sm-5 container">
      <div className="row mx-2 mx-sm-0">
        <div className="col-12 col-sm-6">
          <Link to="/study/health-analysis">Health Analysis</Link>
        </div>
        <div className="col-12 col-sm-6">
          <h1>Anything Component</h1>
        </div>
      </div>
    </div>
  );
}
