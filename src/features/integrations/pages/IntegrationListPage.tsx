// UI Library
import { Row, Col } from "antd";
// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// component
import ProviderCard from "../components/ProviderCard";
// constants
import { providersData } from "../constants";
// hooks
import useIntegrations from "../hooks/useIntegrations";
// styles scss
import "./styles/integration_list_page.scss";

const IntegrationListPage = () => {
  // hooks
  const integrations = useIntegrations();
  return (
    <PageLayout
      title="Integrations"
      desc="Connect external services to supercharge your AI workflows. Manage API keys securely across your environment."
      className="integration-list-page"
    >
      <Row gutter={[24, 24]} wrap>
        {providersData.map((provider) => (
          <Col key={provider.id} xs={24} sm={12} lg={8}>
            <ProviderCard
              data={provider}
              onConnect={(data) => integrations.onConnect(data)}
              onDisconnect={(data) => integrations.onDisconnect(data)}
              onConfigure={(data) => integrations.onConfigure(data)}
              onDocumentation={(data) => integrations.onDocumentation(data)}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export default IntegrationListPage;
