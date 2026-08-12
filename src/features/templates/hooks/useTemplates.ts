const useTemplates = () => {
  // function event
  const onPreview = (templateId: string) => {
    alert(`Preview ${templateId}`);
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
