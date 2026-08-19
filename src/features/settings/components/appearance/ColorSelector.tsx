// UI Library
import { Card, Space, Typography } from "antd";
// constants
import { primaryColorOptions, secondaryColorOptions } from "../../constants";
// styles
import "../styles/appearance.scss";

const { Title, Text } = Typography;

interface ColorSelectorProps {
  primaryColor: string;
  secondaryColor: string;
  onChangePrimary: (color: string) => void;
  onChangeSecondary: (color: string) => void;
}

const ColorSelector = ({
  primaryColor,
  secondaryColor,
  onChangePrimary,
  onChangeSecondary,
}: ColorSelectorProps) => {
  return (
    <Card className="color-card">
      <div className="color-card-header">
        <Title level={4} className="header-title">
          Brand Colors
        </Title>

        <Text type="secondary" className="header-description">
          Customize interface colors.
        </Text>
      </div>

      <div className="color-settings">
        <Text strong>Primary Color</Text>

        <Space size={12} wrap>
          {primaryColorOptions.map((color) => {
            const isSelected = primaryColor === color;

            return (
              <button
                key={color}
                type="button"
                className={`color-options ${isSelected ? "selected" : ""}`}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => onChangePrimary(color)}
              />
            );
          })}
        </Space>
      </div>

      <div className="color-settings">
        <Text strong>Secondary Color</Text>

        <Space size={12} wrap>
          {secondaryColorOptions.map((color) => {
            const isSelected = secondaryColor === color;

            return (
              <button
                key={color}
                type="button"
                className={`color-options ${isSelected ? "selected" : ""}`}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => onChangeSecondary(color)}
              />
            );
          })}
        </Space>
      </div>
    </Card>
  );
};

export default ColorSelector;
