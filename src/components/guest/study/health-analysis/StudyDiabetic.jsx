import DiabeticDiagram from "../../../../assets/images/Diabetes.jpeg";
import { Fragment } from "react";
import { Link } from 'react-router-dom';

export default function StudyDiabetic() {
  return (
    <Fragment>
      <div className="row justify-content-evenly align-content-md-center pt-4">
        <div className="col-md-6">
          <h2>What is diabetic disease?</h2>
          <p>
            Diabetes is a chronic disease that occurs when the body is unable to properly produce or use insulin, a hormone that regulates blood sugar levels. There are two main types of diabetes: type 1 diabetes, which is usually diagnosed in children and young adults and occurs when the body does not produce insulin, and type 2 diabetes, which is the most common form and occurs when the body is unable to use insulin effectively.
          </p> 
          <p>
            Diabetes can lead to a range of health complications if left untreated or poorly managed, including heart disease, nerve damage, kidney disease, and blindness.
          </p>
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src={DiabeticDiagram} />
        </div>
      </div>
      <div>
        <p>
          You can Predict whether you have diabetic or not by providing some inputs in our 
          <Link to="/health-analysis/diabetic-prediction"> Diabetic prediction </Link> 
          section.
        </p>
        <p>There are few parameter which you need to know, before having any input.</p>
        <div>
          <h3>Pregnancies</h3>
          <p>In the context of diabetic disease, "Pregnancies" typically refers to the number of times a woman has been pregnant. It is a variable that may be taken into account when assessing the risk or severity of diabetes in women. For example, women who have had multiple pregnancies may be at higher risk of developing gestational diabetes or type 2 diabetes.</p>
          <p> The range of values for the variable "Pregnancies" is typically between 0 to 17. However, the exact range may vary depending on the dataset being used.</p>
          <p>In a study of diabetic patients, the average number of pregnancies was found to be around 3.8.</p>
        </div>
        <div>
          <h3>Glucose</h3>
          <p>Glucose is a type of sugar that is present in the blood and used by the body for energy. In the context of diabetes, glucose levels can be used to diagnose and monitor the disease.</p>
          <p>When a person has diabetes, their body is not able to regulate glucose levels properly, leading to high levels of glucose in the blood. This can cause a range of symptoms and complications if left untreated.</p>
          <p>Glucose levels are typically measured in milligrams per deciliter (mg/dL) in the blood. In diabetic disease dataset, Glucose refers to the fasting blood sugar level measured in mg/dL.</p>
          <p>In diabetic disease, the range and average value of glucose (blood sugar) can vary depending on the specific type and severity of the condition. However, in general:</p>
          <ul>
            <li>Normal fasting blood glucose levels for adults are typically between 70 and 99 mg/dL (3.9 to 5.5 mmol/L).</li>
            <li>A diagnosis of diabetes is typically made if a person has a fasting blood glucose level of 126 mg/dL (7.0 mmol/L) or higher on two separate occasions.</li>
            <li>For people with diabetes, the American Diabetes Association (ADA) recommends a target range for blood glucose levels of 80-130 mg/dL (4.4 to 7.2 mmol/L) before meals, and less than 180 mg/dL (10.0 mmol/L) two hours after starting a meal.</li>
          </ul>
          <p>It's important to note that glucose levels that are too high or too low can be dangerous and lead to serious health complications. People with diabetes should work closely with their healthcare provider to manage their blood glucose levels within a safe and healthy range.</p>
        </div>
        <div>
          <h3>Blood Pressure</h3>
          <p>Blood pressure refers to the force of blood against the walls of arteries as it circulates through the body. In the context of diabetes, high blood pressure (also known as hypertension) can increase the risk of heart disease, stroke, and other complications. Monitoring and controlling blood pressure levels is an important part of diabetes management.</p>
          <p>Blood pressure is measured using two numbers: systolic pressure (the top number) and diastolic pressure (the bottom number), both expressed in millimeters of mercury (mmHg). A normal blood pressure reading is typically around 120/80 mmHg.</p>
          <p>In diabetic disease, the blood pressure range can vary, but it is generally recommended to keep blood pressure below 140/90 mmHg to reduce the risk of complications. However, individual targets may vary based on age, overall health, and other factors, and should be determined in consultation with a healthcare provider.</p>
        </div>
        <div>
          <h3>Skin Thickness</h3>
          <p>Skin thickness in diabetic disease refers to the thickness of the skin in certain areas of the body. In diabetes, skin thickness is typically measured at specific locations, such as the back of the triceps or the thigh. This measurement can help assess the risk of certain diabetes-related complications, such as neuropathy or ulcers.</p>
          <p>Skin thickness can vary widely among individuals, but in general, normal skin thickness is between 1.5-2.5 mm. In diabetes, skin thickness measurements may range from 0.5-3.0 mm, with an average thickness of around 1.5-2.0 mm.</p>
          <p>However, it's important to note that skin thickness can be influenced by factors such as age, gender, and ethnicity, and can also vary depending on the specific location of the measurement.</p>
        </div>
        <div>
          <h3>Insulin</h3>
          <p>Insulin is a hormone produced by the pancreas that helps regulate the levels of glucose (sugar) in the blood. In diabetic disease, the body either does not produce enough insulin or is not able to use it properly, which can lead to high blood sugar levels.</p>
          <p>Insulin levels can be measured through a blood test, and people with diabetes may need to take insulin injections or use other medications to help manage their blood sugar levels.</p>
        </div>
        <div>
          <h3>BMI</h3>
          <p>BMI (Body Mass Index) is a measure of body fat based on height and weight. It is a commonly used indicator of whether a person is underweight, normal weight, overweight, or obese. In diabetic disease, BMI can be used as a risk factor for the development of type 2 diabetes.</p>
          <p>A BMI of less than 18.5 is considered underweight, a BMI between 18.5 and 24.9 is considered normal, a BMI between 25 and 29.9 is considered overweight, and a BMI of 30 or higher is considered obese.</p>
          <p>It is important to note that BMI is not a perfect measure of body fat and should be interpreted along with other factors such as waist circumference, muscle mass, and overall health status.</p>
        </div>
        <div>
          <h3>Diabetes Pedigree Function</h3>
          <p>The Diabetes Pedigree Function (DPF) is a score that provides information about the risk of developing diabetes based on a person's family history of the disease. It is a measure of the genetic influence on the development of diabetes.</p>
          <p>The DPF score ranges from 0 to 2.5, with higher scores indicating a stronger genetic influence. A score of 0 means there is no genetic influence, while a score of 2.5 indicates a very strong genetic influence.</p>
          <p>The DPF is calculated by looking at the family history of diabetes, including the number of relatives who have diabetes, their age at diagnosis, and how closely they are related to the person being assessed.</p>
          <p>In diabetic disease, the average value of the DPF is around 0.5, with a range of 0 to 2.5. However, it is important to note that a high DPF score does not necessarily mean that a person will develop diabetes, as other factors such as lifestyle and environmental factors also play a role in the development of the disease.</p>
        </div>
      </div>
      </Fragment>
  )
}
