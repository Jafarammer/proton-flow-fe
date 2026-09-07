// UI Library
// import { Typography } from "antd";
// component
import OverviewStatCard from "../components/OverviewStatCard";
import WorkflowActivityChart from "../components/WorkflowActivityChart";
import WorkflowStatusChart from "../components/WorkflowStatusChart";
import RecentWorkflows from "../components/RecentWorkflows";
// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// constants
import {
  overviewStats,
  workflowActivityData,
  workflowStatusData,
  recentWorkflows,
} from "../constants";
// styles
import "./styles/overview.scss";

// const { Title, Text } = Typography;

const Overview = () => {
  return (
    <PageLayout
      title="Overview"
      desc="Monitor your AI workflows and system performance."
      className="overview-page"
    >
      <div className="overview-page__stat">
        {overviewStats.map((stat) => (
          <OverviewStatCard key={stat.key} data={stat} />
        ))}
      </div>

      <div className="overview-page__charts">
        <WorkflowActivityChart data={workflowActivityData} />
        <WorkflowStatusChart data={workflowStatusData} />
      </div>

      <div className="overview-page__recent">
        <RecentWorkflows data={recentWorkflows} />
      </div>
    </PageLayout>
  );
};

export default Overview;
