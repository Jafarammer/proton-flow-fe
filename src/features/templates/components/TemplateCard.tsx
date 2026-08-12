// UI Library
import { Button, Card, Typography, Tag } from "antd";
// types
import type { ICardTemplate } from "../types/component";
// style scss
import "./styles/template_card.scss";

const { Title, Paragraph } = Typography;

interface TemplateCardProps {
  data: ICardTemplate;
  onPreview: (templateId: ICardTemplate) => void;
  onUseTemplate: (templateId: ICardTemplate) => void;
}

const TemplateCard = ({
  data,
  onPreview,
  onUseTemplate,
}: TemplateCardProps) => {
  // config icon
  const Icon = data.icon;
  return (
    <Card className="template-card">
      <div className="template-card-header">
        <div className="template-card-icon">
          <Icon size={24} />
        </div>
        <Tag className="template-category">{data.category}</Tag>
      </div>

      <div className="template-card-content">
        <Title level={4} className="template-title">
          {data.title}
        </Title>
        <Paragraph
          type="secondary"
          className="template-description"
          ellipsis={{
            rows: 4,
            tooltip: true,
          }}
        >
          {data.description}
        </Paragraph>
      </div>

      <div className="template-card-footer">
        <Button
          block
          color="primary"
          variant="outlined"
          className="btn"
          onClick={() => onPreview(data)}
        >
          Preview
        </Button>
        <Button
          block
          color="primary"
          variant="solid"
          className="btn"
          onClick={() => onUseTemplate(data)}
        >
          Use Template
        </Button>
      </div>
    </Card>
  );
};

export default TemplateCard;
