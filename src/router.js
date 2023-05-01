import { createBrowserRouter } from "react-router-dom";
// import DefaultLayout from "./components/common/layout/UserLayout.jsx";
import GuestLayout from "./components/common/layout/GuestLayout.jsx";

import Home from "./views/guest/ViewHome.jsx";
import About from "./views/guest/ViewAbout.jsx";
import Error404 from "./views/Error404.jsx";
import HealthAnalysis from "./views/guest/ViewHealthAnalysis.jsx";
import Study from "./views/guest/ViewStudy.jsx";

// Health Analysis Component
import DiabeticPrediction from "./views/guest/health-analysis/ViewDiabeticPrediction.jsx";
import BreastCancerPrediction from "./views/guest/health-analysis/ViewBreastCancerPrediction.jsx";
import ChronicKidneyDisease from "./views/guest/health-analysis/ViewChronicKidneyDisease.jsx";
import HeartDisease from "./views/guest/health-analysis/ViewHeartDisease.jsx";
import LiverDisease from "./views/guest/health-analysis/ViewLiverDisease.jsx";
import HeartAttackRiskPredictor from "./views/guest/health-analysis/ViewHeartAttackRiskPredictor.jsx";
import PneumoniaXRayDetector from "./views/guest/health-analysis/ViewPneumoniaXRayDetector.jsx";

// Study Health Analysis Component
import ViewStudyHealthAnalysis from "./views/guest/study/ViewStudyHealthAnalysis.jsx";
import ViewStudyBreastCancer from "./views/guest/study/health-analysis/ViewStudyBreastCancer.jsx";
import ViewStudyDiabetic from "./views/guest/study/health-analysis/ViewStudyDiabetic.jsx";
import ViewStudyHeartDisease from "./views/guest/study/health-analysis/ViewStudyHeartDisease.jsx";
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <UserLayout />,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Navigate to="/dashboard" />,
  //     },
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: "/pollutions",
  //       element: <Pollutions />,
  //     },
  //     {
  //       path: "/pollutions/:pollution_id",
  //       element: <Pollution key="showPollution" />,
  //     },
  //     {
  //       path: "/crops/detect",
  //       element: <DetectCrops />,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/health-analysis",
        element: <HealthAnalysis />,
      },
      {
        path: "/health-analysis/breast-cancer-prediction",
        element: <BreastCancerPrediction />,
      },
      {
        path: "/health-analysis/chronic-kidney-disease",
        element: <ChronicKidneyDisease />,
      },
      {
        path: "/health-analysis/diabetic-prediction",
        element: <DiabeticPrediction />,
      },
      {
        path: "/health-analysis/heart-disease",
        element: <HeartDisease />,
      },
      {
        path: "/health-analysis/liver-disease",
        element: <LiverDisease />,
      },
      {
        path: "/health-analysis/heart-attack-risk-predictor",
        element: <HeartAttackRiskPredictor />,
      },
      {
        path: "/health-analysis/pneumonia-x-ray-detector",
        element: <PneumoniaXRayDetector />,
      },
      {
        path: "/study",
        element: <Study />,
      },
      {
        path: "/study/health-analysis",
        element: <ViewStudyHealthAnalysis />,
      },
      {
        path: "/study/health-analysis/breast-cancer",
        element: <ViewStudyBreastCancer />,
      },
      {
        path: "/study/health-analysis/diabetic-disease",
        element: <ViewStudyDiabetic />,
      },
      {
        path: "/study/health-analysis/heart-disease",
        element: <ViewStudyHeartDisease />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
