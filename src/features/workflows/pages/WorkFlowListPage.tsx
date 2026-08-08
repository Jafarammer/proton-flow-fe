// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// components
import WorkFlowsFilter from "../components/WorkFlowsFilter";
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
    </PageLayout>
  );
};

export default WorkFlowListPage;
