import { useNavigate } from "react-router-dom";

const useTemplates = () => {
  // router
  const navigate = useNavigate();
  // function event
  const onPreview = (templateId: string) => {
    navigate(`/templates/${templateId}/preview`);
  };
  const onUseTemplate = (templateId: string) => {
    alert(`Use Template ${templateId}`);
  };

  return {
    onPreview,
    onUseTemplate,
  };
};

export default useTemplates;
