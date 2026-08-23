// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// components
import WorkFlowsFilter from "../components/WorkFlowsFilter";
import WorkFlowsTable from "../components/WorkFlowsTable";
import DeleteWorkflowModal from "../components/DeleteWorkflowModal";
// hooks
import useWorkflows from "../hooks/useWorkFlows";
// styles
import "./styles/workflows_list_page.scss";

const WorkFlowListPage = () => {
  // hooks
  const workflows = useWorkflows();
  return (
    <PageLayout
      title="Workflows"
      desc="Manage and monitor your automated pipelines."
      className="container"
    >
      <WorkFlowsFilter
        status={workflows.status}
        onChangeStatus={workflows.onChangeStatus}
        trigger={workflows.trigger}
        onChangeTrigger={workflows.onChangeTrigger}
        sortFilter={workflows.sortFilter}
        onChangeSortFilter={workflows.onChangeSortFilter}
      />

      <WorkFlowsTable
        onEditWorkflow={(item) => workflows.onEditWorkflow(item.id)}
        onConfirmDeleteWorkflow={(item) =>
          workflows.onConfirmDeleteWorkflow(item)
        }
      />

      <DeleteWorkflowModal
        open={workflows.openModalDelete}
        workflow={workflows.selectedWorkflow}
        onClose={workflows.onCloseDeleteModal}
        onDelete={workflows.onDeleteWorkflow}
      />
    </PageLayout>
  );
};

export default WorkFlowListPage;
