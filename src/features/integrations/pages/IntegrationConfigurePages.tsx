import { useNavigate, useParams } from "react-router-dom";
// UI Library
import { Button } from "antd";
// hooks
import useIntegrationsConfigure from "../hooks/useIntegrationsConfigure";
// component
import IntegrationsHeader from "../components/IntegrationsHeader";
import IntegrationsAuthForm from "../components/IntegrationsAuthForm";
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

      <div className="integrations-configure-content">
        <IntegrationsAuthForm
          apiKey={integrationsConfigure.form.apiKey}
          placeholder={providerConfigs[provider ?? ""].apiKeyPlaceholder}
          testing={integrationsConfigure.testing}
          onChange={integrationsConfigure.onChangeApiKey}
          onTestConnection={integrationsConfigure.onTestConnection}
        />
      </div>
    </div>
  );
};

export default IntegrationConfigurePages;
