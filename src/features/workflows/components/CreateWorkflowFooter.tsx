// UI Library
import { Button } from "antd";
// styles scss
import "./styles/create_workflow_footer.scss";

interface CreateWorkflowFooterProps {
  loading: boolean;
  onSubmit: () => void;
  onCancel: () => void;
}

const CreateWorkflowFooter = ({
  loading,
  onSubmit,
  onCancel,
}: CreateWorkflowFooterProps) => {
  return (
    <div className="create-workflow-footer">
      <Button
        onClick={onCancel}
        color="primary"
        variant="filled"
        block
        className="btn"
      >
        Cancel
      </Button>
      <Button
        onClick={onSubmit}
        loading={loading}
        color="primary"
        variant="solid"
        block
        className="btn"
      >
        Create & Open Builder
      </Button>
    </div>
  );
};

export default CreateWorkflowFooter;
