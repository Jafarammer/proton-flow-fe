// UI Library
import { Typography } from "antd";
// global component
import { ComingSoon } from "../../../../components/common";
// styles
import "../styles/statistics.scss";

const { Title, Text } = Typography;

const StatisticsSettings = () => {
  return (
    <div className="statistics-settings">
      <ComingSoon className="img" />

      <Title level={3}>Coming Soon</Title>
      <Text type="secondary">This feature is currently under development.</Text>
    </div>
  );
};

export default StatisticsSettings;
