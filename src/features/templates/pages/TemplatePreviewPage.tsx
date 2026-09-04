import { useNavigate, useParams } from "react-router-dom";
// components
import TemplatePreviewHeader from "../components/TemplatePreviewHeader";
import TemplateWorkflowPreview from "../components/TemplateWorkflowPreview";
// constants
import { templateConfig } from "../contstants";
// styles
import "./styles/template_preview_page.scss";

const TemplatePreviewPage = () => {
  // router
  const navigate = useNavigate();
  const { templateId } = useParams<{ templateId: string }>();
  // function
  const onBack = (): void => {
    navigate("/templates");
  };
  const onUseTemplate = (): void => {
    alert(`Use template ${templateId}`);
  };
  return (
    <div className="template-preview-page">
      <TemplatePreviewHeader
        onBack={onBack}
        onUseTemplate={onUseTemplate}
        title={templateConfig[templateId ?? ""].title}
        description={templateConfig[templateId ?? ""].description}
        category={templateConfig[templateId ?? ""].category}
      />

      <section className="template-preview-page__canvas">
        <TemplateWorkflowPreview templateId={templateId ?? ""} />
      </section>

      {/* <section className="template-preview-page__info">
        <h2>How it works</h2>

        <div className="template-preview-page__steps">
          <div className="template-preview-step">
            <span>1</span>
            <div>
              <h3>Ticket Received</h3>
              <p>A new support ticket enters Proton Flow through a webhook.</p>
            </div>
          </div>

          <div className="template-preview-step">
            <span>2</span>

            <div>
              <h3>Intent Analysis</h3>

              <p>
                The AI analyzes the customer's request and determines what
                action should happen next.
              </p>
            </div>
          </div>

          <div className="template-preview-step">
            <span>3</span>

            <div>
              <h3>Smart Routing</h3>

              <p>
                Proton Flow answers from the knowledge base, requests more
                information, or escalates the ticket to a human agent.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TemplatePreviewPage;
