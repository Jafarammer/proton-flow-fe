// UI Library
import { Typography } from "antd";
// type
import type { ReactNode } from "react";
// styles
import "./styles/documentation_section.scss";

const { Title, Paragraph } = Typography;

interface DocumentationSectionProps {
  id: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

const DocumentationSection = ({
  id,
  title,
  description,
  children,
}: DocumentationSectionProps) => {
  return (
    <section id={id} className="documentation-section">
      <Title level={3}>{title}</Title>

      {description && (
        <Paragraph type="secondary" className="desc">
          {description}
        </Paragraph>
      )}

      {children}
    </section>
  );
};

export default DocumentationSection;
