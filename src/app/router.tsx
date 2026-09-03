import { createBrowserRouter, Navigate } from "react-router-dom";
// layouts
import MainLayout from "../layouts/appLayout/MainLayout";
// features main
import Overview from "../features/dashboard/pages/Overview";
import WorkFlowListPage from "../features/workflows/pages/WorkFlowListPage";
import CreateWorkflowPage from "../features/workflows/pages/CreateWorkflowPage";
import TemplateListPage from "../features/templates/pages/TemplateListPage";
import TemplatePreviewPage from "../features/templates/pages/TemplatePreviewPage";
import IntegrationListPage from "../features/integrations/pages/IntegrationListPage";
import IntegrationConfigurePages from "../features/integrations/pages/IntegrationConfigurePages";
import IntegrationDocumentationPage from "../features/integrations/pages/IntegrationDocumentationPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import SettingPage from "../features/settings/pages/SettingPage";
// features auth
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ForgotPassword from "../features/auth/pages/ForgotPassword";
import ResetPassword from "../features/auth/pages/ResetPassword";
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
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
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
        children: [
          {
            index: true,
            element: <TemplateListPage />,
          },
          {
            path: ":templateId/preview",
            element: <TemplatePreviewPage />,
          },
        ],
      },

      {
        path: "integrations",
        children: [
          {
            index: true,
            element: <IntegrationListPage />,
          },
          {
            path: ":provider/configure",
            element: <IntegrationConfigurePages />,
          },
          {
            path: ":provider/documentation",
            element: <IntegrationDocumentationPage />,
          },
        ],
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
