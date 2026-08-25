import { useNavigate, useParams } from "react-router-dom";
// UI Library
import { Button, Row, Col, Divider } from "antd";
// hooks
import useIntegrationsConfigure from "../hooks/useIntegrationsConfigure";
// component
import IntegrationsHeader from "../components/IntegrationsHeader";
import IntegrationsAuthForm from "../components/IntegrationsAuthForm";
import IntegrationsModelConfigure from "../components/IntegrationsModelConfigure";
// constants
import { providerConfigs } from "../constants";
// styles
import "./styles/integrations_configure_page.scss";

const IntegrationConfigurePages = () => {
  // router
  const navigate = useNavigate();
  const { provider } = useParams();
  // hooks
  const integrationsConfigure = useIntegrationsConfigure(
    providerConfigs[provider ?? ""].models[0].value,
  );

  return (
    <div className="integrations-configure-page">
      <IntegrationsHeader
        providerName={providerConfigs[provider ?? ""].name}
        description={providerConfigs[provider ?? ""].description}
        onBack={() => navigate("/integrations")}
      />

      <Row gutter={[24, 24]} wrap>
        <Col xs={24} lg={12}>
          <IntegrationsAuthForm
            apiKey={integrationsConfigure.form.apiKey}
            placeholder={providerConfigs[provider ?? ""].apiKeyPlaceholder}
            testing={integrationsConfigure.testing}
            onChange={integrationsConfigure.onChangeApiKey}
            onTestConnection={integrationsConfigure.onTestConnection}
          />
        </Col>

        <Col xs={24} lg={12}>
          <IntegrationsModelConfigure
            providerName={providerConfigs[provider ?? ""].name}
            model={integrationsConfigure.form.model}
            models={providerConfigs[provider ?? ""].models}
            onChange={integrationsConfigure.onChangeModel}
          />
        </Col>
      </Row>
      <Divider className="divider" />
      <div className="integrations-configure-actions">
        <Button
          color="primary"
          variant="filled"
          onClick={() => navigate("/integrations")}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="solid"
          onClick={integrationsConfigure.onSave}
        >
          Save Configuration
        </Button>
      </div>
    </div>
  );
};

export default IntegrationConfigurePages;
