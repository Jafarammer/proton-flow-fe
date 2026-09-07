import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
// type
import type { WorkflowStatus, IWorkflowStatusData } from "../types/overview";
// styles
import "./styles/workflow_status_chart.scss";

interface WorkflowStatusChartProps {
  data: IWorkflowStatusData[];
}

const WorkflowStatusChart = ({ data }: WorkflowStatusChartProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const getStatusColor = (status: WorkflowStatus): string => {
    switch (status) {
      case "active":
        return "#86EFAC";
      case "draft":
        return "#FDE047";
      case "inactive":
        return "#CBD5E1";
      default:
        return "var(--ant-color-primary)";
    }
  };

  return (
    <div className="workflow-status-chart">
      <div className="workflow-status-chart__header">
        <div>
          <h3>Workflow Status</h3>
          <p>Current workflow distribution.</p>
        </div>
      </div>

      <div className="workflow-status-chart__content">
        <div className="workflow-status-chart__chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                paddingAngle={3}
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={getStatusColor(item.status)} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "var(--ant-color-bg-elevated)",
                  border: "1px solid var(--ant-color-border-secondary)",
                  borderRadius: 8,
                  color: "var(--ant-color-text)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="workflow-status-chart__total">
            <strong>{total}</strong>
            <span>Workflows</span>
          </div>
        </div>

        <div className="workflow-status-chart__legend">
          {data.map((item) => (
            <div key={item.name} className="workflow-status-chart__legend-item">
              <div>
                <span
                  style={{
                    background: getStatusColor(item.status),
                  }}
                />
                {item.name}
              </div>

              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowStatusChart;
