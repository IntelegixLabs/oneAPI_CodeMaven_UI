import FemaleBreastDiagram from "../../../../assets/images/female-breast-diagram-750px.jpg";
import { Fragment } from "react";
export default function StudyBreastCancer() {
  return (
    <Fragment>
      <h1>Study Breast Cancer</h1>
      <div className="row justify-content-center align-content-md-center">
        <div className="col-md-6">
          <p>Breast cancer is a disease in which cells in the breast grow out of control.
            There are different kinds of breast cancer. The kind of breast cancer depends on which cells in the breast turn into cancer.</p>
          <p>
            Breast cancer can begin in different parts of the breast.
            <br />A breast is made up of three main parts:
            <ul>
              <li>lobules</li>
              <li>ducts</li>
              <li>connective tissue</li>
            </ul>
            The lobules are the glands that produce milk. The ducts are tubes that carry milk to the nipple.
            The connective tissue (which consists of fibrous and fatty tissue) surrounds and holds everything together.
            Most breast cancers begin in the ducts or lobules.
            Breast cancer can spread outside the breast through blood vessels and lymph vessels. When breast cancer spreads to other parts of the body, it is said to have metastasized.
          </p>
        </div>
        <div>
          You can predict breast cancer from <a href="#">predict breast cancer</a>
          <p>There are few things which you need to have value for predict breast cencer</p>
          
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={FemaleBreastDiagram} />
        </div>
      </div>
    </Fragment>
  )
}
