import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sleep } from "../../../general-helpers.js";

import ApiML from "../../../Api/ApiML.js";
import NoPatientDataFound from "../../common/misc/NoPatientDataFound.jsx";
import ScreenLoader from "../../common/ScreenLoader.jsx";

export default function ChestXRayScan() {
  const DB = "chestXRayScanPatientsDB";

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  const [result, setResult] = useState();
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [patients, setPatients] = useState("");
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const fillSampleData = (e) => {
    e.preventDefault();

    setFullName("John Doe");

    setResult("");
    setIsResultAvailable(false);
  };

  const resetForm = () => {
    setImage(null);
    setImagePreview(null);

    setResult("");
    setIsResultAvailable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("file", image);

    setShowScreenLoader(true);
    await sleep(3000);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await ApiML.post("disease/predictImage", formData, config)
      .then((res) => {
        setShowScreenLoader(false);
        setResult(res.data.data);
        console.log(result);
        setIsResultAvailable(true);
      })
      .catch((err) => {
        setShowScreenLoader(false);
        console.log("Error:", err);
      });
  };

  const loadCurrentPatientDetails = (e, patientId) => {
    e.preventDefault();

    let patientsData = JSON.parse(window.localStorage.getItem(DB));
    const patientData = patientsData.find((obj) => obj.id === patientId);

    // setPatientDetails(patientData);
    // setIsPatientDetailsAvailable(true);
  };

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="newPatientModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            {showScreenLoader && <ScreenLoader />}
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user-plus fa-fw"></i> Record new
                patient
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                {!isResultAvailable && (
                  <div className="my-5 row">
                    <div className="col-md-6 offset-md-3">
                      {imagePreview && (
                        <img className="img-fluid" src={imagePreview} alt="" />
                      )}
                      <div className="my-2 d-grid gap-2">
                        <input
                          type="file"
                          name="file"
                          id="imageFile"
                          className="d-none"
                          onChange={(e) => handleImageUpload(e)}
                        />
                        {!imagePreview && (
                          <label
                            htmlFor="imageFile"
                            className="btn btn-primary py-2"
                            type="button"
                          >
                            Upload an Image
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-warning float-end"
                onClick={fillSampleData}
              >
                <i className="fa-solid fa-fill-drip fa-fw"></i> Fill Sample Data
              </button>
              <button className="btn btn-secondary" onClick={resetForm}>
                <i className="fa-regular fa-file fa-fw"></i> Reset
              </button>
              {imagePreview && (
                <button type="button" className="btn btn-success" onClick={handleSubmit}>
                  <i className="fa-solid fa-magnifying-glass fa-fw"></i> Analyze
                </button>
              )}
              {/* {isResultAvailable ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={savePatientData}
                >
                  <i className="fa-solid fa-floppy-disk fa-fw"></i> Save Data
                </button>
              ) : (
              )} */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 container">
        <Link to="/health-analysis" className="mb-0 text-muted">
          <i className="fa-solid fa-arrow-left fa-fw"></i> Back to Health
          Analysis
        </Link>
        <h1 className="mt-2 font-bold">
          Chest X-Ray <span className="text-theme-red">Scan</span>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#newPatientModal"
              onClick={resetForm}
            >
              <i className="fa-solid fa-user-plus fa-fw"></i> New Patient
            </button>
          </span>
        </h1>
        {patients}
      </div>
    </React.Fragment>
  );
}
