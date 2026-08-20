// UI Library
import { Card, Radio, Typography } from "antd";
// constants
import { radiusOptions } from "../../constants";

const { Text, Title } = Typography;

interface RadiusSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const RadiusSelector = ({ value, onChange }: RadiusSelectorProps) => {
  return (
    <Card className="radius-card">
      <div className="radius-card-header">
        <Title level={4} className="header-title">
          Interface Style
        </Title>
        <Text type="secondary" className="header-description">
          Adjust the interface corner radius.
        </Text>
      </div>

      <div className="radius-settings">
        <Text strong>Border Radius</Text>

        <Radio.Group
          value={value}
          optionType="button"
          buttonStyle="solid"
          onChange={(event) => {
            onChange(event.target.value);
          }}
          className="radio-group"
        >
          {radiusOptions.map((item) => {
            return (
              <Radio.Button
                key={item.value}
                value={item.value}
                className="radio-btn"
              >
                {item.label}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </div>
    </Card>
  );
};

export default RadiusSelector;
