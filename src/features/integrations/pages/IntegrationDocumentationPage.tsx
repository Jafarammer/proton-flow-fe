// UI Library
import { Alert, Typography } from "antd";
import { useParams } from "react-router-dom";
// components
import DocumentationSidebar from "../components/DocumentationSidebar";
// constants
import { providerDocumentation } from "../constants";
// styles
import "./styles/integration_document_page.scss";

const IntegrationDocumentationPage = () => {
  return (
    <div className="integration-docs-page">
      <DocumentationSidebar activeSection="overview" />
    </div>
  );
};

export default IntegrationDocumentationPage;
