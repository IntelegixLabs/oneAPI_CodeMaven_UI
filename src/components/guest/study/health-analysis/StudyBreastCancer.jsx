import FemaleBreastDiagram from "../../../../assets/images/female-breast-diagram-750px.jpg";
import { Fragment } from "react";
import { Link } from 'react-router-dom';
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
          <p>There are few things which you need to have value for predict breast cencer.</p>
          <h3>Redius Mean</h3>
          <p>It's mean of distances from center to points on the perimeter.
          </p>
            <p>Range of redius mean from approximately 6.98 mm to 28.11 mm, with a median value of 13.37 mm, However Average mean radius of benign cell nuclei is 12.15 while that of malignant nuclei is 17.46.</p>
        </div>
        <div>
          <p>
            <h3>Texture Mean</h3>
            In breast cancer, texture refers to the pattern and distribution of the different types of tissues and cells within a tumor, as seen on imaging tests like mammograms and ultrasounds.
            When we talk about texture mean, we are referring to the average value of the gray-scale levels of the pixels within a region of interest in the image. This can help to quantify the degree of uniformity or heterogeneity in the texture of the tumor.</p>
          <p>
            For example, if the texture mean is high, it means that there is a lot of variability in the density and arrangement of the cells within the tumor, which may be a sign of a more aggressive or advanced cancer. On the other hand, if the texture mean is low, it suggests that the cells within the tumor are more uniform in appearance and may be indicative of a less aggressive cancer.
          </p>
          <p>
            Overall, the texture mean is one of many factors that doctors use to help diagnose and stage breast cancer, and to guide treatment decisions. However, it is important to note that the interpretation of texture analysis results requires expertise and should always be done in the context of other clinical information and imaging findings.
          </p>
          <p>
          The range of texture mean values is approximately 9.71 to 39.28. However the average value of texture mean is approximately 19.29.
          </p>
        </div>
        <div>
          <h3>Perimter mean</h3>
          <p>
            Perimeter mean in breast cancer refers to the average length of the tumor boundary in an imaging test.
          </p>
          <p>
            A high perimeter mean suggests an irregular and complex tumor shape, which is often associated with a more aggressive form of breast cancer, while a low perimeter mean suggests a more regular and smooth shape, which may indicate a less aggressive cancer.
            This is one of many factors that doctors use to help diagnose and stage breast cancer, and to guide treatment decisions.
          </p>
          <p>
          The range of perimeter mean values is approximately 43.79 to 188.5, However the average value of perimeter mean is approximately 91.97 mm.
          </p>
        </div>
        <div>
          <h3>Area Mean</h3>
          <p>
            Area mean in breast cancer refers to the average size of malignant cells within a tumor, as seen on imaging tests like mammograms and ultrasounds. A high area mean indicates larger and potentially more aggressive cancer cells, while a low area mean suggests smaller and potentially less aggressive cancer cells. Area mean is one of many factors doctors use to help diagnose and stage breast cancer and make treatment decisions. It's important to interpret area mean results in the context of other clinical information and imaging findings, and your doctor can help you understand what your individual results mean.
          </p>
          <p>The range of area mean values is approximately 143.5 to 2501.0 square units. However the average value of area mean is approximately 654.89 square units.</p>
        </div>
        <div>
          <h3>Smoothness Mean</h3>
          <p>In breast cancer, smoothness mean refers to the average smoothness of the boundary of the tumor as seen on imaging tests like mammograms and ultrasounds.</p>
          <p>The values of smoothness mean typically range from 0 to 1, with higher values indicating a smoother and more regular boundary of the tumor, and lower values indicating a more irregular and jagged boundary.</p>
          <p>The range of smoothness mean values is approximately 0.71 to 0.163. However the average value of smoothness mean is approximately 0.096.</p>
        </div>
        <div>
          <h3>Compactness Mean</h3>
          <p>Compactness mean in breast cancer refers to the measure of how closely the tissue in the breast is packed together. A high compactness mean value can indicate that the tissue is more dense and potentially more suspicious for cancer, while a lower value can suggest that the tissue is less dense and potentially less concerning.</p>
          <p>the range of compactness mean values is approximately 0.019 to 0.345. However the average value of compactness mean is approximately 0.104.</p>
        </div>
        <div>
          <h3>Concavity Mean</h3>
          <p>Concavity mean in breast cancer refers to the measure of the amount of concavity or indentation present in the boundary of the tumor or mass. A high concavity mean value can indicate that the boundary of the tumor or mass is more irregular and potentially more suspicious for cancer, while a lower value can suggest that the boundary is smoother and potentially less concerning.</p>
          <p>the range of concavity mean values is approximately 0 to 0.427. However the average value of concavity mean is approximately 0.046.</p>
        </div>
        <div>
          <h3>Concave Points Mean</h3>
          <p>Concave points mean in breast cancer refers to the average number of concave regions or "dips" present in the boundary of the tumor or mass. A high concave points mean value can indicate that the boundary of the tumor or mass has more concave regions and is potentially more suspicious for cancer, while a lower value can suggest that the boundary is smoother and potentially less concerning.</p>
          <p>the range of values for concave points mean is approximately 0 to 0.152. However the mean value of concave points mean is approximately 0.048.</p>
        </div>
        <div>
          <h3>Symmetry Mean</h3>
          <p>Symmetry mean in breast cancer refers to the degree of symmetry in the shape and size of cells within a breast tissue sample. In healthy breast tissue, cells tend to be fairly uniform in size and shape, resulting in a higher symmetry mean value.</p>
          <p>However, cancer cells can often be irregular in size and shape, which can lead to a lower symmetry mean value. As such, symmetry mean is one of many factors that can be used to help diagnose and assess the severity of breast cancer.</p>
          <p> the range of values for symmetry mean is approximately 0.106 to 0.304. However the average value for symmetry mean is approximately 0.181.</p>
        </div>
        <div>
          <h3>Fractal Dimension Mean</h3>
          <p>Fractal dimension mean in breast cancer refers to a measure of the complexity of the boundary of the cells within a breast tissue sample. In healthy breast tissue, cells tend to have a smooth and regular boundary, resulting in a lower fractal dimension mean value.</p>
          <p>However, cancer cells can often have a more irregular and complex boundary, resulting in a higher fractal dimension mean value. As such, fractal dimension mean is one of many factors that can be used to help diagnose and assess the severity of breast cancer.</p>
          <p> the range of values for Fractal Dimension mean is approximately 0.05 to 0.08. However the average value around 0.05-0.06.</p>
        </div>
        <hr />
        <div>
          <h3>Radius SE</h3>
          <p>The "Radius SE" in breast cancer refers to the standard error of the mean of the distances from the center to points on the perimeter of a detected mass or tumor in the breast. This measurement is one of several that can be used to assess the size and shape of the mass, which can help in the diagnosis and treatment of breast cancer.</p>
          <p> the range of values for Radius SE is approximately 0.11 to 0.30. However the average value typically around 0.25.</p>
        </div>
        <div>
          <h3>Texture SE</h3>
          <p>Texture SE, or Texture Standard Error, is a measure of the variation in texture values within the area of a breast mass or tumor. This is typically calculated as the standard error of the texture values within the region of interest. A higher value of Texture SE may indicate a greater degree of variation in the texture features of the tumor, and may be associated with a higher risk of malignancy.</p>
          <p> the range of values for Texture SE is typically between 0.360 and 4.885.</p>
        </div>
        <div>
          <h3>Perimeter SE</h3>
          <p>In breast cancer, Perimeter SE refers to the standard error of the measurements of the perimeter of cell nuclei. It is an indication of the variability or precision of the measurements. A higher value of Perimeter SE indicates higher variability in the measurements, while a lower value indicates more consistency.</p>
          <p> the range of values for Radius SE is approximately 0.76 to 4.88 (measured in microns). However the average value approximately 2.866 +/- 2.021.</p>
        </div>
        <div>
          <h3>Area SE</h3>
          <p>In breast cancer, Area SE refers to the standard error of the mean of the cross-sectional area of the cells detected in a biopsy. It is a measure of the variability of the area measurements within a particular sample. A higher value of Area SE indicates that the area measurements are more spread out and less consistent, while a lower value indicates that the area measurements are more tightly clustered around the mean.</p>
          <p>The values for Area SE in breast cancer typically range from around 6.8 to 542.2 square units, with most values falling in the range of 20 to 60 square units. In general it is around 40-50 square microns.</p>
        </div>
        <div>
          <h3>Smoothness SE</h3>
          <p>Smoothness SE in breast cancer refers to the standard error of the mean of the smoothness values for the cells in a breast cancer sample. It indicates the variability of smoothness values among different areas of the same breast tissue sample. A higher value of smoothness SE suggests a greater variability among the smoothness values, which could be an indication of more aggressive or abnormal cell growth. On the other hand, a lower value of smoothness SE suggests a more consistent or uniform smoothness pattern, which could be an indication of healthier cell growth.</p>
          <p>
          The range of values for Smoothness SE in breast cancer is between 0.001713 and 0.03113, as seen in the dataset.
          </p>
        </div>
        <div>
          <h3>Compactness SE</h3>
          <p>In breast cancer, Compactness SE refers to the standard error of the mean of the distribution of the local variation in shape of the cell nuclei. It represents the smoothness of the boundary of the cell nucleus.</p>
          <p>
          The range of Compactness SE (standard error) in breast cancer is from approximately 0.002 to 0.135, depending on the dataset and units of measurement. The average value of the Compactness SE in breast cancer is 0.025478.
          </p>
        </div>
        <div>
          <h3>Concavity SE</h3>
          <p>In breast cancer analysis, "Concavity SE" refers to the standard error of the mean for the severity of concavity in cell nuclei. This measures the variation in the concavity values for the nuclei within a given sample. It is an important factor in determining the reliability of the measured concavity values.</p>
          <p> The values range between 0 and 0.4, with some datasets having values up to 1.0</p>
        </div>
        <div>
          <h3>Concave Points SE</h3>
          <p>In breast cancer, the Concave Points SE refers to the standard error of the mean for the local concavity of the contour lines detected in the grayscale image of a fine needle aspirate (FNA) of a breast mass. It represents the variation in the concave points of the cell nuclei within a particular FNA sample. A higher value of concave points SE indicates greater variability in the concavity of the contour lines detected in the image.</p>
          <p>The range of values for Concave Points SE (standard error) in breast cancer is between 0.00097 and 0.03832.</p>
        </div>
        <div>
          <h3>Symmetry SE</h3>
          <p>Symmetry SE (Standard Error) is a measure of the variation of the symmetry values of cells in a biopsy sample. A higher value indicates greater variation in the symmetry of the cells. It is calculated as the standard deviation of the symmetry values divided by the square root of the number of cells in the sample. The values of Symmetry SE in breast cancer dataset range from 0.007882 to 0.07895.</p>
          <p> the range of values for Radius SE is approximately 0.76 to 4.88 (measured in microns). However the average value approximately 2.866 +/- 2.021.</p>
        </div>
        <div>
          <h3>Fractal Dimension SE</h3>
          <p>Fractal dimension SE refers to the standard error of the mean of the "fractal dimension" feature, which is a measure of the complexity of the tumor. The fractal dimension is a mathematical concept that characterizes the degree of self-similarity of a complex structure. In the context of breast cancer, it is used to quantify the irregularity of the tumor boundary.
          </p>
          <p>The fractal dimension SE is a statistical measure that indicates how much the fractal dimension values in a sample of tumors vary from the mean value. A high SE value indicates that the fractal dimension values are widely dispersed, while a low SE value indicates that the fractal dimension values are tightly clustered around the mean value.</p>
          <p>
          In summary, the fractal dimension SE is a measure of the variability in the fractal dimension feature among different tumors in a dataset.
          </p>
          <p>The range of Fractal Dimension SE (standard error) in breast cancer data is 0.00089 to 0.0265.</p>
        </div>
      </div>
    </Fragment>
  )
}
