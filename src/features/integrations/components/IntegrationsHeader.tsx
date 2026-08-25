// UI Library
import { Button, Tag, Typography } from "antd";
// icon
import { IoIosArrowBack } from "react-icons/io";
// styles
import "./styles/integrations_header.scss";

const { Title, Text } = Typography;

interface IntegrationsHeaderProps {
  providerName: string;
  description: string;
  connected?: boolean;
  onBack: () => void;
}

function IntegrationsHeader({
  providerName,
  description,
  connected,
  onBack,
}: IntegrationsHeaderProps) {
  return (
    <div className="integrations-header">
      <Button
        color="primary"
        variant="text"
        icon={<IoIosArrowBack />}
        onClick={onBack}
      >
        Back
      </Button>
      <div className="integrations-header-content">
        <div className="header-label">
          <Title level={2} className="label-title">
            {providerName}
          </Title>
          <Text type="secondary" className="label-description">
            {description}
          </Text>
        </div>
        <Tag color={connected ? "success" : "default"}>
          {connected ? "Connected" : "Not Connected"}
        </Tag>
      </div>
    </div>
  );
}

export default IntegrationsHeader;
