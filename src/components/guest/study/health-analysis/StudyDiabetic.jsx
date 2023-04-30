import { Fragment } from "react";
import { Link } from 'react-router-dom';

export default function StudyDiabetic() {
  return (
    <Fragment>
      <h1>Study Diabetic </h1>
      <div className="row justify-content-center align-content-md-center">
        <div className="col-md-6">
          <h2>What is diabetic disease</h2>
          <p>Diabetes is a chronic disease that occurs when the body is unable to properly produce or use insulin, a hormone that regulates blood sugar levels. There are two main types of diabetes: type 1 diabetes, which is usually diagnosed in children and young adults and occurs when the body does not produce insulin, and type 2 diabetes, which is the most common form and occurs when the body is unable to use insulin effectively. Diabetes can lead to a range of health complications if left untreated or poorly managed, including heart disease, nerve damage, kidney disease, and blindness.</p>
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
      </div>
    </Fragment>
  )
}
