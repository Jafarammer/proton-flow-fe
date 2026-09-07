import { useNavigate } from "react-router-dom";
// UI Library
import { Button, Tag } from "antd";
// type
import type { IRecentWorkflow } from "../types/overview";
// styles
import "./styles/recent_workflow.scss";

interface RecentWorkflowsProps {
  data: IRecentWorkflow[];
}

const RecentWorkflows = ({ data }: RecentWorkflowsProps) => {
  // router
  const navigate = useNavigate();

  return (
    <div className="recent-workflow">
      <div className="recent-workflow__header">
        <div>
          <h3>Recent Workflows</h3>
          <p>Recently created or updated workflows.</p>
        </div>

        <Button
          color="primary"
          variant="text"
          onClick={() => navigate("/workflows")}
        >
          View All
        </Button>
      </div>

      <div className="recent-workflow__list">
        {data.map((workflow) => (
          <button
            key={workflow.id}
            type="button"
            className="recent-workflow__item"
            onClick={() => navigate(`/workflows/${workflow.id}`)}
          >
            <div className="recent-workflow__info">
              <strong>{workflow.name}</strong>
              <span>Updated {workflow.updatedAt}</span>
            </div>

            <Tag className="tag">{workflow.status}</Tag>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentWorkflows;
