import Diagram from "../../../../assets/images/liver-disease.jpg";
import { Fragment } from "react";
import { Link } from 'react-router-dom';

export default function StudyLiverDisease() {
  return (
    <Fragment>
      <div className="row justify-content-evenly align-content-md-center pt-4">
        <div className="col-md-6">
          <h2>What is liver disease?</h2>
          <p>
            Liver disease refers to any condition that affects the liver and prevents it from functioning properly. There are many different types of liver disease, including viral hepatitis, cirrhosis, fatty liver disease, and liver cancer.
          </p> 
          <p>
          Symptoms of liver disease may include fatigue, jaundice, abdominal pain, and swelling of the legs and abdomen. Liver disease can be caused by a variety of factors, including alcohol abuse, viral infections, autoimmune disorders, and genetic conditions. Treatment for liver disease depends on the specific type and severity of the condition.
          </p>
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={Diagram} />
        </div>
      </div>
      <div>
        <p>
          You can Predict whether you have liver disease or not by providing some inputs in our 
          <Link to="/health-analysis/liver-disease"> Liver disease </Link> 
          section.
        </p>
        <p>There are few parameter which you need to know, before having any input.</p>
        <div>
          <h3>Pregnancies</h3>
          <p>Liver disease is a broad term that encompasses many different types of liver problems. However, pregnancy is not typically associated with liver disease. While there are some pregnancy-related liver conditions, such as intrahepatic cholestasis of pregnancy and preeclampsia.</p>
        </div>
        <div>
          <h3>Glucose</h3>
          <p>Liver disease does not usually affect glucose levels in the same way that diabetes does. However, some forms of liver disease, such as cirrhosis or hepatitis C, can lead to insulin resistance and glucose intolerance, which can ultimately result in diabetes.</p>
          <p>Additionally, people with liver disease may have low blood sugar levels (hypoglycemia) due to impaired liver function and the liver's ability to regulate glucose levels in the body. The specific effects on glucose levels will depend on the type and severity of liver disease.</p>
          <ul>
            <li>Normal fasting blood glucose levels for adults are typically between 70 and 99 mg/dL (3.9 to 5.5 mmol/L).</li>
            <li>A diagnosis of diabetes is typically made if a person has a fasting blood glucose level of 126 mg/dL (7.0 mmol/L) or higher on two separate occasions.</li>
            <li>For people with diabetes, the American Diabetes Association (ADA) recommends a target range for blood glucose levels of 80-130 mg/dL (4.4 to 7.2 mmol/L) before meals, and less than 180 mg/dL (10.0 mmol/L) two hours after starting a meal.</li>
          </ul>
          <p>It's important to note that glucose levels that are too high or too low can be dangerous and lead to serious health complications. People with diabetes should work closely with their healthcare provider to manage their blood glucose levels within a safe and healthy range.</p>
        </div>
        <div>
          <h3>Alkaline phosphatase (ALP)</h3>
          <p>Alkaline phosphatase (ALP) is an enzyme found in many tissues in the body, including the liver, bones, kidneys, and intestines. In the context of liver disease, ALP is often used as a marker of liver function and damage.</p>
          <p>Elevated levels of ALP in the blood can indicate liver injury or disease, such as hepatitis, cirrhosis, or liver cancer. </p>
          <p> However, it is important to note that ALP levels can also be elevated in non-liver-related conditions, such as bone disorders or pregnancy.</p>
          <p> In general, for adults, the normal range is between 20 and 140 international units per liter (IU/L).</p>
        </div>
        <div>
          <h3>Alamine aminotransferase (ALT)</h3>
          <p>Alamine aminotransferase (ALT) is an enzyme found primarily in the liver cells. It is also known as serum glutamic-pyruvic transaminase (SGPT). ALT is released into the bloodstream when there is damage or injury to the liver cells.</p>
          <p>Therefore, measuring the level of ALT in the blood can help diagnose liver diseases such as hepatitis, cirrhosis, and liver cancer. In liver disease, the ALT level can be elevated, indicating liver damage or inflammation.</p>
        </div>
        <div>
          <h3>Aspartate aminotransferase (AST)</h3>
          <p>Aspartate aminotransferase (AST) is an enzyme that is predominantly found in the liver, but is also present in other tissues such as the heart, kidneys, and muscles. In liver disease, AST levels can be elevated due to damage or inflammation of liver cells, although elevated AST levels can also occur in other conditions such as heart disease or muscle damage.</p>
          <p>AST is often measured along with other liver function tests to help diagnose and monitor liver disease.</p>
          <p>The normal range of Aspartate Aminotransferase (AST) in the blood is generally between 10 to 40 units per liter (U/L).</p>
        </div>
        <div>
          <h3>Total Protiens </h3>
          <p>Total proteins in liver disease refer to the amount of protein in the blood. The liver plays a vital role in producing proteins that help with the clotting of blood, transporting substances in the blood, and supporting the immune system. </p>
          <p>Therefore, liver disease can impact the production and distribution of proteins in the body, leading to abnormal levels of total proteins in the blood.</p>
          <p>In liver disease, the normal range for total protein levels in the blood is 6.0 to 8.3 grams per deciliter (g/dL).</p>
        </div>
        <div>
          <h3>Albumin</h3>
          <p>Albumin is a type of protein that is produced in the liver and is present in the blood. It is an essential protein that helps regulate blood volume and pressure, as well as transporting molecules throughout the body. In liver disease, the liver may not produce enough albumin, which can lead to edema (swelling) and other complications.</p>
          <p>Albumin is a protein produced by the liver, and its levels can be used to assess liver function. In liver disease, the albumin levels may be abnormal. The normal range of albumin in the blood is typically between 3.4 and 5.4 grams per deciliter (g/dL).</p>
        </div>
        <div>
          <h3>Albumin and Globulin Ratio (AGR)</h3>
          <p>Albumin and Globulin Ratio (AGR) is a blood test that measures the levels of albumin and globulin in the blood and calculates the ratio between them. </p>
          <p>Albumin is a protein made by the liver that helps to maintain the osmotic pressure in the blood and transports various substances, such as hormones and drugs. Globulins are another type of protein made by the liver that help the immune system fight infections and transport various substances in the blood.</p>
          <p>The AGR is calculated by dividing the albumin level by the globulin level. An abnormal AGR value may indicate liver disease, kidney disease, malnutrition, or other health conditions. </p>
          <p>Typically, a normal AGR value falls between 1.0 and 2.5, with higher values indicating a higher concentration of albumin relative to globulin.</p>
        </div>
      </div>
      </Fragment>
  )
}
