import { useNavigate, useParams } from "react-router-dom";
// components
import TemplatePreviewHeader from "../components/TemplatePreviewHeader";
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
    </div>
  );
};

export default TemplatePreviewPage;
