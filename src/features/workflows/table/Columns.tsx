// UI Library
import { Button, Tag, Dropdown } from "antd";
// type
import type { TableColumnsType, MenuProps } from "antd";
import type { IWorkflowData } from "../types/components";
// icons
import { LuMail, LuDatabase, LuStickyNote } from "react-icons/lu";
import { TbInvoice } from "react-icons/tb";
import { MdMoreVert } from "react-icons/md";
// constants
import { statusColorTable } from "../constants";

interface WorkFlowColumnProps {
  onEditWorkflow: (workflow: IWorkflowData) => void;
  onConfirmDeleteWorkflow: (workflow: IWorkflowData) => void;
}

const getWorkflowTableIcon = (index: number) => {
  switch (index) {
    case 0:
      return <LuMail />;
    case 1:
      return <LuDatabase />;
    case 2:
      return <TbInvoice />;
    default:
      return <LuStickyNote />;
  }
};

export const getWorkflowColumns = ({
  onEditWorkflow,
  onConfirmDeleteWorkflow,
}: WorkFlowColumnProps): TableColumnsType<IWorkflowData> => [
  {
    title: "NAME",
    key: "name",
    width: "34%",
    render: (_, record, index) => (
      <div className="workflow-name-cell">
        <div className="workflow-icon">{getWorkflowTableIcon(index)}</div>

        <div className="workflow-name-content">
          <span className="workflow-name">{record.name}</span>
          <span className="workflow-id">ID: {record.id}</span>
        </div>
      </div>
    ),
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    width: "17%",
    render: (status: IWorkflowData["status"]) => (
      <Tag
        className={`workflow-status workflow-status-${status}`}
        color={statusColorTable[status]}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Tag>
    ),
  },
  {
    title: "TRIGGER",
    dataIndex: "trigger",
    key: "trigger",
    width: "17%",
  },
  {
    title: "LAST RUN",
    dataIndex: "lastRun",
    key: "lastRun",
    width: "20%",
  },
  {
    title: "ACTIONS",
    dataIndex: "actions",
    key: "actions",
    width: "12%",
    align: "right",
    render: (_, record) => {
      const items: MenuProps["items"] = [
        {
          key: "edit",
          label: "Edit",
        },
        {
          key: "delete",
          label: "Delete",
          danger: true,
        },
      ];

      const onActions: MenuProps["onClick"] = ({ key }) => {
        if (key === "edit") {
          onEditWorkflow(record);
        }
        if (key === "delete") {
          onConfirmDeleteWorkflow(record);
        }
      };

      return (
        <Dropdown
          menu={{
            items,
            onClick: onActions,
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button type="text" icon={<MdMoreVert size={20} />} />
        </Dropdown>
      );
    },
  },
];
