import { createBrowserRouter, Navigate } from "react-router-dom";
// layouts
import MainLayout from "../layouts/appLayout/MainLayout";
// features main
import Overview from "../features/dashboard/pages/Overview";
import WorkFlowListPage from "../features/workflows/pages/WorkFlowListPage";
import CreateWorkflowPage from "../features/workflows/pages/CreateWorkflowPage";
import TemplateListPage from "../features/templates/pages/TemplateListPage";
import IntegrationListPage from "../features/integrations/pages/IntegrationListPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import SettingPage from "../features/settings/pages/SettingPage";
// features auth
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
// Pages
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
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
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Overview />,
      },

      {
        path: "workflows",
        children: [
          {
            index: true,
            element: <WorkFlowListPage />,
          },
          {
            path: "create",
            element: <CreateWorkflowPage />,
          },
        ],
      },

      {
        path: "templates",
        element: <TemplateListPage />,
      },

      {
        path: "integrations",
        element: <IntegrationListPage />,
      },
      {
        path: "settings",
        element: <SettingPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
