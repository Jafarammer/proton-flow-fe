// UI Library
import { Alert, Typography } from "antd";
import { useParams } from "react-router-dom";
// components
import DocumentationSidebar from "../components/DocumentationSidebar";
import DocumentationHeader from "../components/DocumentationHeader";
import DocumentationSection from "../components/DocumentationSection";
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

        <DocumentationSection
          id="overview"
          title="Overview"
          description={providerDocumentation[provider ?? ""].overview}
        />

        <DocumentationSection
          id="workflow"
          title="Usage in Workflow"
          description={
            providerDocumentation[provider ?? ""].workflow.description
          }
        >
          <ol className="documentation-steps">
            {providerDocumentation[provider ?? ""].workflow.steps.map(
              (step) => (
                <li key={step}>{step}</li>
              ),
            )}
          </ol>
        </DocumentationSection>
      </main>
    </div>
  );
};

export default IntegrationDocumentationPage;
