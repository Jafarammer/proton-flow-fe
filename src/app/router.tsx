import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/appLayout/MainLayout";
// features
import WorkFlowListPage from "../features/workflows/pages/WorkFlowListPage";
import Overview from "../features/dashboard/pages/Overview";
import TemplateListPage from "../features/templates/pages/TemplateListPage";
// pages
import NotFoundPage from "../pages/NotFoundPage";

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
        element: <Overview />,
      },
      {
        path: "/workflows",
        element: <WorkFlowListPage />,
      },
      {
        path: "/templates",
        element: <TemplateListPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
