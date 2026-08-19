import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/appLayout/MainLayout";
// Dashboard
import Overview from "../features/dashboard/pages/Overview";
// Workflows
import WorkFlowListPage from "../features/workflows/pages/WorkFlowListPage";
import CreateWorkflowPage from "../features/workflows/pages/CreateWorkflowPage";
// Templates
import TemplateListPage from "../features/templates/pages/TemplateListPage";
// Integrations
import IntegrationListPage from "../features/integrations/pages/IntegrationListPage";
// Profile
import ProfilePage from "../features/profile/pages/ProfilePage";
// settings
import SettingPage from "../features/settings/pages/SettingPage";
// Pages
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
