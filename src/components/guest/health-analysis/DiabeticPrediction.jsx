import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Tooltip } from "bootstrap";

import { sleep } from "./../../../general-helpers.js";

import ApiML from "../../../Api/ApiML.js";
import NoPatientDataFound from "../../common/misc/NoPatientDataFound.jsx";
import ScreenLoader from "../../common/ScreenLoader.jsx";

export default function DiabeticPrediction() {
  const DB = "diabeticPatientsDB";

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [pregnancies, setPregnancies] = useState(0);
  const [glucose, setGlucose] = useState(0);
  const [bloodPressure, setBloodPressure] = useState(0);
  const [skinThickness, setSkinThickness] = useState(0);
  const [insulin, setInsulin] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [diabetesPedigreeFunction, setDiabetesPedigreeFunction] = useState(0);

  const [result, setResult] = useState();
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [patients, setPatients] = useState("");
  const [isPatientDetailsAvailable, setIsPatientDetailsAvailable] =
    useState(false);
  const [patientDetails, setPatientDetails] = useState({});
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  useEffect(() => {
    index();

    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const index = () => {
    let patientsData = JSON.parse(window.localStorage.getItem(DB));
    let p = [];

    if (patientsData !== null && patientsData.length !== 0) {
      p = patientsData.map((patient, index) => {
        return (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h4 className="mb-0 mt-0">{patient.full_name}</h4>
                <p className="mt-0 text-success">
                  {patient.age}, {patient.gender.toUpperCase()}
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="mt-2 mb-0 text-muted type-7-2">
                      # {patient.id.toUpperCase()}
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <button
                      className="btn btn-success float-end"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#patientDetailModal"
                      onClick={(e) => loadCurrentPatientDetails(e, patient.id)}
                    >
                      Details <i className="fa-solid fa-arrow-right fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });

      setPatients(<div className="row mt-4 mb-5 g-3">{p}</div>);
      return;
    }

    setPatients(<NoPatientDataFound />);
  };

  const STORE_IN_DB = (patient) => {
    let patients = JSON.parse(window.localStorage.getItem(DB)) || [];
    patients.push(patient);

    window.localStorage.setItem(DB, JSON.stringify(patients));

    index();
  };

  const DELETE_FROM_DB = (patientId) => {
    let patients = JSON.parse(window.localStorage.getItem(DB));
    patients = patients ? patients : [];

    patients = patients.filter((obj) => obj.id !== patientId);

    window.localStorage.setItem(DB, JSON.stringify(patients));
    index();
  };

  const savePatientData = () => {
    let patientData = {
      id: Math.random()
        .toString(36)
        .substring(2, 8 + 2),
      full_name: fullName,
      age: age,
      gender: gender,
      pregnancies: pregnancies,
      glucose: glucose,
      blood_pressure: bloodPressure,
      skin_thickness: skinThickness,
      insulin: insulin,
      bmi: bmi,
      diabetes_pedigree_function: diabetesPedigreeFunction,
      result_status: result === "Diabetic" ? 1 : 0,
      result: result,
    };

    resetForm();
    STORE_IN_DB(patientData);
  };

  const deletePatientData = (e, patientId) => {
    e.preventDefault();
    DELETE_FROM_DB(patientId);
    index();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "pregnancies":
        setPregnancies(value);
        break;
      case "glucose":
        setGlucose(value);
        break;
      case "bloodPressure":
        setBloodPressure(value);
        break;
      case "skinThickness":
        setSkinThickness(value);
        break;
      case "insulin":
        setInsulin(value);
        break;
      case "bmi":
        setBmi(value);
        break;
      case "diabetesPedigreeFunction":
        setDiabetesPedigreeFunction(value);
        break;
      default:
        break;
    }
  };

  const fillSampleData = (e) => {
    e.preventDefault();

    setFullName("John Doe");
    setAge(22);
    setGender("m");
    setPregnancies(2);
    setGlucose(138);
    setBloodPressure(62);
    setSkinThickness(35);
    setInsulin(0);
    setBmi(33.6);
    setDiabetesPedigreeFunction(0.127);

    setResult("");
    setIsResultAvailable(false);
  };

  const resetForm = () => {
    setFullName("");
    setAge("");
    setGender("");
    setPregnancies(0);
    setGlucose(0);
    setBloodPressure(0);
    setSkinThickness(0);
    setInsulin(0);
    setBmi(0);
    setDiabetesPedigreeFunction(0);

    setResult("");
    setIsResultAvailable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      disease: "diabetic",
      parameters: {
        Age: age,
        Pregnancies: pregnancies,
        Glucose: glucose,
        BloodPressure: bloodPressure,
        SkinThickness: skinThickness,
        Insulin: insulin,
        BMI: bmi,
        DiabetesPedigreeFunction: diabetesPedigreeFunction,
      },
    };

    setShowScreenLoader(true);
    await sleep(3000);

    await ApiML.post("/disease", payload)
      .then((res) => {
        setShowScreenLoader(false);
        setResult(res.data);
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

    setPatientDetails(patientData);
    setIsPatientDetailsAvailable(true);
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
              <div className="container mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="mb-2 font-semi-bold">
                      Full name:
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      name="fullName"
                      value={fullName}
                      onChange={(e) => handleInputChange(e)}
                      placeholder="Full name"
                    />

                    <div className="mt-3 row">
                      <div className="col-md-6">
                        <label htmlFor="age" className="mb-1 font-semi-bold">
                          Age:
                        </label>
                        <input
                          type="number"
                          id="age"
                          className="form-control"
                          name="age"
                          value={age}
                          placeholder="Age"
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="gender" className="mb-1 font-semi-bold">
                          Gender:
                        </label>
                        <select
                          id="gender"
                          className="form-select"
                          name="gender"
                          value={gender}
                          onChange={(e) => handleInputChange(e)}
                        >
                          <option value="" defaultValue disabled>
                            Select Gender
                          </option>
                          <option value="m">Male</option>
                          <option value="f">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="mt-5">Diabetic Data</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="pregnancies"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Pregnancies:{" "}
                      <Link
                        className="mt-1 me-2"
                        target="_blank"
                        to="/study/health-analysis/diabetic-disease#pregnancies"
                      >
                        <i
                          className="fa-regular fa-circle-question"
                          data-bs-toggle="tooltip"
                          data-bs-title="Read More"
                          data-bs-placement="top"
                        ></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="pregnancies"
                      className="form-control"
                      name="pregnancies"
                      value={pregnancies}
                      placeholder="Pregnancies"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="glucose"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Glucose:
                      <Link
                        className="mt-1 me-2"
                        target="_blank"
                        to="/study/health-analysis/diabetic-disease#glucose"
                      >
                        <i
                          className="fa-regular fa-circle-question"
                          data-bs-toggle="tooltip"
                          data-bs-title="Read More"
                          data-bs-placement="top"
                        ></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="glucose"
                      className="form-control"
                      name="glucose"
                      value={glucose}
                      placeholder="Glucose"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="bloodPressure"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Blood Pressure:
                      <Link
                        className="mt-1 me-2"
                        target="_blank"
                        to="/study/health-analysis/diabetic-disease#blood-pressure"
                      >
                        <i
                          className="fa-regular fa-circle-question"
                          data-bs-toggle="tooltip"
                          data-bs-title="Read More"
                          data-bs-placement="top"
                        ></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="bloodPressure"
                      className="form-control"
                      name="bloodPressure"
                      value={bloodPressure}
                      placeholder="Blood Pressure"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="skinThickness"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Skin Thickness:
                      <Link
                        className="mt-1 me-2"
                        target="_blank"
                        to="/study/health-analysis/diabetic-disease#skin-thickness"
                      >
                        <i
                          className="fa-regular fa-circle-question"
                          data-bs-toggle="tooltip"
                          data-bs-title="Read More"
                          data-bs-placement="top"
                        ></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="skinThickness"
                      className="form-control"
                      name="skinThickness"
                      value={skinThickness}
                      placeholder="Skin Thickness"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="insulin"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Insulin:
                      <Link
                        className="mt-1 me-2"
                        target="_blank"
                        to="/study/health-analysis/diabetic-disease#insulin"
                      >
                        <i
                          className="fa-regular fa-circle-question"
                          data-bs-toggle="tooltip"
                          data-bs-title="Read More"
                          data-bs-placement="top"
                        ></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="insulin"
                      className="form-control"
                      name="insulin"
                      value={insulin}
                      placeholder="Insulin"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="bmi"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      BMI:
                      <Link
                        className="mt-1 me-2"
                        target="_blank"
                        to="/study/health-analysis/diabetic-disease#bmi"
                      >
                        <i
                          className="fa-regular fa-circle-question"
                          data-bs-toggle="tooltip"
                          data-bs-title="Read More"
                          data-bs-placement="top"
                        ></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="bmi"
                      className="form-control"
                      name="bmi"
                      value={bmi}
                      placeholder="BMI"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="diabetesPedigreeFunction"
                      className="mb-1 font-semi-bold d-flex justify-content-between"
                    >
                      Diabetes Pedigree Function:
                      <Link
                        className="mt-1 me-2"
                        target="_blank"
                        to="/study/health-analysis/diabetic-disease#diabetes-pedigree-function"
                      >
                        <i
                          className="fa-regular fa-circle-question"
                          data-bs-toggle="tooltip"
                          data-bs-title="Read More"
                          data-bs-placement="top"
                        ></i>
                      </Link>
                    </label>
                    <input
                      type="number"
                      id="diabetesPedigreeFunction"
                      className="form-control"
                      name="diabetesPedigreeFunction"
                      value={diabetesPedigreeFunction}
                      placeholder="Diabetes Pedigree Function"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                {isResultAvailable && (
                  <React.Fragment>
                    {result === "Not Diabetic" ? (
                      <h4 className="mt-5">
                        Result: <span className="text-success">{result}</span>
                      </h4>
                    ) : (
                      <h4 className="mt-5">
                        Result: <span className="text-danger">{result}</span>
                      </h4>
                    )}
                  </React.Fragment>
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
              {isResultAvailable ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={savePatientData}
                >
                  <i className="fa-solid fa-floppy-disk fa-fw"></i> Save Data
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSubmit}
                >
                  Predict <i className="fa-solid fa-long-arrow-right fa-fw"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="patientDetailModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user fa-fw"></i> Patient{" "}
                {isPatientDetailsAvailable && (
                  <span className="text-muted">
                    # {patientDetails.id.toUpperCase()}
                  </span>
                )}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container mb-4">
                {isPatientDetailsAvailable && (
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="mb-0">{patientDetails.full_name}</h3>
                      <p className="mt-0 text-success">
                        {patientDetails.age},{" "}
                        {patientDetails.gender.toUpperCase()}
                      </p>

                      <table className="my-4 table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Attributes</th>
                            <th scope="col">Values</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Pregnancies</td>
                            <td>{patientDetails.pregnancies}</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Glucose</td>
                            <td>{patientDetails.glucose}</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Blood Pressure</td>
                            <td>{patientDetails.blood_pressure}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Skin Thickness</td>
                            <td>{patientDetails.skin_thickness}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Insulin</td>
                            <td>{patientDetails.insulin}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>BMI</td>
                            <td>{patientDetails.bmi}</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Diabetes Pedigree Function</td>
                            <td>{patientDetails.diabetes_pedigree_function}</td>
                          </tr>
                        </tbody>
                      </table>
                      <h4>
                        Result:{" "}
                        <span
                          className={
                            patientDetails.result_status
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          {patientDetails.result}
                        </span>
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={(e) => deletePatientData(e, patientDetails.id)}
              >
                <i className="fa-solid fa-trash-can fa-fw"></i> Delete Patient
                Data
              </button>
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
          Diabetic <span className="text-theme-red">Prediction</span>
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
