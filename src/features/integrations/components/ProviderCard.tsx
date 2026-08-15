// UI Library
import { Button, Card, Divider, Tag, Typography } from "antd";
// icon
import { IoCopyOutline } from "react-icons/io5";
// types
import type { Provider } from "../types/component";
// styles scss
import "./styles/provider_card.scss";

const { Title, Text, Paragraph } = Typography;

interface ProviderCardProps {
  data: Provider;
  onConnect: (provider: Provider) => void;
  onDisconnect: (provider: Provider) => void;
  onConfigure: (provider: Provider) => void;
  onDocumentation: (provider: Provider) => void;
}

const ProviderCard = ({
  data,
  onConnect,
  onDisconnect,
  onConfigure,
  onDocumentation,
}: ProviderCardProps) => {
  // config data
  const Icon = data.icon;
  return (
    <Card className="provider-card">
      <div className="provider-card-header">
        <div className="provider-info">
          <div className="provider-icon">
            <Icon size={24} />
          </div>

          <div className="provider-title-wrapper">
            <Title className="provider-title" level={4}>
              {data.name}
            </Title>
            <Text type="secondary" className="provider-type">
              {data.type}
            </Text>
          </div>
        </div>

        <Tag className={`provider-status provider-status-${data.status}`}>
          <span className="provider-status-dot" />
          {data.status}
        </Tag>
      </div>

      <div className="provider-card-content">
        <Paragraph
          type="secondary"
          className="provider-description"
          ellipsis={{
            rows: 3,
            tooltip: true,
          }}
        >
          {data.description}
        </Paragraph>

        <div className="provider-models">
          <Text type="secondary" className="provider-label">
            Available Models
          </Text>
          <Text className="provider-models-text">{data.models}</Text>
        </div>

        <div className="provider-api-key">
          <Text type="secondary" className="provider-label">
            API Key
          </Text>
          {data.status === "connected" && (
            <div className="provider-key">
              <Text className="provider-key-text">{data.apiKey}</Text>
              <Button type="text" icon={<IoCopyOutline size={20} />} />
            </div>
          )}
          {data.status === "disconnected" && (
            <div className="provider-key">
              <Text type="secondary" className="provider-key-text-empty">
                No API key configured
              </Text>
            </div>
          )}
        </div>
      </div>

      <Divider />

      <div className="provider-card-footer">
        {data.status === "connected" && (
          <>
            <Button
              block
              onClick={() => onConfigure(data)}
              color="primary"
              variant="outlined"
            >
              Configure
            </Button>
            <Button
              block
              danger
              onClick={() => onDisconnect(data)}
              type="primary"
            >
              Disconnect
            </Button>
          </>
        )}
        {data.status === "disconnected" && (
          <>
            <Button
              block
              onClick={() => onDocumentation(data)}
              color="primary"
              variant="outlined"
            >
              Documentation
            </Button>
            <Button block onClick={() => onConnect(data)} type="primary">
              Connect
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};

export default ProviderCard;
