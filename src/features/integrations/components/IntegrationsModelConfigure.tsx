// UI Library
import { Card, Form, Select, Typography } from "antd";
// types
import type { IProviderModel } from "../types/integrationsConfigure";
// styles
import "./styles/integrations_model_configure.scss";

const { Title, Text } = Typography;

interface IntegrationsModelConfigureProps {
  providerName: string;
  model: string;
  models: IProviderModel[];
  onChange: (value: string) => void;
}

const IntegrationsModelConfigure = ({
  providerName,
  model,
  models,
  onChange,
}: IntegrationsModelConfigureProps) => {
  return (
    <Card className="integrations-model-configure">
      <div className="header">
        <Title level={4} className="header-title">
          Model Configuration
        </Title>
        <Text type="secondary" className="header-description">
          Choose the default model for {providerName}.
        </Text>
      </div>

      <Form layout="vertical" className="form">
        <Form.Item label="Default Model">
          <Select
            value={model}
            options={models}
            onChange={onChange}
            style={{
              minHeight: 40,
            }}
          />
        </Form.Item>

        <Text type="secondary">
          This model will be selected by default when adding a {providerName}{" "}
          node to the workflow.
        </Text>
      </Form>
    </Card>
  );
};

export default IntegrationsModelConfigure;
