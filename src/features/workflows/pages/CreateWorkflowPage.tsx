// Layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// hooks
import useCreateWorkflow from "../hooks/useCreateWorkflow";
// components
import WorkflowBasicForm from "../components/WorkflowBasicForm";
import WorkflowTrigger from "../components/WorkflowTrigger";
// styles scss
import "./styles/create_workflow_page.scss";

const CreateWorkflowPage = () => {
  // hooks
  const createWorkflow = useCreateWorkflow();
  return (
    <PageLayout
      title="Create New Workflow"
      desc="Configure the basic settings and starting point for your automated sequence."
      className="create-workflow-page"
    >
      <WorkflowBasicForm formik={createWorkflow.formik} />
      <WorkflowTrigger formik={createWorkflow.formik} />
    </PageLayout>
  );
};

export default CreateWorkflowPage;
