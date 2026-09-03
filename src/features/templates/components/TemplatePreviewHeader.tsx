// UI Library
import { Button, Tag, Typography } from "antd";
// icon
import { IoIosArrowBack } from "react-icons/io";
// styles
import "./styles/template_preview_header.scss";

const { Title, Text } = Typography;

interface TemplatePreviewHeaderProps {
  onBack: () => void;
  onUseTemplate: () => void;
  title: string;
  description: string;
  category: string;
}

const TemplatePreviewHeader = ({
  onBack,
  onUseTemplate,
  title,
  description,
  category,
}: TemplatePreviewHeaderProps) => {
  return (
    <div className="template-preview-header">
      <Button
        color="primary"
        variant="text"
        icon={<IoIosArrowBack />}
        className="template-preview-header__back"
        onClick={onBack}
      >
        Back to Templates
      </Button>

      <div className="template-preview-header__content">
        <div className="template-preview-header__info">
          <Tag className="template-category">{category}</Tag>
          <Title level={3} className="label-title">
            {title}
          </Title>
          <Text type="secondary" className="label-description">
            {description}
          </Text>
        </div>
        <Button
          type="primary"
          size="large"
          // icon={<RocketOutlined />}
          onClick={onUseTemplate}
        >
          Use Template
        </Button>
      </div>
    </div>
  );
};

export default TemplatePreviewHeader;
