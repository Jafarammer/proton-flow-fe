// UI Library
import { Table } from "antd";
// global components
import { EmptyData } from "../../../components/common";
// type
import type { IWorkflowData } from "../types/components";
// config table
import { getWorkflowColumns } from "../table/Columns";
// static data
import { dataTableWorkflows } from "../table/dataTable";
// styles scss
import "./styles/work_flows_table.scss";

interface WorkflowTableProps {
  onEditWorkflow: (workFlow: IWorkflowData) => void;
  onDeleteWorkflow: (workFlow: IWorkflowData) => void;
}

const WorkFlowsTable = ({
  onEditWorkflow,
  onDeleteWorkflow,
}: WorkflowTableProps) => {
  // config
  const columns = getWorkflowColumns({ onEditWorkflow, onDeleteWorkflow });
  return (
    <div className="work-flows-table">
      <Table<IWorkflowData>
        rowKey="id"
        columns={columns}
        dataSource={dataTableWorkflows}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          position: ["bottomRight"],
        }}
        locale={{
          emptyText: (
            <EmptyData
              title="No workflows found"
              description="Create your first workflow to get started."
            />
          ),
        }}
      />
    </div>
  );
};

export default WorkFlowsTable;
