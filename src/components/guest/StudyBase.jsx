import React from "react";
import { Link } from "react-router-dom";

export default function Study() {
  return (
    <div className="mt-4 mb-5 container">
      <h1 className="mb-5 font-bold">
        Study <span className="text-theme-red">Base</span>
      </h1>
      <div className="row mx-2 mx-sm-0">
        <div className="col-12 col-sm-6">
          <Link to="/study/health-analysis" className="row">
            <div className="col-md-8">
              <h4>Disease Dictionary</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
