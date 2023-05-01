import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sleep } from "./../../../general-helpers.js";

import ApiML from "../../../Api/ApiML.js";
import NoPatientDataFound from "../../common/misc/NoPatientDataFound.jsx";
import ScreenLoader from "../../common/ScreenLoader.jsx";

export default function LiverDisease() {
  const DB = "liverDiseasePatientsDB";

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [totalBilirubin, setTotalBilirubin] = useState(0);
  const [directBilirubin, setDirectBilirubin] = useState(0);
  const [alkalinePhosphotase, setAlkalinePhosphotase] = useState(0);
  const [alamineAminotransferase, setAlamineAminotransferase] = useState(0);
  const [aspartateAminotransferase, setAspartateAminotransferase] = useState(0);
  const [totalProtiens, setTotalProtiens] = useState(0);
  const [albumin, setAlbumin] = useState(0);
  const [albuminAndGlobulinRatio, setAlbuminAndGlobulinRatio] = useState(0);

  const [result, setResult] = useState();
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [patients, setPatients] = useState("");
  const [isPatientDetailsAvailable, setIsPatientDetailsAvailable] =
    useState(false);
  const [patientDetails, setPatientDetails] = useState({});
  const [showScreenLoader, setShowScreenLoader] = useState(false);

  useEffect(() => {
    index();
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
      gender_female: gender === "f" ? 1 : 0,
      gender_male: gender === "m" ? 1 : 0,
      total_bilirubin: totalBilirubin,
      direct_bilirubin: directBilirubin,
      alkaline_phosphotase: alkalinePhosphotase,
      alamine_aminotransferase: alamineAminotransferase,
      aspartate_aminotransferase: aspartateAminotransferase,
      total_protiens: totalProtiens,
      albumin: albumin,
      albumin_and_globulin_ratio: albuminAndGlobulinRatio,
      result_status: result === "Liver Disease" ? 1 : 0,
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
      case "totalBilirubin":
        setTotalBilirubin(value);
        break;
      case "directBilirubin":
        setDirectBilirubin(value);
        break;
      case "alkalinePhosphotase":
        setAlkalinePhosphotase(value);
        break;
      case "alamineAminotransferase":
        setAlamineAminotransferase(value);
        break;
      case "aspartateAminotransferase":
        setAspartateAminotransferase(value);
        break;
      case "totalProtiens":
        setTotalProtiens(value);
        break;
      case "albumin":
        setAlbumin(value);
        break;
      case "albuminAndGlobulinRatio":
        setAlbuminAndGlobulinRatio(value);
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
    setTotalBilirubin(0.9);
    setDirectBilirubin(0.3);
    setAlkalinePhosphotase(310);
    setAlamineAminotransferase(61);
    setAspartateAminotransferase(58);
    setTotalProtiens(7);
    setAlbumin(3.4);
    setAlbuminAndGlobulinRatio(0.9);

    setResult("");
    setIsResultAvailable(false);
  };

  const resetForm = () => {
    setFullName("");
    setAge("");
    setGender("");
    setTotalBilirubin(0);
    setDirectBilirubin(0);
    setAlkalinePhosphotase(0);
    setAlamineAminotransferase(0);
    setAspartateAminotransferase(0);
    setTotalProtiens(0);
    setAlbumin(0);
    setAlbuminAndGlobulinRatio(0);

    setResult("");
    setIsResultAvailable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      disease: "liver_disease",
      parameters: {
        Age: age,
        Gender_Female: gender === "f" ? 1 : 0,
        Gender_Male: gender === "m" ? 1 : 0,
        Total_Bilirubin: totalBilirubin,
        Direct_Bilirubin: directBilirubin,
        Alkaline_Phosphotase: alkalinePhosphotase,
        Alamine_Aminotransferase: alamineAminotransferase,
        Aspartate_Aminotransferase: aspartateAminotransferase,
        Total_Protiens: totalProtiens,
        Albumin: albumin,
        Albumin_and_Globulin_Ratio: albuminAndGlobulinRatio,
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

                <h4 className="mt-5">Data</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="totalBilirubin"
                      className="mb-1 font-semi-bold"
                    >
                      Pregnancies:
                    </label>
                    <input
                      type="number"
                      id="totalBilirubin"
                      className="form-control"
                      name="pregnancies"
                      value={totalBilirubin}
                      placeholder="Total Bilirubin"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="directBilirubin"
                      className="mb-1 font-semi-bold"
                    >
                      Glucose:
                    </label>
                    <input
                      type="number"
                      id="directBilirubin"
                      className="form-control"
                      name="directBilirubin"
                      value={directBilirubin}
                      placeholder="Direct Bilirubin"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="alkalinePhosphotase"
                      className="mb-1 font-semi-bold"
                    >
                      Alkaline Phosphotase:
                    </label>
                    <input
                      type="number"
                      id="alkalinePhosphotase"
                      className="form-control"
                      name="alkalinePhosphotase"
                      value={alkalinePhosphotase}
                      placeholder="Alkaline Phosphotase"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="alamineAminotransferase"
                      className="mb-1 font-semi-bold"
                    >
                      Alamine Aminotransferase:
                    </label>
                    <input
                      type="number"
                      id="alamineAminotransferase"
                      className="form-control"
                      name="alamineAminotransferase"
                      value={alamineAminotransferase}
                      placeholder="Alamine Aminotransferase"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="aspartateAminotransferase"
                      className="mb-1 font-semi-bold"
                    >
                      Aspartate Aminotransferase:
                    </label>
                    <input
                      type="number"
                      id="aspartateAminotransferase"
                      className="form-control"
                      name="aspartateAminotransferase"
                      value={aspartateAminotransferase}
                      placeholder="Aspartate Aminotransferase"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="totalProtiens"
                      className="mb-1 font-semi-bold"
                    >
                      Total Protiens:
                    </label>
                    <input
                      type="number"
                      id="totalProtiens"
                      className="form-control"
                      name="totalProtiens"
                      value={totalProtiens}
                      placeholder="Total Protiens"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="albumin" className="mb-1 font-semi-bold">
                      Albumin:
                    </label>
                    <input
                      type="number"
                      id="albumin"
                      className="form-control"
                      name="albumin"
                      value={albumin}
                      placeholder="Albumin"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="albuminAndGlobulinRatio"
                      className="mb-1 font-semi-bold"
                    >
                      Albumin and Globulin Ratio:
                    </label>
                    <input
                      type="number"
                      id="albuminAndGlobulinRatio"
                      className="form-control"
                      name="albuminAndGlobulinRatio"
                      value={albuminAndGlobulinRatio}
                      placeholder="Albumin and Globulin Ratio"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                {isResultAvailable && (
                  <React.Fragment>
                    {result === "Liver Disease" ? (
                      <h4 className="mt-5">
                        Result: <span className="text-danger">{result}</span>
                      </h4>
                    ) : (
                      <h4 className="mt-5">
                        Result: <span className="text-success">{result}</span>
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
                            <td>Total Bilirubin</td>
                            <td>{patientDetails.total_bilirubin}</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Direct Bilirubin</td>
                            <td>{patientDetails.direct_bilirubin}</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Alkaline Phosphotase</td>
                            <td>{patientDetails.alkaline_phosphotase}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Alamine Aminotransferase</td>
                            <td>{patientDetails.alamine_aminotransferase}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Aspartate Aminotransferase</td>
                            <td>{patientDetails.aspartate_aminotransferase}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Total Protiens</td>
                            <td>{patientDetails.total_protiens}</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Albumin</td>
                            <td>{patientDetails.albumin}</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Albumin and Globulin Ratio</td>
                            <td>{patientDetails.albumin_and_globulin_ratio}</td>
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
          Liver <span className="text-theme-red">Disease</span>
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
