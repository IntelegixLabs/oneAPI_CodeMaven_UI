import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ApiML from "../../../Api/ApiML.js";
import NoPatientDataFound from "../../common/misc/NoPatientDataFound.jsx";

export default function ChronicKidneyDisease() {
  const DB = "chronicKidneyDiseasePatientsDB";

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  const [bloodPressure, setBloodPressure] = useState(0);
  const [specificGravity, setSpecificGravity] = useState(0);
  const [albumin, setAlbumin] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [redBloodCells, setRedBloodCells] = useState(0);
  const [pusCell, setPusCell] = useState(0);
  const [pusCellClumps, setPusCellClumps] = useState(0);
  const [bacteria, setBacteria] = useState(0);
  const [bloodGlucoseRandom, setBloodGlucoseRandom] = useState(0);
  const [bloodUrea, setBloodUrea] = useState(0);
  const [serumCreatinine, setSerumCreatinine] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [hemoglobin, setHemoglobin] = useState(0);
  const [packedCellVolume, setPackedCellVolume] = useState(0);
  const [whiteBloodCellCount, setWhiteBloodCellCount] = useState(0);
  const [redBloodCellCount, setRedBloodCellCount] = useState(0);
  const [hypertension, setHypertension] = useState(0);
  const [diabetesMellitus, setDiabetesMellitus] = useState(0);
  const [coronaryArteryDisease, setCoronaryArteryDisease] = useState(0);
  const [appetite, setAppetite] = useState(0);
  const [pedalEdema, setPedalEdema] = useState(0);
  const [anemia, setAnemia] = useState(0);

  const [result, setResult] = useState();
  const [isResultAvailable, setIsResultAvailable] = useState(false);
  const [patients, setPatients] = useState("");
  const [isPatientDetailsAvailable, setIsPatientDetailsAvailable] =
    useState(false);
  const [patientDetails, setPatientDetails] = useState({});

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
      blood_pressure: bloodPressure,
      specific_gravity: specificGravity,
      albumin: albumin,
      sugar: sugar,
      red_blood_cells: redBloodCells,
      pus_cell: pusCell,
      pus_cell_clumps: pusCellClumps,
      bacteria: bacteria,
      blood_glucose_random: bloodGlucoseRandom,
      blood_urea: bloodUrea,
      serum_creatinine: serumCreatinine,
      sodium: sodium,
      potassium: potassium,
      hemoglobin: hemoglobin,
      packed_cell_volume: packedCellVolume,
      white_blood_cell_count: whiteBloodCellCount,
      red_blood_cell_count: redBloodCellCount,
      hypertension: hypertension,
      diabetes_mellitus: diabetesMellitus,
      coronary_artery_disease: coronaryArteryDisease,
      appetite: appetite,
      pedal_edema: pedalEdema,
      anemia: anemia,
      result_status: result === "Chronic Kidney Disease" ? 1 : 0,
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
      case "blood_pressure":
        setBloodPressure(value);
        break;
      case "specific_gravity":
        setSpecificGravity(value);
        break;
      case "albumin":
        setAlbumin(value);
        break;
      case "sugar":
        setSugar(value);
        break;
      case "red_blood_cells":
        setRedBloodCells(value);
        break;
      case "pus_cell":
        setPusCell(value);
        break;
      case "pus_cell_clumps":
        setPusCellClumps(value);
        break;
      case "bacteria":
        setBacteria(value);
        break;
      case "blood_glucose_random":
        setBloodGlucoseRandom(value);
        break;
      case "blood_urea":
        setBloodUrea(value);
        break;
      case "serum_creatinine":
        setSerumCreatinine(value);
        break;
      case "sodium":
        setSodium(value);
        break;
      case "potassium":
        setPotassium(value);
        break;
      case "hemoglobin":
        setHemoglobin(value);
        break;
      case "packed_cell_volume":
        setPackedCellVolume(value);
        break;
      case "white_blood_cell_count":
        setWhiteBloodCellCount(value);
        break;
      case "red_blood_cell_count":
        setRedBloodCellCount(value);
        break;
      case "hypertension":
        setHypertension(value);
        break;
      case "diabetes_mellitus":
        setDiabetesMellitus(value);
        break;
      case "coronary_artery_disease":
        setCoronaryArteryDisease(value);
        break;
      case "appetite":
        setAppetite(value);
        break;
      case "pedal_edema":
        setPedalEdema(value);
        break;
      case "anemia":
        setAnemia(value);
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
    setBloodPressure(80);
    setSpecificGravity(1.02);
    setAlbumin(1);
    setSugar(0);
    setRedBloodCells(1);
    setPusCell(1);
    setPusCellClumps(0);
    setBacteria(0);
    setBloodGlucoseRandom(121);
    setBloodUrea(36);
    setSerumCreatinine(1.2);
    setSodium(135);
    setPotassium(3.5);
    setHemoglobin(15);
    setPackedCellVolume(44);
    setWhiteBloodCellCount(7800);
    setRedBloodCellCount(5.2);
    setHypertension(0);
    setDiabetesMellitus(0);
    setCoronaryArteryDisease(0);
    setAppetite(0);
    setPedalEdema(0);
    setAnemia(0);

    setResult("");
    setIsResultAvailable(false);
  };

  const resetForm = () => {
    setFullName("");
    setAge("");
    setGender("");
    setBloodPressure("");
    setSpecificGravity("");
    setAlbumin("");
    setSugar("");
    setRedBloodCells("");
    setPusCell("");
    setPusCellClumps("");
    setBacteria("");
    setBloodGlucoseRandom("");
    setBloodUrea("");
    setSerumCreatinine("");
    setSodium("");
    setPotassium("");
    setHemoglobin("");
    setPackedCellVolume("");
    setWhiteBloodCellCount("");
    setRedBloodCellCount("");
    setHypertension("");
    setDiabetesMellitus("");
    setCoronaryArteryDisease("");
    setAppetite("");
    setPedalEdema("");
    setAnemia("");

    setResult("");
    setIsResultAvailable(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      disease: "chronic_kidney",
      parameters: {
        age: age,
        bp: bloodPressure,
        sg: specificGravity,
        al: albumin,
        su: sugar,
        rbc: redBloodCells,
        pc: pusCell,
        pcc: pusCellClumps,
        ba: bacteria,
        bgr: bloodGlucoseRandom,
        bu: bloodUrea,
        sc: serumCreatinine,
        sod: sodium,
        pot: potassium,
        hemo: hemoglobin,
        pcv: packedCellVolume,
        wc: whiteBloodCellCount,
        rc: redBloodCellCount,
        htn: hypertension,
        dm: diabetesMellitus,
        cad: coronaryArteryDisease,
        appet: appetite,
        pe: pedalEdema,
        ane: anemia,
      },
    };

    await ApiML.post("/disease", payload)
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

                <h4 className="mt-5">Body Data</h4>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <label
                      htmlFor="bloodPressure"
                      className="mb-1 font-semi-bold"
                    >
                      Blood Pressure:
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
                  <div className="col-md-4">
                    <label
                      htmlFor="specificGravity"
                      className="mb-1 font-semi-bold"
                    >
                      Specific Gravity:
                    </label>
                    <input
                      type="number"
                      id="specificGravity"
                      className="form-control"
                      name="specificGravity"
                      value={specificGravity}
                      placeholder="Specific Gravity"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
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
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="sugar" className="mb-1 font-semi-bold">
                      Sugar:
                    </label>
                    <input
                      type="number"
                      id="sugar"
                      className="form-control"
                      name="sugar"
                      value={sugar}
                      placeholder="Sugar"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="redBloodCells"
                      className="mb-1 font-semi-bold"
                    >
                      Red Blood Cells:
                    </label>
                    <select
                      id="redBloodCells"
                      className="form-select"
                      name="redBloodCells"
                      value={redBloodCells}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Red Blood Cells
                      </option>
                      <option value="1">Normal</option>
                      <option value="0">Abnormal</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="pusCell" className="mb-1 font-semi-bold">
                      Pus Cell:
                    </label>
                    <select
                      id="pusCell"
                      className="form-select"
                      name="pusCell"
                      value={pusCell}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Pus Cell
                      </option>
                      <option value="1">Normal</option>
                      <option value="0">Abnormal</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="pusCellClumps"
                      className="mb-1 font-semi-bold"
                    >
                      Pus Cell Clumps:
                    </label>
                    <select
                      id="pusCellClumps"
                      className="form-select"
                      name="pusCellClumps"
                      value={pusCellClumps}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Pus Cell Clumps
                      </option>
                      <option value="1">Present</option>
                      <option value="0">Not Present</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="bacteria" className="mb-1 font-semi-bold">
                      Bacteria:
                    </label>
                    <select
                      id="bacteria"
                      className="form-select"
                      name="bacteria"
                      value={bacteria}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Bacteria
                      </option>
                      <option value="1">Present</option>
                      <option value="0">Not Present</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="bloodGlucoseRandom"
                      className="mb-1 font-semi-bold"
                    >
                      Blood Glucose Random:
                    </label>
                    <input
                      type="number"
                      id="bloodGlucoseRandom"
                      className="form-control"
                      name="bloodGlucoseRandom"
                      value={bloodGlucoseRandom}
                      placeholder="Blood Glucose Random"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="bloodUrea" className="mb-1 font-semi-bold">
                      Blood Urea:
                    </label>
                    <input
                      type="number"
                      id="bloodUrea"
                      className="form-control"
                      name="bloodUrea"
                      value={bloodUrea}
                      placeholder="Blood Urea"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="serumCreatinine"
                      className="mb-1 font-semi-bold"
                    >
                      Serum Creatinine:
                    </label>
                    <input
                      type="number"
                      id="serumCreatinine"
                      className="form-control"
                      name="serumCreatinine"
                      value={serumCreatinine}
                      placeholder="Serum Creatinine"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="sodium" className="mb-1 font-semi-bold">
                      Sodium:
                    </label>
                    <input
                      type="number"
                      id="sodium"
                      className="form-control"
                      name="sodium"
                      value={sodium}
                      placeholder="Sodium"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="potassium" className="mb-1 font-semi-bold">
                      Potassium:
                    </label>
                    <input
                      type="number"
                      id="potassium"
                      className="form-control"
                      name="potassium"
                      value={potassium}
                      placeholder="Potassium"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="hemoglobin" className="mb-1 font-semi-bold">
                      Hemoglobin:
                    </label>
                    <input
                      type="number"
                      id="hemoglobin"
                      className="form-control"
                      name="hemoglobin"
                      value={hemoglobin}
                      placeholder="Hemoglobin"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="packedCellVolume"
                      className="mb-1 font-semi-bold"
                    >
                      Packed Cell Volume:
                    </label>
                    <input
                      type="number"
                      id="packedCellVolume"
                      className="form-control"
                      name="packedCellVolume"
                      value={packedCellVolume}
                      placeholder="Packed Cell Volume"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="whiteBloodCellCount"
                      className="mb-1 font-semi-bold"
                    >
                      White Blood Cell Count:
                    </label>
                    <input
                      type="number"
                      id="whiteBloodCellCount"
                      className="form-control"
                      name="whiteBloodCellCount"
                      value={whiteBloodCellCount}
                      placeholder="White Blood Cell Count"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="redBloodCellCount"
                      className="mb-1 font-semi-bold"
                    >
                      Red Blood Cell Count:
                    </label>
                    <input
                      type="number"
                      id="redBloodCellCount"
                      className="form-control"
                      name="redBloodCellCount"
                      value={redBloodCellCount}
                      placeholder="Red Blood Cell Count"
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="hypertension"
                      className="mb-1 font-semi-bold"
                    >
                      Hypertension:
                    </label>
                    <select
                      id="hypertension"
                      className="form-select"
                      name="hypertension"
                      value={hypertension}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Hypertension
                      </option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="diabetesMellitus"
                      className="mb-1 font-semi-bold"
                    >
                      Diabetes Mellitus:
                    </label>
                    <select
                      id="diabetesMellitus"
                      className="form-select"
                      name="diabetesMellitus"
                      value={diabetesMellitus}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Diabetes Mellitus
                      </option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label
                      htmlFor="coronaryArteryDisease"
                      className="mb-1 font-semi-bold"
                    >
                      Coronary Artery Disease:
                    </label>
                    <select
                      id="coronaryArteryDisease"
                      className="form-select"
                      name="coronaryArteryDisease"
                      value={coronaryArteryDisease}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Coronary Artery Disease
                      </option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="appetite" className="mb-1 font-semi-bold">
                      Appetite:
                    </label>
                    <select
                      id="appetite"
                      className="form-select"
                      name="appetite"
                      value={appetite}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Appetite
                      </option>
                      <option value="1">Good</option>
                      <option value="0">Poor</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-4">
                    <label htmlFor="pedalEdema" className="mb-1 font-semi-bold">
                      Pedal Edema:
                    </label>
                    <select
                      id="pedalEdema"
                      className="form-select"
                      name="pedalEdema"
                      value={pedalEdema}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Pedal Edema
                      </option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="anemia" className="mb-1 font-semi-bold">
                      Anemia:
                    </label>
                    <select
                      id="anemia"
                      className="form-select"
                      name="anemia"
                      value={anemia}
                      onChange={(e) => handleInputChange(e)}
                    >
                      <option value="" defaultValue disabled>
                        Select Anemia
                      </option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                </div>

                {isResultAvailable && (
                  <React.Fragment>
                    {result === "Chronic Kidney Disease" ? (
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
                            <td>Blood Pressure</td>
                            <td>{patientDetails.blood_pressure}</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Sugar</td>
                            <td>{patientDetails.sugar}</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Appetite</td>
                            <td>
                              {patientDetails.appetite === "1"
                                ? "Good"
                                : "Poor"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Red Blood Cells</td>
                            <td>
                              {patientDetails.red_blood_cells === "1"
                                ? "Normal"
                                : "Abnormal"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Pus Cell</td>
                            <td>
                              {patientDetails.pus_cell === "1"
                                ? "Normal"
                                : "Abnormal"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Pus Cell Clumps</td>
                            <td>
                              {patientDetails.pus_cell_clumps === "1"
                                ? "Present"
                                : "Absent"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Bacteria</td>
                            <td>
                              {patientDetails.bacteria === "1"
                                ? "Present"
                                : "Absent"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>Blood Glucose Random</td>
                            <td>{patientDetails.blood_glucose_random}</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>Blood Urea</td>
                            <td>{patientDetails.blood_urea}</td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>Serum Creatinine</td>
                            <td>{patientDetails.serum_creatinine}</td>
                          </tr>
                          <tr>
                            <th scope="row">11</th>
                            <td>Sodium</td>
                            <td>{patientDetails.sodium}</td>
                          </tr>
                          <tr>
                            <th scope="row">12</th>
                            <td>Potassium</td>
                            <td>{patientDetails.potassium}</td>
                          </tr>
                          <tr>
                            <th scope="row">13</th>
                            <td>Hemoglobin</td>
                            <td>{patientDetails.hemoglobin}</td>
                          </tr>
                          <tr>
                            <th scope="row">14</th>
                            <td>Packed Cell Volume</td>
                            <td>{patientDetails.packed_cell_volume}</td>
                          </tr>
                          <tr>
                            <th scope="row">15</th>
                            <td>White Blood Cell Count</td>
                            <td>{patientDetails.white_blood_cell_count}</td>
                          </tr>
                          <tr>
                            <th scope="row">16</th>
                            <td>Red Blood Cell Count</td>
                            <td>{patientDetails.red_blood_cell_count}</td>
                          </tr>
                          <tr>
                            <th scope="row">17</th>
                            <td>Hypertension</td>
                            <td>
                              {patientDetails.hypertension === "1"
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">18</th>
                            <td>Diabetes Mellitus</td>
                            <td>
                              {patientDetails.diabetes_mellitus === "1"
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">19</th>
                            <td>Coronary Artery Disease</td>
                            <td>
                              {patientDetails.coronary_artery_disease === "1"
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">20</th>
                            <td>Appetite</td>
                            <td>
                              {patientDetails.appetite === "1"
                                ? "Good"
                                : "Poor"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">21</th>
                            <td>Pedal Edema</td>
                            <td>
                              {patientDetails.pedal_edema === "1"
                                ? "Yes"
                                : "No"}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">22</th>
                            <td>Anemia</td>
                            <td>
                              {patientDetails.anemia === "1" ? "Yes" : "No"}
                            </td>
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
          Chronic Kidney <span className="text-theme-red">Disease</span>
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
