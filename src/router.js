import { createBrowserRouter, Navigate } from "react-router-dom";
import UserLayout from "./components/common/layout/UserLayout.jsx";
import GuestLayout from "./components/common/layout/GuestLayout.jsx";

import Home from "./views/guest/ViewHome.jsx";
import About from "./views/guest/ViewAbout.jsx";
import Login from "./views/guest/ViewLogin.jsx";
import Register from "./views/guest/ViewRegister.jsx";
import HealthAnalysis from "./views/guest/ViewHealthAnalysis.jsx";
import StudyBase from "./views/guest/ViewStudyBase.jsx";
import Error404 from "./views/Error404.jsx";

// Health Analysis Component
// import DiabeticPrediction from "./views/guest/health-analysis/ViewDiabeticPrediction.jsx";
// import BreastCancerPrediction from "./views/guest/health-analysis/ViewBreastCancerPrediction.jsx";
// import ChronicKidneyDisease from "./views/guest/health-analysis/ViewChronicKidneyDisease.jsx";
// import HeartDisease from "./views/guest/health-analysis/ViewHeartDisease.jsx";
// import LiverDisease from "./views/guest/health-analysis/ViewLiverDisease.jsx";
// import ChestXRayScan from "./views/guest/health-analysis/ViewChestXRayScan.jsx";
// import SkinCancer from "./views/guest/health-analysis/ViewSkinCancer.jsx";
// import HeartAttackRiskPredictor from "./views/guest/health-analysis/ViewHeartAttackRiskPredictor.jsx";
// import PneumoniaXRayDetector from "./views/guest/health-analysis/ViewPneumoniaXRayDetector.jsx";

// Study Health Analysis Component
// import ViewStudyHealthAnalysis from "./views/guest/study/ViewStudyHealthAnalysis.jsx";
// import ViewStudyBreastCancer from "./views/guest/study/health-analysis/ViewStudyBreastCancer.jsx";
// import ViewStudyDiabetic from "./views/guest/study/health-analysis/ViewStudyDiabetic.jsx";
// import ViewStudyHeartDisease from "./views/guest/study/health-analysis/ViewStudyHeartDisease.jsx";
// import ViewChronicKidneyDisease from "./views/guest/study/health-analysis/ViewStudyChronicKidneyDisease.jsx";
// import ViewStudyLiverDisease from "./views/guest/study/health-analysis/ViewStudyLiverDisease.jsx";
// import ViewStudyHeartAttackDisease from "./views/guest/study/health-analysis/ViewStudyHeartAttackDisease.jsx";

// User Login Components
import UserDashboard from "./views/user/ViewDashboard.jsx";
import UserHealthActivity from "./views/user/ViewHealthActivity.jsx";
import UserHealthHistory from "./views/user/ViewHealthHistory.jsx";
import UserFamily from "./views/user/ViewFamily.jsx";
import UserKnownHealthIssues from "./views/user/ViewKnownHealthIssues.jsx";
import UserAppointments from "./views/user/ViewAppointment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/health-activity",
        element: <UserHealthActivity />,
      },
      {
        path: "/my-family",
        element: <UserFamily />,
      },
      {
        path: "/health-history",
        element: <UserHealthHistory />,
      },
      {
        path: "/known-health-issues",
        element: <UserKnownHealthIssues />,
      },
      {
        path: "/my-appointments",
        element: <UserAppointments />,
      },
      // {
      //   path: "/pollutions",
      //   element: <Pollutions />,
      // },
      // {
      //   path: "/pollutions/:pollution_id",
      //   element: <Pollution key="showPollution" />,
      // },
      // {
      //   path: "/crops/detect",
      //   element: <DetectCrops />,
      // },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/health-analysis",
      //   element: <HealthAnalysis />,
      // },
      // {
      //   path: "/health-analysis/breast-cancer-prediction",
      //   element: <BreastCancerPrediction />,
      // },
      // {
      //   path: "/health-analysis/chronic-kidney-disease",
      //   element: <ChronicKidneyDisease />,
      // },
      // {
      //   path: "/health-analysis/diabetic-prediction",
      //   element: <DiabeticPrediction />,
      // },
      // {
      //   path: "/health-analysis/heart-disease",
      //   element: <HeartDisease />,
      // },
      // {
      //   path: "/health-analysis/liver-disease",
      //   element: <LiverDisease />,
      // },
      // {
      //   path: "/health-analysis/chest-x-ray-scan",
      //   element: <ChestXRayScan />,
      // },
      // {
      //   path: "/health-analysis/skin-cancer",
      //   element: <SkinCancer />,
      // },
      // {
      //   path: "/health-analysis/heart-attack-risk-predictor",
      //   element: <HeartAttackRiskPredictor />,
      // },
      // {
      //   path: "/health-analysis/pneumonia-x-ray-detector",
      //   element: <PneumoniaXRayDetector />,
      // },
      // {
      //   path: "/study",
      //   element: <StudyBase />,
      // },
      // {
      //   path: "/study/health-analysis",
      //   element: <ViewStudyHealthAnalysis />,
      // },
      // {
      //   path: "/study/health-analysis/breast-cancer",
      //   element: <ViewStudyBreastCancer />,
      // },
      // {
      //   path: "/study/health-analysis/diabetic-disease",
      //   element: <ViewStudyDiabetic />,
      // },
      // {
      //   path: "/study/health-analysis/chronic-kidney-disease",
      //   element: <ViewChronicKidneyDisease />,
      // },
      // {
      //   path: "/study/health-analysis/heart-disease",
      //   element: <ViewStudyHeartDisease />,
      // },
      // {
      //   path: "/study/health-analysis/liver-disease",
      //   element: <ViewStudyLiverDisease />,
      // },
      // {
      //   path: "/study/health-analysis/heart-attack",
      //   element: <ViewStudyHeartAttackDisease />,
      // },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
