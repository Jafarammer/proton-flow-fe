// UI Library
import { Button, Card, Form, Input, Typography } from "antd";
// styles
import "./styles/integrations_auth_form.scss";

const { Text, Title } = Typography;

interface IntegrationsAuthFormProps {
  apiKey: string;
  placeholder: string;
  onChange: (value: string) => void;
  onTestConnection: () => void;
  testing?: boolean;
}

const IntegrationsAuthForm = ({
  apiKey,
  placeholder,
  onChange,
  onTestConnection,
  testing,
}: IntegrationsAuthFormProps) => {
  return (
    <Card className="integrations-auth-form">
      <div className="header">
        <Title level={4} className="header-title">
          Authentication
        </Title>
        <Text type="secondary" className="header-description">
          Enter the API key used to connect this provider.
        </Text>
      </div>

      <Form layout="vertical" className="form">
        <Form.Item label={"ApI Key"}>
          <Input.Password
            className="input"
            value={apiKey}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
          />
        </Form.Item>

        <Text type="secondary" className="api-key-help">
          Your API key will be stored securely.
        </Text>

        <div className="form-actions">
          <Button
            color="primary"
            variant="filled"
            loading={testing}
            onClick={onTestConnection}
          >
            Test Connection
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default IntegrationsAuthForm;
