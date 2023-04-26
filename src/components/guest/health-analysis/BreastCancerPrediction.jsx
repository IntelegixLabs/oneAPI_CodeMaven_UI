import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ApiML from "../../../Api/ApiML.js";
import NoPatientDataFound from "../../common/misc/NoPatientDataFound.jsx";

export default function BreastCancerPrediction() {
  const DB = "breastCancerPredictionPatientsDB";

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [radiusMean, setRadiusMean] = useState(0);
  const [textureMean, setTextureMean] = useState(0);
  const [perimeterMean, setPerimeterMean] = useState(0);
  const [areaMean, setAreaMean] = useState(0);
  const [smoothnessMean, setSmoothnessMean] = useState(0);
  const [compactnessMean, setCompactnessMean] = useState(0);
  const [concavityMean, setConcavityMean] = useState(0);
  const [concavePointsMean, setConcavePointsMean] = useState(0);
  const [symmetryMean, setSymmetryMean] = useState(0);
  const [fractalDimensionMean, setFractalDimensionMean] = useState(0);
  const [radiusSe, setRadiusSe] = useState(0);
  const [textureSe, setTextureSe] = useState(0);
  const [perimeterSe, setPerimeterSe] = useState(0);
  const [areaSe, setAreaSe] = useState(0);
  const [smoothnessSe, setSmoothnessSe] = useState(0);
  const [compactnessSe, setCompactnessSe] = useState(0);
  const [concavitySe, setConcavitySe] = useState(0);
  const [concavePointsSe, setConcavePointsSe] = useState(0);
  const [symmetrySe, setSymmetrySe] = useState(0);
  const [fractalDimensionSe, setFractalDimensionSe] = useState(0);
  const [radiusWorst, setRadiusWorst] = useState(0);
  const [textureWorst, setTextureWorst] = useState(0);
  const [perimeterWorst, setPerimeterWorst] = useState(0);
  const [areaWorst, setAreaWorst] = useState(0);
  const [smoothnessWorst, setSmoothnessWorst] = useState(0);
  const [compactnessWorst, setCompactnessWorst] = useState(0);
  const [concavityWorst, setConcavityWorst] = useState(0);
  const [concavePointsWorst, setConcavePointsWorst] = useState(0);
  const [symmetryWorst, setSymmetryWorst] = useState(0);
  const [fractalDimensionWorst, setFractalDimensionWorst] = useState(0);

  const [result, setResult] = useState();
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [patients, setPatients] = useState("");
  const [isPatientDetailsAvailable, setIsPatientDetailsAvailable] =
    useState(false);
  const [patientDetails, setPatientDetails] = useState({});

  useEffect(() => {
    index();
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
      radius_mean: radiusMean,
      texture_mean: textureMean,
      perimeter_mean: perimeterMean,
      area_mean: areaMean,
      smoothness_mean: smoothnessMean,
      compactness_mean: compactnessMean,
      concavity_mean: concavityMean,
      concave_points_mean: concavePointsMean,
      symmetry_mean: symmetryMean,
      fractal_dimension_mean: fractalDimensionMean,
      radius_se: radiusSe,
      texture_se: textureSe,
      perimeter_se: perimeterSe,
      area_se: areaSe,
      smoothness_se: smoothnessSe,
      compactness_se: compactnessSe,
      concavity_se: concavitySe,
      concave_points_se: concavePointsSe,
      symmetry_se: symmetrySe,
      fractal_dimension_se: fractalDimensionSe,
      radius_worst: radiusWorst,
      texture_worst: textureWorst,
      perimeter_worst: perimeterWorst,
      area_worst: areaWorst,
      smoothness_worst: smoothnessWorst,
      compactness_worst: compactnessWorst,
      concavity_worst: concavityWorst,
      concave_points_worst: concavePointsWorst,
      symmetry_worst: symmetryWorst,
      fractal_dimension_worst: fractalDimensionWorst,
      result_status: result === "Benign" ? 1 : 0,
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
      case "radiusMean":
        setRadiusMean(value);
        break;
      case "textureMean":
        setTextureMean(value);
        break;
      case "perimeterMean":
        setPerimeterMean(value);
        break;
      case "areaMean":
        setAreaMean(value);
        break;
      case "smoothnessMean":
        setSmoothnessMean(value);
        break;
      case "compactnessMean":
        setCompactnessMean(value);
        break;
      case "concavityMean":
        setConcavityMean(value);
        break;
      case "concavePointsMean":
        setConcavePointsMean(value);
        break;
      case "symmetryMean":
        setSymmetryMean(value);
        break;
      case "fractalDimensionMean":
        setFractalDimensionMean(value);
        break;
      case "radiusSe":
        setRadiusSe(value);
        break;
      case "textureSe":
        setTextureSe(value);
        break;
      case "perimeterSe":
        setPerimeterSe(value);
        break;
      case "areaSe":
        setAreaSe(value);
        break;
      case "smoothnessSe":
        setSmoothnessSe(value);
        break;
      case "compactnessSe":
        setCompactnessSe(value);
        break;
      case "concavitySe":
        setConcavitySe(value);
        break;
      case "concavePointsSe":
        setConcavePointsSe(value);
        break;
      case "symmetrySe":
        setSymmetrySe(value);
        break;
      case "fractalDimensionSe":
        setFractalDimensionSe(value);
        break;
      case "radiusWorst":
        setRadiusWorst(value);
        break;
      case "textureWorst":
        setTextureWorst(value);
        break;
      case "perimeterWorst":
        setPerimeterWorst(value);
        break;
      case "areaWorst":
        setAreaWorst(value);
        break;
      case "smoothnessWorst":
        setSmoothnessWorst(value);
        break;
      case "compactnessWorst":
        setCompactnessWorst(value);
        break;
      case "concavityWorst":
        setConcavityWorst(value);
        break;
      case "concavePointsWorst":
        setConcavePointsWorst(value);
        break;
      case "symmetryWorst":
        setSymmetryWorst(value);
        break;
      case "fractalDimensionWorst":
        setFractalDimensionWorst(value);
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
    setRadiusMean(17.99);
    setTextureMean(10.38);
    setPerimeterMean(122.8);
    setAreaMean(1001);
    setSmoothnessMean(0.1184);
    setCompactnessMean(0.2776);
    setConcavityMean(0.3001);
    setConcavePointsMean(0.1471);
    setSymmetryMean(0.2419);
    setFractalDimensionMean(0.07871);
    setRadiusSe(1.095);
    setTextureSe(0.9053);
    setPerimeterSe(8.589);
    setAreaSe(153.4);
    setSmoothnessSe(0.006399);
    setCompactnessSe(0.04904);
    setConcavitySe(0.05373);
    setConcavePointsSe(0.01587);
    setSymmetrySe(0.03003);
    setFractalDimensionSe(0.006193);
    setRadiusWorst(25.38);
    setTextureWorst(17.33);
    setPerimeterWorst(184.6);
    setAreaWorst(2019);
    setSmoothnessWorst(0.1622);
    setCompactnessWorst(0.6656);
    setConcavityWorst(0.7119);
    setConcavePointsWorst(0.2654);
    setSymmetryWorst(0.4601);
    setFractalDimensionWorst(0.1189);

    setResult("");
    setIsResultAvailable(false);
  };

  const resetForm = () => {
    setFullName("");
    setAge("");
    setGender("");
    setRadiusMean("");
    setTextureMean("");
    setPerimeterMean("");
    setAreaMean("");
    setSmoothnessMean("");
    setCompactnessMean("");
    setConcavityMean("");
    setConcavePointsMean("");
    setSymmetryMean("");
    setFractalDimensionMean("");
    setRadiusSe("");
    setTextureSe("");
    setPerimeterSe("");
    setAreaSe("");
    setSmoothnessSe("");
    setCompactnessSe("");
    setConcavitySe("");
    setConcavePointsSe("");
    setSymmetrySe("");
    setFractalDimensionSe("");
    setRadiusWorst("");
    setTextureWorst("");
    setPerimeterWorst("");
    setAreaWorst("");
    setSmoothnessWorst("");
    setCompactnessWorst("");
    setConcavityWorst("");
    setConcavePointsWorst("");
    setSymmetryWorst("");
    setFractalDimensionWorst("");

    setResult("");
    setIsResultAvailable(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      radius_mean: radiusMean,
      texture_mean: textureMean,
      perimeter_mean: perimeterMean,
      area_mean: areaMean,
      smoothness_mean: smoothnessMean,
      compactness_mean: compactnessMean,
      concavity_mean: concavityMean,
      concave_points_mean: concavePointsMean,
      symmetry_mean: symmetryMean,
      fractal_dimension_mean: fractalDimensionMean,
      radius_se: radiusSe,
      texture_se: textureSe,
      perimeter_se: perimeterSe,
      area_se: areaSe,
      smoothness_se: smoothnessSe,
      compactness_se: compactnessSe,
      concavity_se: concavitySe,
      concave_points_se: concavePointsSe,
      symmetry_se: symmetrySe,
      fractal_dimension_se: fractalDimensionSe,
      radius_worst: radiusWorst,
      texture_worst: textureWorst,
      perimeter_worst: perimeterWorst,
      area_worst: areaWorst,
      smoothness_worst: smoothnessWorst,
      compactness_worst: compactnessWorst,
      concavity_worst: concavityWorst,
      concave_points_worst: concavePointsWorst,
      symmetry_worst: symmetryWorst,
      fractal_dimension_worst: fractalDimensionWorst,
    };

    ApiML.post("/breast_cancer", payload)
      .then((res) => {
        setResult(res.data);
        setIsResultAvailable(true);
      })
      .catch((err) => {
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

                <h4 className="mt-5">Breast Data</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="radius_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Radius Mean:
                    </label>
                    <input
                      type="number"
                      id="radius_mean"
                      className="form-control"
                      name="radius_mean"
                      value={radiusMean}
                      placeholder="Radius Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="texture_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Texture Mean:
                    </label>
                    <input
                      type="number"
                      id="texture_mean"
                      className="form-control"
                      name="texture_mean"
                      value={textureMean}
                      placeholder="Texture Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="perimeter_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Perimeter Mean:
                    </label>
                    <input
                      type="number"
                      id="perimeter_mean"
                      className="form-control"
                      name="perimeter_mean"
                      value={perimeterMean}
                      placeholder="Perimeter Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="area_mean" className="mb-1 font-semi-bold">
                      Area Mean:
                    </label>
                    <input
                      type="number"
                      id="area_mean"
                      className="form-control"
                      name="area_mean"
                      value={areaMean}
                      placeholder="Area Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="smoothness_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Smoothness Mean:
                    </label>
                    <input
                      type="number"
                      id="smoothness_mean"
                      className="form-control"
                      name="smoothness_mean"
                      value={smoothnessMean}
                      placeholder="Smoothness Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="compactness_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Compactness Mean:
                    </label>
                    <input
                      type="number"
                      id="compactness_mean"
                      className="form-control"
                      name="compactness_mean"
                      value={compactnessMean}
                      placeholder="Compactness Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="concavity_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Concavity Mean:
                    </label>
                    <input
                      type="number"
                      id="concavity_mean"
                      className="form-control"
                      name="concavity_mean"
                      value={concavityMean}
                      placeholder="Concavity Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="concave_points_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Concave Points Mean:
                    </label>
                    <input
                      type="number"
                      id="concave_points_mean"
                      className="form-control"
                      name="concave_points_mean"
                      value={concavePointsMean}
                      placeholder="Concave Points Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="symmetry_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Symmetry Mean:
                    </label>
                    <input
                      type="number"
                      id="symmetry_mean"
                      className="form-control"
                      name="symmetry_mean"
                      value={symmetryMean}
                      placeholder="Symmetry Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="fractal_dimension_mean"
                      className="mb-1 font-semi-bold"
                    >
                      Fractal Dimension Mean:
                    </label>
                    <input
                      type="number"
                      id="fractal_dimension_mean"
                      className="form-control"
                      name="fractal_dimension_mean"
                      value={fractalDimensionMean}
                      placeholder="Fractal Dimension Mean"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="radius_se" className="mb-1 font-semi-bold">
                      Radius SE:
                    </label>
                    <input
                      type="number"
                      id="radius_se"
                      className="form-control"
                      name="radius_se"
                      value={radiusSe}
                      placeholder="Radius SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="texture_se" className="mb-1 font-semi-bold">
                      Texture SE:
                    </label>
                    <input
                      type="number"
                      id="texture_se"
                      className="form-control"
                      name="texture_se"
                      value={textureSe}
                      placeholder="Texture SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="perimeter_se"
                      className="mb-1 font-semi-bold"
                    >
                      Perimeter SE:
                    </label>
                    <input
                      type="number"
                      id="perimeter_se"
                      className="form-control"
                      name="perimeter_se"
                      value={perimeterSe}
                      placeholder="Perimeter SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="area_se" className="mb-1 font-semi-bold">
                      Area SE:
                    </label>
                    <input
                      type="number"
                      id="area_se"
                      className="form-control"
                      name="area_se"
                      value={areaSe}
                      placeholder="Area SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="smoothness_se"
                      className="mb-1 font-semi-bold"
                    >
                      Smoothness SE:
                    </label>
                    <input
                      type="number"
                      id="smoothness_se"
                      className="form-control"
                      name="smoothness_se"
                      value={smoothnessSe}
                      placeholder="Smoothness SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="compactness_se"
                      className="mb-1 font-semi-bold"
                    >
                      Compactness SE:
                    </label>
                    <input
                      type="number"
                      id="compactness_se"
                      className="form-control"
                      name="compactness_se"
                      value={compactnessSe}
                      placeholder="Compactness SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="concavity_se"
                      className="mb-1 font-semi-bold"
                    >
                      Concavity SE:
                    </label>
                    <input
                      type="number"
                      id="concavity_se"
                      className="form-control"
                      name="concavity_se"
                      value={concavitySe}
                      placeholder="Concavity SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="concave_points_se"
                      className="mb-1 font-semi-bold"
                    >
                      Concave Points SE:
                    </label>
                    <input
                      type="number"
                      id="concave_points_se"
                      className="form-control"
                      name="concave_points_se"
                      value={concavePointsSe}
                      placeholder="Concave Points SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="symmetry_se"
                      className="mb-1 font-semi-bold"
                    >
                      Symmetry SE:
                    </label>
                    <input
                      type="number"
                      id="symmetry_se"
                      className="form-control"
                      name="symmetry_se"
                      value={symmetrySe}
                      placeholder="Symmetry SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="fractal_dimension_se"
                      className="mb-1 font-semi-bold"
                    >
                      Fractal Dimension SE:
                    </label>
                    <input
                      type="number"
                      id="fractal_dimension_se"
                      className="form-control"
                      name="fractal_dimension_se"
                      value={fractalDimensionSe}
                      placeholder="Fractal Dimension SE"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="radius_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Radius Worst:
                    </label>
                    <input
                      type="number"
                      id="radius_worst"
                      className="form-control"
                      name="radius_worst"
                      value={radiusWorst}
                      placeholder="Radius Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="texture_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Texture Worst:
                    </label>
                    <input
                      type="number"
                      id="texture_worst"
                      className="form-control"
                      name="texture_worst"
                      value={textureWorst}
                      placeholder="Texture Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="perimeter_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Perimeter Worst:
                    </label>
                    <input
                      type="number"
                      id="perimeter_worst"
                      className="form-control"
                      name="perimeter_worst"
                      value={perimeterWorst}
                      placeholder="Perimeter Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="area_worst" className="mb-1 font-semi-bold">
                      Area Worst:
                    </label>
                    <input
                      type="number"
                      id="area_worst"
                      className="form-control"
                      name="area_worst"
                      value={areaWorst}
                      placeholder="Area Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="smoothness_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Smoothness Worst:
                    </label>
                    <input
                      type="number"
                      id="smoothness_worst"
                      className="form-control"
                      name="smoothness_worst"
                      value={smoothnessWorst}
                      placeholder="Smoothness Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="compactness_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Compactness Worst:
                    </label>
                    <input
                      type="number"
                      id="compactness_worst"
                      className="form-control"
                      name="compactness_worst"
                      value={compactnessWorst}
                      placeholder="Compactness Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="concavity_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Concavity Worst:
                    </label>
                    <input
                      type="number"
                      id="concavity_worst"
                      className="form-control"
                      name="concavity_worst"
                      value={concavityWorst}
                      placeholder="Concavity Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="concave_points_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Concave Points Worst:
                    </label>
                    <input
                      type="number"
                      id="concave_points_worst"
                      className="form-control"
                      name="concave_points_worst"
                      value={concavePointsWorst}
                      placeholder="Concave Points Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="symmetry_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Symmetry Worst:
                    </label>
                    <input
                      type="number"
                      id="symmetry_worst"
                      className="form-control"
                      name="symmetry_worst"
                      value={symmetryWorst}
                      placeholder="Symmetry Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="fractal_dimension_worst"
                      className="mb-1 font-semi-bold"
                    >
                      Fractal Dimension Worst:
                    </label>
                    <input
                      type="number"
                      id="fractal_dimension_worst"
                      className="form-control"
                      name="fractal_dimension_worst"
                      value={fractalDimensionWorst}
                      placeholder="Fractal Dimension Worst"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                {isResultAvailable && (
                  <React.Fragment>
                    {result === "Benign" ? (
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
                            <td>Radius Mean</td>
                            <td>{patientDetails.radius_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Texture Mean</td>
                            <td>{patientDetails.texture_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Perimeter Mean</td>
                            <td>{patientDetails.perimeter_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Area Mean</td>
                            <td>{patientDetails.area_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Smoothness Mean</td>
                            <td>{patientDetails.smoothness_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Compactness Mean</td>
                            <td>{patientDetails.compactness_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Concavity Mean</td>
                            <td>{patientDetails.concavity_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Concave Points Mean</td>
                            <td>{patientDetails.concave_points_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>Symmetry Mean</td>
                            <td>{patientDetails.symmetry_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>Fractal Dimension Mean</td>
                            <td>{patientDetails.fractal_dimension_mean}</td>
                          </tr>
                          <tr>
                            <th scope="row">11</th>
                            <td>Radius SE</td>
                            <td>{patientDetails.radius_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">12</th>
                            <td>Texture SE</td>
                            <td>{patientDetails.texture_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">13</th>
                            <td>Perimeter SE</td>
                            <td>{patientDetails.perimeter_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">14</th>
                            <td>Area SE</td>
                            <td>{patientDetails.area_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">15</th>
                            <td>Smoothness SE</td>
                            <td>{patientDetails.smoothness_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">16</th>
                            <td>Compactness SE</td>
                            <td>{patientDetails.compactness_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">17</th>
                            <td>Concavity SE</td>
                            <td>{patientDetails.concavity_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">18</th>
                            <td>Concave Points SE</td>
                            <td>{patientDetails.concave_points_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">19</th>
                            <td>Symmetry SE</td>
                            <td>{patientDetails.symmetry_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">20</th>
                            <td>Fractal Dimension SE</td>
                            <td>{patientDetails.fractal_dimension_se}</td>
                          </tr>
                          <tr>
                            <th scope="row">21</th>
                            <td>Radius Worst</td>
                            <td>{patientDetails.radius_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">22</th>
                            <td>Texture Worst</td>
                            <td>{patientDetails.texture_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">23</th>
                            <td>Perimeter Worst</td>
                            <td>{patientDetails.perimeter_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">24</th>
                            <td>Area Worst</td>
                            <td>{patientDetails.area_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">25</th>
                            <td>Smoothness Worst</td>
                            <td>{patientDetails.smoothness_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">26</th>
                            <td>Compactness Worst</td>
                            <td>{patientDetails.compactness_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">27</th>
                            <td>Concavity Worst</td>
                            <td>{patientDetails.concavity_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">28</th>
                            <td>Concave Points Worst</td>
                            <td>{patientDetails.concave_points_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">29</th>
                            <td>Symmetry Worst</td>
                            <td>{patientDetails.symmetry_worst}</td>
                          </tr>
                          <tr>
                            <th scope="row">30</th>
                            <td>Fractal Dimension Worst</td>
                            <td>{patientDetails.fractal_dimension_worst}</td>
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
          Breast Cancer <span className="text-theme-red">Prediction</span>
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
