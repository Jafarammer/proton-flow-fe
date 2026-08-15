import { Divider } from "antd";
// Layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// hooks
import useCreateWorkflow from "../hooks/useCreateWorkflow";
// components
import WorkflowBasicForm from "../components/WorkflowBasicForm";
import WorkflowTrigger from "../components/WorkflowTrigger";
import WorkflowStartingPoint from "../components/WorkflowStartingPoint";
import CreateWorkflowFooter from "../components/CreateWorkflowFooter";
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
      <WorkflowStartingPoint formik={createWorkflow.formik} />
      <Divider className="divider" />
      <CreateWorkflowFooter
        loading={createWorkflow.formik.isSubmitting}
        onSubmit={createWorkflow.onSubmit}
        onCancel={createWorkflow.onCancel}
      />
    </PageLayout>
  );
};

export default CreateWorkflowPage;
