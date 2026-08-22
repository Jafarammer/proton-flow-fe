// UI Library
import { Typography } from "antd";
// global component
import { ComingSoon } from "../../../../components/common";
// styles
import "../styles/builder.scss";

const { Title, Text } = Typography;

const BuilderSettings = () => {
  return (
    <div className="builder-settings">
      <ComingSoon className="img" />

      <Title level={3}>Coming Soon</Title>
      <Text type="secondary">This feature is currently under development.</Text>
    </div>
  );
};

export default BuilderSettings;
