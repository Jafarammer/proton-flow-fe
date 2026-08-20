// UI LIbrary
import { Button, Card, Typography } from "antd";
// types
import type { IAppearanceSettings } from "../../types/appearance";
// styles
import "../styles/appearance.scss";

const { Title, Text } = Typography;

interface AppearancePreviewProps {
  appearance: IAppearanceSettings;
}

const AppearancePreview = ({ appearance }: AppearancePreviewProps) => {
  return (
    <Card className="preview-card">
      <div className="preview-card-header">
        <Title level={4} className="header-title">
          Live Preview
        </Title>

        <Text type="secondary" className="header-description">
          Preview your current settings.
        </Text>
      </div>

      <div
        className="preview-content"
        style={{ borderRadius: appearance.borderRadius }}
      >
        <div
          className="preview-logo"
          style={{ backgroundColor: appearance.primaryColor }}
        >
          P
        </div>

        <Title level={3}>Proton Flow</Title>
        <Text type="secondary">
          {" "}
          Build intelligent AI workflows with a simple visual interface.
        </Text>

        <div className="preview-actions">
          <Button
            style={{
              color: "#fff",
              backgroundColor: appearance.primaryColor,
            }}
          >
            Primary Actions
          </Button>
          <Button>Secondary</Button>
        </div>

        <div
          className="preview-info"
          style={{ borderRadius: appearance.borderRadius }}
        >
          <Text
            style={{
              color: appearance.secondaryColor,
            }}
          >
            This preview reflects your current appearance settings.
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default AppearancePreview;
