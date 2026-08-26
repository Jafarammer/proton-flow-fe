import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// UI Library
import { Alert, Typography, Button } from "antd";
// icon
import { IoIosArrowBack } from "react-icons/io";
// components
import DocumentationSidebar from "../components/DocumentationSidebar";
import DocumentationHeader from "../components/DocumentationHeader";
import DocumentationSection from "../components/DocumentationSection";
import DocumentationModels from "../components/DocumentationModels";
// constants
import { providerDocumentation } from "../constants";
// styles
import "./styles/integration_document_page.scss";

const { Paragraph } = Typography;

const IntegrationDocumentationPage = () => {
  // router
  const { provider } = useParams();
  const navigate = useNavigate();
  // useState
  const [activeSection, setActiveSection] = useState<string>("overview");

  return (
    <div className="integration-docs-page">
      <DocumentationSidebar
        activeSection={activeSection}
        onChangeSection={setActiveSection}
      />

      <main className="documentation-content">
        <Button
          color="primary"
          variant="text"
          icon={<IoIosArrowBack />}
          onClick={() => navigate("/integrations")}
          className="btn"
        >
          Back
        </Button>

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
          id="authentication"
          title="Authentication"
          description={
            providerDocumentation[provider ?? ""].authentication.description
          }
        >
          <ol className="documentation-steps">
            {providerDocumentation[provider ?? ""].authentication.steps.map(
              (step) => (
                <li key={step}>{step}</li>
              ),
            )}
          </ol>
          <Alert
            type="info"
            showIcon
            message="Keep your API key private. Never expose provider API keys in client-side workflow data."
          />
        </DocumentationSection>

        <DocumentationSection
          id="models"
          title="Available Models"
          description={`Models currently available for ${providerDocumentation[provider ?? ""].title}`}
        >
          <DocumentationModels
            models={providerDocumentation[provider ?? ""].models}
          />
        </DocumentationSection>

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
                <li id={step}>{step}</li>
              ),
            )}
          </ol>
        </DocumentationSection>

        <DocumentationSection id="example" title="Example">
          <div className="documentation-example">
            <span className="example-title">
              {providerDocumentation[provider ?? ""].example.title}
            </span>
            <Paragraph className="desc">
              {providerDocumentation[provider ?? ""].example.prompt}
            </Paragraph>
          </div>
        </DocumentationSection>
      </main>
    </div>
  );
};

export default IntegrationDocumentationPage;
