import React, { useEffect, useState } from "react";
import Api from "../../Api/Api.js";

import NoDataFound from "../common/misc/NoPatientDataFound.jsx";

export default function Appointment() {
  const [isLoading, setIsLoading] = useState(true);
  const [healthIssues, setHealthIssues] = useState(null);

  const [healthIssue, setHealthIssue] = useState(null);
  const [date, setDate] = useState("");
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [place, setPlace] = useState("");
  const [treatedBy, setTreatedBy] = useState("");

  useEffect(() => {
    index();
  }, []);

  function index() {
    let userKnownHealthIssues = [];

    Api.get("/user/get-all-user-appointments")
      .then((response) => {
        userKnownHealthIssues = response.data.userAppointmentsDetails.map(
          (issue, index) => {
            return (
              <div className="col-1 col-sm-6 col-md-4" key={index}>
                <div className="card card-body">
                  <h4 className="mt-0">{issue.healthIssue}</h4>
                  <p className="mt-0 mb-0 text-muted type-7">
                    Date: {issue.date}
                  </p>
                  <p className="mt-0 mb-0 text-muted type-6">
                    Time duration: {issue.timeFrom} - {issue.timeTo}
                  </p>
                  <p className="mt-0 mb-0 text-muted type-6">
                    Place: {issue.place}
                  </p>
                  <p className="mt-0 mb-0 text-muted type-6">
                    Treated by: {issue.treatedBy}
                  </p>
                </div>
              </div>
            );
          }
        );

        if (userKnownHealthIssues.length) {
          setIsLoading(false);
          setHealthIssues(userKnownHealthIssues);
        } else {
          setIsLoading(false);
          setHealthIssues(<NoDataFound />);
        }
      })
      .catch((error) => {
        alert(`error occured ${error}`);
      });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case "healthIssue":
        setHealthIssue(value);
        break;
      case "date":
        setDate(value);
        break;
      case "timeFrom":
        setTimeFrom(value);
        break;
      case "timeTo":
        setTimeTo(value);
        break;
      case "place":
        setPlace(value);
        break;
      case "treatedBy":
        setTreatedBy(value);
        break;
      default:
        break;
    }
  }

  function addNewAppointment() {
    let payload = {
      healthIssue: healthIssue,
      date: date,
      timeFrom: timeFrom,
      timeTo: timeTo,
      place: place,
      treatedBy: treatedBy,
    };

    Api.post("/user/add-user-appointments", payload)
      .then(() => {
        index();
      })
      .catch((error) => {
        alert(error);
      });
  }

  function resetForm() {
    setHealthIssue("");
    setDate("");
    setTimeFrom("");
    setTimeTo("");
    setPlace("");
    setTreatedBy("");
  }

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="addNewAppointmentModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="fa-solid fa-user-plus fa-fw"></i> Add new
                appointment
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
                  <div className="col-md-4">
                    <label htmlFor="health-issue" className="font-semi-bold">
                      Health Issue:
                    </label>
                    <input
                      id="health-issue"
                      className="mt-2 form-control"
                      type="text"
                      name="healthIssue"
                      placeholder="i.e. Diabetes"
                      value={healthIssue}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="treated-by" className="font-semi-bold">
                      Treated by:
                    </label>
                    <input
                      id="treated-by"
                      className="mt-2 form-control"
                      type="text"
                      name="treatedBy"
                      placeholder="i.e. jdgf3978usjcjda3289"
                      value={treatedBy}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="place" className="font-semi-bold">
                      Place:
                    </label>
                    <input
                      id="place"
                      className="mt-2 form-control"
                      type="text"
                      name="place"
                      placeholder="i.e. Busan, South Korea"
                      value={place}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="date" className="font-semi-bold">
                      Date:
                    </label>
                    <input
                      id="date"
                      className="mt-2 form-control"
                      type="date"
                      name="treatedBy"
                      value={date}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>

                <div className="mt-4 row">
                  <div className="col-md-4">
                    <label htmlFor="time-from" className="font-semi-bold">
                      Time (from):
                    </label>
                    <input
                      id="time-from"
                      className="mt-2 form-control"
                      type="time"
                      name="timeFrom"
                      value={timeFrom}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="time-to" className="font-semi-bold">
                      Time (to):
                    </label>
                    <input
                      id="time-to"
                      className="mt-2 form-control"
                      type="time"
                      name="timeTo"
                      value={timeTo}
                      onChange={(e) => handleInputChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={resetForm}>
                <i className="fa-regular fa-file fa-fw"></i> Reset
              </button>
              <button
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={addNewAppointment}
              >
                <i className="fa-regular fa-plus fa-fw"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 mb-5 container">
        <h3 className="mt-2 font-bold">
          Known Health <span className="text-theme-red">Issues</span>
          <span className="float-end">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addNewAppointmentModal"
              onClick={resetForm}
            >
              <i className="fa-solid fa-plus fa-fw"></i> Add new
            </button>
          </span>
        </h3>
        <div className="mt-4 row">
          {isLoading && <h6 className="text-center">...</h6>}
        </div>

        {!isLoading && (
          <div className="mb-5 row animated fadeInDown g-3">{healthIssues}</div>
        )}
      </div>
    </React.Fragment>
  );
}
