import FemaleBreastDiagram from "../../../../assets/images/female-breast-diagram-750px.jpg";
import { Fragment } from "react";
import {Link} from 'react-router-dom';
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
        <div className="col-md-2">
          <img className="img-fluid" src={FemaleBreastDiagram} />
        </div>
        <div>
          You can predict breast cancer from <Link to="/health-analysis/breast-cancer-prediction"> predict breast cancer</Link>
          <p>There are few things which you need to have value for predict breast cencer</p>
          <p><strong>Redius Mean:</strong> It's mean of distances from center to points on the perimeter. 
            Average mean radius of benign cell nuclei is 12.15 while that of malignant nuclei is 17.46. </p>
            <p><strong>Texture Mean:</strong> In breast cancer, texture refers to the pattern and distribution of the different types of tissues and cells within a tumor, as seen on imaging tests like mammograms and ultrasounds.
When we talk about texture mean, we are referring to the average value of the gray-scale levels of the pixels within a region of interest in the image. This can help to quantify the degree of uniformity or heterogeneity in the texture of the tumor.
For example, if the texture mean is high, it means that there is a lot of variability in the density and arrangement of the cells within the tumor, which may be a sign of a more aggressive or advanced cancer. On the other hand, if the texture mean is low, it suggests that the cells within the tumor are more uniform in appearance and may be indicative of a less aggressive cancer.
Overall, the texture mean is one of many factors that doctors use to help diagnose and stage breast cancer, and to guide treatment decisions. However, it is important to note that the interpretation of texture analysis results requires expertise and should always be done in the context of other clinical information and imaging findings.
</p>
        </div>
      </div>
    </Fragment>
  )
}
