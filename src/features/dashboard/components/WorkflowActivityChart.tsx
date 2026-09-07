import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// type
import type { IWorkflowActivity } from "../types/overview";
// styles
import "./styles/workflow_activity_chart.scss";

interface WorkflowActivityChartProps {
  data: IWorkflowActivity[];
}

const WorkflowActivityChart = ({ data }: WorkflowActivityChartProps) => {
  return (
    <div className="workflow-activity-chart">
      <div className="workflow-activity-chart__header">
        <div>
          <h3>Workflow Activity</h3>
          <p>Track total and active workflows over time.</p>
        </div>

        <div className="workflow-activity-chart__legend">
          <div>
            <span className="workflow-activity-chart__dot workflow-activity-chart__dot--total" />
            Total
          </div>
          <div>
            <span className="workflow-activity-chart__dot workflow-activity-chart__dot--active" />
            Active
          </div>
        </div>
      </div>

      <div className="workflow-activity-chart__content">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="var(--ant-color-border-secondary)"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--ant-color-text-secondary)",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
              tick={{
                fill: "var(--ant-color-text-secondary)",
                fontSize: 12,
              }}
            />

            <Tooltip
              itemSorter={(item) => {
                if (item.dataKey === "total") return -1;
                if (item.dataKey === "active") return 1;

                return 0;
              }}
              contentStyle={{
                background: "var(--ant-color-bg-elevated)",
                border: "1px solid var(--ant-color-border-secondary)",
                borderRadius: 8,
                color: "var(--ant-color-text)",
              }}
            />

            <Line
              type="monotone"
              dataKey="total"
              name="Total Workflows"
              stroke="#76c457"
              strokeWidth={3}
              dot={false}
            />

            <Line
              type="monotone"
              dataKey="active"
              name="Active Workflows"
              stroke="#ffcb56"
              strokeWidth={2}
              strokeDasharray="6 6"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WorkflowActivityChart;
