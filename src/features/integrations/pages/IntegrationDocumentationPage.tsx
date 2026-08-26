// UI Library
import { Alert, Typography } from "antd";
import { useParams } from "react-router-dom";
// components
import DocumentationSidebar from "../components/DocumentationSidebar";
import DocumentationHeader from "../components/DocumentationHeader";
// constants
import { providerDocumentation } from "../constants";
// styles
import "./styles/integration_document_page.scss";

const IntegrationDocumentationPage = () => {
  // router
  const { provider } = useParams();
  return (
    <div className="integration-docs-page">
      <DocumentationSidebar activeSection="overview" />

      <main className="documentation-content">
        <DocumentationHeader
          title={providerDocumentation[provider ?? ""].title}
          description={providerDocumentation[provider ?? ""].description}
        />
      </main>
    </div>
  );
};

export default IntegrationDocumentationPage;
