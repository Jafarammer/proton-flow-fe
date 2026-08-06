import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/appLayout/MainLayout";
import Dashboard from "./pages/dashboard";
import Workflows from "./pages/workflows";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/workflows",
        element: <Workflows />,
      },
    ],
  },
]);
