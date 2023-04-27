import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-grey">
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center text-sm-center text-md-start">
                  <h3 className="font-bold">{process.env.REACT_APP_NAME}</h3>
                  <p className="p-small">We Can. We Could. We Will.</p>
                  <p className="p-small text-left">
                    Made with <i className="fa fa-heart fa-fw"></i> in India.
                  </p>
                </div>
                <div className="col-md-5 text-center text-sm-center text-md-start">
                  <h5 className="font-semi-bold mt-2">Explore</h5>
                  <ul className="foot-menu-links font-semi-bold">
                    <li>
                      <Link to="/health-analysis">
                        Health Analysis
                      </Link>
                    </li>
                    <li>
                      <Link to="/study">
                        Study
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 mb-3">
          <div className="col-md-12">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12 text-center text-sm-center text-md-start">
                  <p className="p-small">
                    &copy; {process.env.REACT_APP_NAME}{" "}
                    {new Date().getFullYear()}
                  </p>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <ul className="inline-links text-center text-sm-center text-md-end">
                    <li className="links">
                      <Link className="link" to="/faq">FAQ</Link>
                    </li>
                    <li className="links">
                      <Link className="link" to="/about">About</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
