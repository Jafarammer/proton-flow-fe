// UI Library
import { Tag, Typography } from "antd";
// styles
import "./styles/documentation_header.scss";

const { Title, Paragraph } = Typography;

interface DocumentationHeaderProps {
  title: string;
  description: string;
}

const DocumentationHeader = ({
  title,
  description,
}: DocumentationHeaderProps) => {
  return (
    <header className="documentation-header">
      <Tag color={"processing"}>Integration</Tag>

      <Title className="title">{title}</Title>

      <Paragraph type="secondary" className="desc">
        {description}
      </Paragraph>
    </header>
  );
};

export default DocumentationHeader;
