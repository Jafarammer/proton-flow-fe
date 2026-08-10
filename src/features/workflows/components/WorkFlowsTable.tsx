// UI Library
import { Table } from "antd";
// type
import type { IWorkflowData } from "../types/components";
// config table
import { columnWorkflowsTable } from "../table/Columns";
// static data
import { dataTableWorkflows } from "../table/dataTable";
// styles scss
import "./styles/work_flows_table.scss";

const WorkFlowsTable = () => {
  return (
    <div className="work-flows-table">
      <Table<IWorkflowData>
        rowKey="id"
        columns={columnWorkflowsTable}
        dataSource={dataTableWorkflows}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          position: ["bottomRight"],
        }}
      />
    </div>
  );
};

export default WorkFlowsTable;
