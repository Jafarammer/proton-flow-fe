// UI Library
import { Card, Radio, Typography } from "antd";
// types
import type { ThemeMode } from "../../types/appearance";
// constants
import { themeList } from "../../constants";

const { Title, Text } = Typography;

interface ThemeSelectorProps {
  value: ThemeMode;
  onChange: (value: ThemeMode) => void;
}

const ThemeSelector = ({ value, onChange }: ThemeSelectorProps) => {
  return (
    <Card className="theme-card">
      <div className="theme-card-header">
        <Title level={4} className="header-title">
          Theme
        </Title>
        <Text type="secondary" className="description-header">
          Choose how Proton Flow should look.
        </Text>
      </div>

      <Radio.Group
        value={value}
        className="theme-options"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {themeList.map((item) => {
          const Icon = item.icon;
          const isSelected = value === item.value;
          return (
            <Radio.Button
              id={item.id}
              value={item.value}
              className={`radio-btn ${isSelected ? "selected" : ""}`}
            >
              <div className="theme-option-content">
                <Icon />
                {item.label}
              </div>
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </Card>
  );
};

export default ThemeSelector;
