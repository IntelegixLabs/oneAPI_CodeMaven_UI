import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="mt-4 mb-5 container">
      <h3 className="mt-2 font-bold">Dashboard</h3>
      <div className="mt-2 row animated fadeInDown g-3">
        <div className="col-md-4">
          <Link className="card card-link pt-4 pb-2 px-4" to="/health-activity">
            <h4>Health Activity</h4>
            <p className="text-muted">See your overall health activity</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="card card-link pt-4 pb-2 px-4" to="/health-history">
            <h4>Health History</h4>
            <p className="text-muted">Check your health history</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="card card-link pt-4 pb-2 px-4" to="/my-family">
            <h4>Family</h4>
            <p className="text-muted">Members in a family</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link
            className="card card-link pt-4 pb-2 px-4"
            to="/known-health-issues"
          >
            <h4>Known health issues</h4>
            <p className="text-muted">Already known health problems</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
        <div className="col-md-4">
          <Link
            className="card card-link pt-4 pb-2 px-4"
            to="/my-appointments"
          >
            <h4>My Appointments</h4>
            <p className="text-muted">Your appointments will show here</p>
            <p className="my-2 more-btn">
              More <i className="fa-solid fa-arrow-right fa-fw"></i>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
