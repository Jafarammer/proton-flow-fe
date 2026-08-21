// router
import { useNavigate } from "react-router-dom";
// UI Library
import { Typography, Button } from "antd";
// icon
import { MdOutlineDashboard } from "react-icons/md";
// global components
import { NotFound } from "../components/common";

const { Title, Text } = Typography;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <NotFound />

      <Title level={3}>Page Not Found</Title>
      <Text type="secondary">
        The workflow or page you're looking for doesn't exist. It might have
        been moved, deleted, or the URL might be incorrect.
      </Text>

      <Button
        color="primary"
        variant="solid"
        icon={<MdOutlineDashboard className="icon" />}
        onClick={() => navigate("/dashboard")}
      >
        Go Back To Dashboard
      </Button>
    </div>
  );
};

export default NotFoundPage;
