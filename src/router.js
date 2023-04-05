import { createBrowserRouter, Navigate } from "react-router-dom";
// import DefaultLayout from "./components/common/layout/UserLayout.jsx";
import GuestLayout from "./components/common/layout/GuestLayout.jsx";

import Home from "./views/guest/Home.jsx";
import About from "./views/guest/About.jsx";
import HeartAttackRiskPredictor from "./views/guest/HeartAttackRiskPredictor.jsx";
import PneumoniaXRayDetector from "./views/guest/PneumoniaXRayDetector.jsx";

import Error404 from "./views/Error404.jsx";

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
        path: "/health-analysis/heart-attack-risk-predictor",
        element: <HeartAttackRiskPredictor />
      },
      {
        path: "/health-analysis/pneumonia-x-ray-detector",
        element: <PneumoniaXRayDetector />
      }
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
