// UI Library
import { Button, Typography } from "antd";
// types
import type { IWorkflowData } from "../types/components";
// global components
import { AppModal } from "../../../components/common";
// styles
import "./styles/delete_workflow_modal.scss";

const { Text } = Typography;

interface DeleteWorkflowModalProps {
  open: boolean;
  workflow: IWorkflowData | null;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteWorkflowModal = ({
  open,
  workflow,
  onClose,
  onDelete,
}: DeleteWorkflowModalProps) => {
  return (
    <AppModal
      title="Delete Workflow"
      open={open}
      onCancel={onClose}
      className="delete-workflow-modal"
    >
      <div className="modal-content">
        <Text>
          Are you sure you want to delete <strong>{workflow?.name}</strong>?
          This action cannot be undone.
        </Text>
      </div>

      <div className="modal-actions">
        <Button color="primary" variant="filled" onClick={onClose}>
          Cancel
        </Button>
        <Button type="primary" danger onClick={onDelete}>
          Delete
        </Button>
      </div>
    </AppModal>
  );
};

export default DeleteWorkflowModal;
